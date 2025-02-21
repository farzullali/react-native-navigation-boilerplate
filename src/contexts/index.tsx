// src/contexts/CombinedProviders.tsx
import React, {ReactNode} from 'react';
import {ThemeProvider} from './ThemeContext';
import {AuthProvider} from './AuthContext';

const CombinedProviders: React.FC<{children: ReactNode}> = ({children}) => {
  return (
    <ThemeProvider>
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  );
};

export default CombinedProviders;
