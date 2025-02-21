// Define route names (add all your route names here)
export const ROUTES = {
  // Auth Stack
  AUTH: {
    LOGIN: 'LOGIN',
    REGISTER: 'REGISTER',
    FORGOT_PASSWORD: 'FORGOT_PASSWORD',
  },
  
  // App Stack
  APP: {
    HOME: 'HOME',
    PROFILE: 'PROFILE',
    SETTINGS: 'SETTINGS',
  },
} as const;

export type Routes = typeof ROUTES.AUTH[keyof typeof ROUTES.AUTH] | 
                    typeof ROUTES.APP[keyof typeof ROUTES.APP];