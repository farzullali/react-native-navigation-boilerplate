import React from 'react';
import { IconProps } from '../../types/components/icon';
import { View } from 'react-native';
// import Icon from 'react-native-vector-icons/Feather'; // You'll need to install this package

const IconComponent: React.FC<IconProps> = ({ 
  name, 
  size = 24, 
  color = '#000',
  focused = false 
}) => {
  return (
    <View style={{ opacity: focused ? 1 : 0.5 }}>
      {/* <Icon name={name} size={size} color={color} /> */}
    </View>
  );
};

export default IconComponent;