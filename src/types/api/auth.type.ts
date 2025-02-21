import { User } from "./user.type";

export interface LoginRequest {
    email: string;
    password: string;
  }
  
  export interface LoginResponse {
    accessToken: string;
    refreshToken: string;
    user: User;
  }
  
  export interface RefreshTokenRequest {
    refreshToken: string;
  }
  
  export interface RefreshTokenResponse {
    accessToken: string;
    refreshToken: string;
  }