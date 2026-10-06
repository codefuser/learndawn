/**
 * LiveClassProvider Interface Abstraction
 * Allows plug-and-play video infrastructure (Agora, 100ms, Zoom SDK, YouTube Live, Daily.co)
 * without touching core application presentation components.
 */
export interface LiveClassSessionConfig {
  classId: string;
  roomToken: string;
  userId: string;
  userName: string;
  isEducator: boolean;
  audioMutedDefault?: boolean;
  videoMutedDefault?: boolean;
}

export interface LiveClassProvider {
  providerName: 'liveclass_secure_room' | 'agora' | '100ms' | 'zoom_sdk' | 'custom_hls';
  initialize(config: LiveClassSessionConfig): Promise<boolean>;
  joinRoom(): Promise<void>;
  leaveRoom(): Promise<void>;
  toggleAudio(enabled: boolean): Promise<boolean>;
  toggleVideo(enabled: boolean): Promise<boolean>;
  raiseHand(): Promise<void>;
  sendChatMessage(message: string): Promise<void>;
  onChatMessage(callback: (msg: { sender: string; text: string; time: string }) => void): void;
}

/**
 * Standard Learndawn In-App Video Session Provider
 */
export class LearndawnClassProvider implements LiveClassProvider {
  providerName = 'liveclass_secure_room' as const;
  private config: LiveClassSessionConfig | null = null;
  private chatCallbacks: ((msg: { sender: string; text: string; time: string }) => void)[] = [];

  async initialize(config: LiveClassSessionConfig): Promise<boolean> {
    this.config = config;
    return true;
  }

  async joinRoom(): Promise<void> {
    // Connect to WebRTC or secure media gateway
    return;
  }

  async leaveRoom(): Promise<void> {
    return;
  }

  async toggleAudio(enabled: boolean): Promise<boolean> {
    return enabled;
  }

  async toggleVideo(enabled: boolean): Promise<boolean> {
    return enabled;
  }

  async raiseHand(): Promise<void> {
    return;
  }

  async sendChatMessage(message: string): Promise<void> {
    if (!this.config) return;
    const packet = {
      sender: this.config.userName,
      text: message,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    this.chatCallbacks.forEach((cb) => cb(packet));
  }

  onChatMessage(callback: (msg: { sender: string; text: string; time: string }) => void): void {
    this.chatCallbacks.push(callback);
  }
}
