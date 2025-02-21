export interface User {
    id: string;
    email: string;
    name: string;
    avatar?: string;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface UserPreferences {
    theme: 'light' | 'dark';
    notifications: boolean;
    language: string;
  }