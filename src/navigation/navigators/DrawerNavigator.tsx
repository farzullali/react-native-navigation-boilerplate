import React, { useMemo, useCallback } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { RootStackParamList } from '../../types/navigation/navigation';
import { NAVIGATOR_OPTIONS, NAVIGATOR_SCREENS } from '../config/screens.config';
import { IconName } from '@/types/components/icon';
import { handleNavigationError } from '../utils/navigationErrorHandler';

const Drawer = createDrawerNavigator<RootStackParamList>();

const DrawerNavigator: React.FC = () => {
  // Similar optimizations as TabNavigator
  const screenOptions = useMemo(() => ({
    ...NAVIGATOR_OPTIONS.drawer,
    lazy: true
  }), []);

  const renderIcon = useCallback((item: typeof NAVIGATOR_SCREENS.drawer[0]) => {
    return ({ color, size }: { color: string; size: number }) => {
      try {
        return item.options.drawerIcon({ 
          name: (item.options.drawer?.icon as IconName) || 'home',
          color, 
          size 
        });
      } catch (error) {
        handleNavigationError(error);
        return null;
      }
    };
  }, []);

  const screens = useMemo(() => 
    NAVIGATOR_SCREENS.drawer.map(item => ({
      key: item.name,
      name: item.name,
      component: item.component,
      options: {
        ...item.options,
        drawerIcon: renderIcon(item)
      }
    })), 
    []
  );

  return (
    <Drawer.Navigator screenOptions={screenOptions}>
      {screens.map(screen => (
        <Drawer.Screen {...screen} />
      ))}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;