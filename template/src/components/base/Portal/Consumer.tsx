import {PortalContextProps} from '@providers/Portal/types';
import {useCallback, useEffect, useRef} from 'react';

interface IConsumerProps {
  children: React.ReactNode;
  manager: PortalContextProps | null;
}

const Consumer = ({children, manager}: IConsumerProps): null => {
  const key = useRef<string | undefined>(undefined);

  const checkManager = useCallback(() => {
    if (!manager) {
      throw new Error(
        'Looks like you forgot to wrap your root component with `Provider` component ',
      );
    }
  }, [manager]);

  useEffect(() => {
    checkManager();
    if (key.current) {
      manager?.update(children, key.current);
    } else {
      key.current = manager?.mount(children);
    }
    return () => {
      checkManager();
      manager?.unmount(key.current);
    };
  }, [checkManager, children, manager]);

  return null;
};

export default Consumer;
