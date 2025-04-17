import React from 'react';
import { View as RNView, ViewProps } from 'react-native';

export const View = ({ children, className = '', ...props }: ViewProps) => {
  return (
    <RNView
      {...props}
      className={`items-center justify-center flex-1 bg-background-light dark:bg-background-dark ${className}`.trim()}
    >
      {children}
    </RNView>
  );
};
