import React, {forwardRef, useImperativeHandle, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {IManagerHandles, PortalState} from './types';

const PortalManager: React.FC<any> = forwardRef((_, ref): any => {
  const [portals, setPortals] = useState<PortalState[]>([]);

  useImperativeHandle(
    ref,
    (): IManagerHandles => ({
      mount(key: string, children: React.ReactNode): void {
        setPortals(prev => [...prev, {key, children}]);
      },

      update(key: string, children: React.ReactNode): void {
        setPortals(() =>
          portals.map(item => {
            if (item.key === key) {
              return {...item, children};
            }
            return item;
          }),
        );
      },

      unmount(key: string): void {
        setPortals(prev => prev.filter(item => item.key !== key));
      },
    }),
  );

  return portals.map(({key, children}) => (
    <View
      key={key}
      collapsable={false}
      pointerEvents="box-none"
      style={StyleSheet.absoluteFill}>
      {children}
    </View>
  ));
});

export default PortalManager;
