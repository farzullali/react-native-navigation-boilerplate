import React from 'react';
import { View, Text, Button } from 'react-native';

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

const ErrorFallback = ({ error, resetErrorBoundary }: ErrorFallbackProps) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
    <Text style={{ fontSize: 18, marginBottom: 16 }}>Something went wrong:</Text>
    <Text style={{ color: 'red', marginBottom: 16 }}>{error.message}</Text>
    <Button title="Try again" onPress={resetErrorBoundary} />
  </View>
);

export default ErrorFallback;