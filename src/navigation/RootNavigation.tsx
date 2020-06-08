import React from 'react';
import { NavigationContainerRef } from '@react-navigation/native';

export const isMountedRef = React.createRef();
export const navigationRef = React.createRef<NavigationContainerRef>();

export function navigate(name: string, params?: any) {
  if (isMountedRef.current && navigationRef.current) {
    navigationRef.current?.navigate(name, params);
  } else {
    //Before mount
  }
}

export default {
  navigate,
};
