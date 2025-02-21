import { InteractionManager } from 'react-native';

class NavigationMonitor {
  private transitions: Map<string, number> = new Map();
  
  startTransition(routeName: string) {
    this.transitions.set(routeName, performance.now());
    
    // Track JS thread impact
    InteractionManager.runAfterInteractions(() => {
      const endTime = performance.now();
      const startTime = this.transitions.get(routeName) || 0;
      console.log(`JS Thread Ready for ${routeName}: ${endTime - startTime}ms`);
    });
  }

  endTransition(routeName: string) {
    const startTime = this.transitions.get(routeName);
    if (startTime) {
      const duration = performance.now() - startTime;
      console.log(`Navigation to ${routeName} took ${duration}ms`);
      this.transitions.delete(routeName);
    }
  }
}

export const navigationMonitor = new NavigationMonitor();