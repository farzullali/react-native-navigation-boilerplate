export interface UserState {
  id: string | null;
  email: string | null;
  name: string | null;
  preferences: {
    theme: 'light' | 'dark';
    notifications: boolean;
  };
}

export interface UpdateUserPayload {
  name?: string;
  email?: string;
  preferences?: Partial<UserState['preferences']>;
} 