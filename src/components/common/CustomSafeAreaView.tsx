// src/components/common/CustomSafeAreaView.tsx
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type CustomSafeAreaViewProps = {
  children: React.ReactNode;
  style?: ViewStyle; // Ek stil özelleştirmeleri için
};

const CustomSafeAreaView: React.FC<CustomSafeAreaViewProps> = ({ children, style }) => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={[styles.safeArea, style, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
});

export default CustomSafeAreaView;