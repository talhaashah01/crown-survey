export default interface InputProps {
  type?: string;
  name?: string;
  value?: string;
  id?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  icon?: string;
  onChange?: any;
  wrapperClass?: string;
  large?: boolean;
  secondary?: boolean;
}
