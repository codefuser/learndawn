import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { UserProfile, UserRole } from '@/types';
import { createServerClient } from '@/lib/supabase/server';

export interface DbUserRecord {
  id: string;
  email: string;
  mobile: string;
  passwordHash: string;
  salt: string;
  fullName: string;
  role: UserRole;
  targetGoalExam: string;
  academicClass: string;
  preferredLanguage: 'en' | 'hi' | 'ta';
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

const DATA_DIR = path.join(process.cwd(), 'data');
const USERS_FILE = path.join(DATA_DIR, 'users.json');

function ensureDataDirectory() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

function hashPassword(password: string, salt: string): string {
  return crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
}

function seedBaselineUsers(): DbUserRecord[] {
  const adminSalt = crypto.randomBytes(16).toString('hex');
  const studentSalt = crypto.randomBytes(16).toString('hex');

  return [
    {
      id: 'usr-admin-0001',
      email: 'admin@learndawn.com',
      mobile: '+919999900001',
      passwordHash: hashPassword('Admin@123', adminSalt),
      salt: adminSalt,
      fullName: 'Learndawn Administrator',
      role: 'admin',
      targetGoalExam: 'All Exams Governance',
      academicClass: 'Faculty & Admin',
      preferredLanguage: 'en',
      isActive: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'usr-student-0001',
      email: 'student@learndawn.com',
      mobile: '+919876543210',
      passwordHash: hashPassword('Student@123', studentSalt),
      salt: studentSalt,
      fullName: 'Arjun Sharma',
      role: 'student',
      targetGoalExam: 'NEET UG 2025',
      academicClass: 'Class 12',
      preferredLanguage: 'en',
      isActive: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ];
}

export const UsersDatabase = {
  getAllUsers(): DbUserRecord[] {
    try {
      ensureDataDirectory();
      if (!fs.existsSync(USERS_FILE)) {
        const initial = seedBaselineUsers();
        fs.writeFileSync(USERS_FILE, JSON.stringify(initial, null, 2), 'utf8');
        return initial;
      }
      const raw = fs.readFileSync(USERS_FILE, 'utf8');
      return JSON.parse(raw);
    } catch (e) {
      console.error('[UsersDatabase] Error reading users file:', e);
      return seedBaselineUsers();
    }
  },

  saveAllUsers(users: DbUserRecord[]): void {
    try {
      ensureDataDirectory();
      fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2), 'utf8');
    } catch (e) {
      console.error('[UsersDatabase] Error saving users file:', e);
    }
  },

  findById(id: string): DbUserRecord | null {
    const users = this.getAllUsers();
    return users.find((u) => u.id === id) || null;
  },

  findByIdentifier(identifier: string): DbUserRecord | null {
    const clean = identifier.trim().toLowerCase();
    const cleanMobile = identifier.trim().replace(/[\s-]/g, '');
    const users = this.getAllUsers();

    return (
      users.find((u) => {
        const uEmail = u.email.toLowerCase();
        const uMobile = u.mobile.replace(/[\s-]/g, '');
        return uEmail === clean || uMobile === cleanMobile || (cleanMobile && uMobile.endsWith(cleanMobile));
      }) || null
    );
  },

  createUser(payload: {
    fullName: string;
    email: string;
    mobile: string;
    targetExam: string;
    password: string;
    role?: UserRole;
    language?: 'en' | 'hi' | 'ta';
  }): { user: UserProfile | null; error: string | null } {
    const existing = this.findByIdentifier(payload.email);
    if (existing) {
      return { user: null, error: 'An account with this email is already registered. Please sign in.' };
    }

    if (payload.mobile) {
      const existingMobile = this.findByIdentifier(payload.mobile);
      if (existingMobile) {
        return { user: null, error: 'An account with this mobile number is already registered. Please sign in.' };
      }
    }

    const salt = crypto.randomBytes(16).toString('hex');
    const passwordHash = hashPassword(payload.password, salt);
    const userId = 'usr-' + crypto.randomUUID();

    const newRecord: DbUserRecord = {
      id: userId,
      email: payload.email.trim().toLowerCase(),
      mobile: payload.mobile.trim(),
      passwordHash,
      salt,
      fullName: payload.fullName.trim(),
      role: payload.role || 'student',
      targetGoalExam: payload.targetExam || 'NEET UG',
      academicClass: 'Class 12',
      preferredLanguage: payload.language || 'en',
      isActive: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const users = this.getAllUsers();
    users.push(newRecord);
    this.saveAllUsers(users);

    // Synchronize to Supabase if accessible
    this.syncToSupabase(newRecord).catch((err) => {
      console.warn('[UsersDatabase] Background Supabase sync note:', err?.message || err);
    });

    const profile: UserProfile = {
      id: newRecord.id,
      email: newRecord.email,
      full_name: newRecord.fullName,
      mobile: newRecord.mobile,
      preferred_language: newRecord.preferredLanguage,
      target_goal_exam: newRecord.targetGoalExam,
      academic_class: newRecord.academicClass,
      role: newRecord.role,
      is_active: newRecord.isActive,
      created_at: newRecord.createdAt,
    };

    return { user: profile, error: null };
  },

  verifyCredentials(
    identifier: string,
    plainPassword: string
  ): { user: UserProfile | null; error: string | null } {
    const record = this.findByIdentifier(identifier);
    if (!record) {
      return { user: null, error: 'No account found matching this email or mobile. Please register.' };
    }

    if (!record.isActive) {
      return { user: null, error: 'Your account has been deactivated. Please contact support.' };
    }

    const testHash = hashPassword(plainPassword, record.salt);
    if (testHash !== record.passwordHash) {
      return { user: null, error: 'Incorrect password. Please verify and try again.' };
    }

    const profile: UserProfile = {
      id: record.id,
      email: record.email,
      full_name: record.fullName,
      mobile: record.mobile,
      preferred_language: record.preferredLanguage,
      target_goal_exam: record.targetGoalExam,
      academic_class: record.academicClass,
      role: record.role,
      is_active: record.isActive,
      created_at: record.createdAt,
    };

    return { user: profile, error: null };
  },

  async syncToSupabase(user: DbUserRecord): Promise<void> {
    const supabase = createServerClient();
    if (!supabase) return;

    try {
      await supabase.from('profiles').upsert({
        id: user.id,
        email: user.email,
        full_name: user.fullName,
        mobile: user.mobile,
        target_goal_exam: user.targetGoalExam,
        preferred_language: user.preferredLanguage,
        academic_class: user.academicClass,
        is_active: user.isActive,
        updated_at: new Date().toISOString(),
      });
    } catch (e) {
      // ignore
    }
  },
};
