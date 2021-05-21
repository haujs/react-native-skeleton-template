export interface ModalControllerContextProps {
  show: (id: string) => void;
  hide: (id?: string) => void;
  remove: (id?: string) => void;
}
