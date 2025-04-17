import React from 'react';
import { View as RNView, ViewProps } from 'react-native';

export const View = ({ children, className = '', ...props }: ViewProps) => {
  const defaultClassName =
    'items-center justify-center flex-1 bg-background-light dark:bg-background-dark';

  return (
    <RNView {...props} className={`${defaultClassName} ${className}`.trim()}>
      {children}
    </RNView>
  );
};
