import {PortalContext} from '@providers/Portal';
import * as React from 'react';

import Consumer from './Consumer';

interface IPortalProps {
  children: React.ReactNode;
}

const Portal = ({children}: IPortalProps): JSX.Element => (
  <PortalContext.Consumer>
    {(manager): JSX.Element => (
      <Consumer manager={manager}>{children}</Consumer>
    )}
  </PortalContext.Consumer>
);

export default Portal;
