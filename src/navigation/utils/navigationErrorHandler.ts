export class NavigationError extends Error {
  constructor(message: string, public code: string) {
    super(message);
    this.name = 'NavigationError';
  }
}

export const handleNavigationError = (error: unknown) => {
  if (error instanceof NavigationError) {
    console.error(`[Navigation Error ${error.code}]:`, error.message);
    // Send to analytics/monitoring
  }
  return null;
}; 