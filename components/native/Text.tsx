import React from 'react';
import { Text as RNText, TextProps } from 'react-native';

export const Text = ({ children, className = '', ...props }: TextProps) => {
  return (
    <RNText
      {...props}
      className={`color-text-light dark:color-text-dark text-base font-branda ${className}`.trim()}
    >
      {children}
    </RNText>
  );
};
