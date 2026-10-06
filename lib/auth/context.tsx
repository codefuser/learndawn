'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProfile, UserRole } from '@/types';
import { AuthService } from '@/services/auth';
import { useRouter } from 'next/navigation';

interface AuthContextType {
  user: UserProfile | null;
  isLoading: boolean;
  isAuthModalOpen: boolean;
  intendedDestination: string | null;
  openAuthModal: (returnUrl?: string) => void;
  closeAuthModal: () => void;
  signIn: (email: string, password?: string) => Promise<{ success: boolean; error?: string }>;
  signUp: (data: {
    fullName: string;
    email: string;
    mobile: string;
    targetExam: string;
    password?: string;
    language?: 'en' | 'hi' | 'ta';
  }) => Promise<{ success: boolean; error?: string }>;
  signOut: () => Promise<void>;
  switchDemoRole: (role: UserRole) => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: true,
  isAuthModalOpen: false,
  intendedDestination: null,
  openAuthModal: () => {},
  closeAuthModal: () => {},
  signIn: async () => ({ success: false }),
  signUp: async () => ({ success: false }),
  signOut: async () => {},
  switchDemoRole: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [intendedDestination, setIntendedDestination] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function loadUser() {
      try {
        const profile = await AuthService.getCurrentProfile();
        setUser(profile);
      } catch (e) {
        console.error('Failed to restore auth state', e);
      } finally {
        setIsLoading(false);
      }
    }
    loadUser();
  }, []);

  const openAuthModal = (returnUrl?: string) => {
    if (returnUrl) setIntendedDestination(returnUrl);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  const signIn = async (email: string, password?: string) => {
    setIsLoading(true);
    const { user: profile, error } = await AuthService.signIn(email, password);
    setIsLoading(false);

    if (error || !profile) {
      return { success: false, error: error || 'Failed to authenticate' };
    }

    setUser(profile);
    setIsAuthModalOpen(false);

    // Route based on destination or role
    if (intendedDestination) {
      const dest = intendedDestination;
      setIntendedDestination(null);
      router.push(dest);
    } else if (profile.role === 'admin') {
      router.push('/dashboard/admin');
    } else {
      router.push('/dashboard/student');
    }

    return { success: true };
  };

  const signUp = async (data: {
    fullName: string;
    email: string;
    mobile: string;
    targetExam: string;
    password?: string;
    language?: 'en' | 'hi' | 'ta';
  }) => {
    setIsLoading(true);
    const { user: profile, error } = await AuthService.signUp(data);
    setIsLoading(false);

    if (error || !profile) {
      return { success: false, error: error || 'Failed to create student account' };
    }

    setUser(profile);
    setIsAuthModalOpen(false);

    if (intendedDestination) {
      const dest = intendedDestination;
      setIntendedDestination(null);
      router.push(dest);
    } else {
      // Default new student landing
      router.push('/dashboard/student');
    }

    return { success: true };
  };

  const signOut = async () => {
    await AuthService.signOut();
    setUser(null);
    router.push('/');
  };

  const switchDemoRole = (role: UserRole) => {
    if (user) {
      setUser({ ...user, role });
      if (role === 'admin') {
        router.push('/dashboard/admin');
      } else {
        router.push('/dashboard/student');
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthModalOpen,
        intendedDestination,
        openAuthModal,
        closeAuthModal,
        signIn,
        signUp,
        signOut,
        switchDemoRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
