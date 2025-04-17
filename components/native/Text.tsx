import React from 'react';
import { Text as RNText, TextProps } from 'react-native';

export const Text = ({ children, className = '', ...props }: TextProps) => {
  const defaultClassName = 'color-text-light dark:color-text-dark text-base';

  return (
    <RNText {...props} className={`${defaultClassName} ${className}`.trim()}>
      {children}
    </RNText>
  );
};
