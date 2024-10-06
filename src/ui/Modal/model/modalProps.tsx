export default interface ModalProps {
  show: boolean;
  setShow: any;
  title?: string;
  text?: string;
  children?: any;
  onConfirm?: () => void;
  confirmText?: string;
  cancelText?: string;
}
