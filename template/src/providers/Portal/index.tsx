import Helper from '@utils/helpers';
import React, {createContext, useMemo, useRef} from 'react';
import PortalManager from './Manager';
import {IManagerHandles, PortalContextProps} from './types';

export const PortalContext = createContext<PortalContextProps>({
  mount: () => '',
  update: () => null,
  unmount: () => null,
});

const PortalProvider: React.FC = ({children}) => {
  const managerRef = useRef<IManagerHandles>(null);

  const portalContext = useMemo(
    () => ({
      mount: (childNode: React.ReactNode, key?: string) => {
        if (!key) {
          key = Helper.generateUUID();
        }
        managerRef.current?.mount(key, childNode);
        return key;
      },
      update: (childNode: React.ReactNode, key: string) =>
        managerRef.current?.update(key, childNode),
      unmount: (key?: string) => managerRef.current?.unmount(key),
    }),
    [],
  );

  return (
    <PortalContext.Provider value={portalContext}>
      {children}
      <PortalManager ref={managerRef} />
    </PortalContext.Provider>
  );
};

export default PortalProvider;
