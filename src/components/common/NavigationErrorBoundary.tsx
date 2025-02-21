import React, { Component, ErrorInfo } from 'react';
import { View, Text } from 'react-native';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

export class NavigationErrorBoundary extends Component<Props, State> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log to error service
    console.error('Navigation Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Navigation Error. Please restart the app.</Text>
        </View>
      );
    }

    return this.props.children;
  }
}