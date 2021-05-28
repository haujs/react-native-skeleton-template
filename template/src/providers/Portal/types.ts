export interface PortalContextProps {
  mount(children: React.ReactNode, key?: string): string;
  update(children?: React.ReactNode, key?: string): void;
  unmount(key?: string): void;
}

export interface IManagerHandles {
  mount(key: string, children: React.ReactNode): void;
  update(key?: string, children?: React.ReactNode): void;
  unmount(key?: string): void;
}

export interface IPortalQueue {
  type: 'mount' | 'update' | 'unmount';
  key: string;
  children?: React.ReactNode;
}

export interface PortalState {
  key: string;
  children: React.ReactNode;
}
