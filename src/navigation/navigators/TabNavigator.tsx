import React, { useMemo, useCallback } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NAVIGATOR_SCREENS, NAVIGATOR_OPTIONS } from '../config/screens.config';
import { handleNavigationError } from '../utils/navigationErrorHandler';
import { IconName } from '@/types/components/icon';
import Icon from '@/components/Icon';

const Tab = createBottomTabNavigator();

const TabNavigator: React.FC = () => {
  // Memoize screen options
  const screenOptions = useMemo(() => ({
    ...NAVIGATOR_OPTIONS.tab,
    lazy: true,
    freezeOnBlur: true
  }), []);

  // Memoize icon renderer
  const renderIcon = useCallback((item: typeof NAVIGATOR_SCREENS.tab[0]) => {
    return ({ focused, color, size }: { focused: boolean; color: string; size: number }) => {
      try {
        return (
          <Icon 
            name={(item.options.tab?.icon as IconName) || 'home'}
            color={color}
            size={size}
          />
        );
      } catch (error) {
        handleNavigationError(error);
        return null;
      }
    };
  }, []);

  // Memoize screens
  const screens = useMemo(() => 
    NAVIGATOR_SCREENS.tab.map(item => ({
      key: item.name,
      name: item.name,
      component: item.component,
      options: {
        ...item.options,
        tabBarIcon: renderIcon(item)
      }
    })), 
    []
  );

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      {screens.map(screen => (
        <Tab.Screen {...screen} />
      ))}
    </Tab.Navigator>
  );
};

export default TabNavigator;