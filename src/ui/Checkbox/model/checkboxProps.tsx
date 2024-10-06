export default interface CheckboxProps {
  label?: string;
  beforeLabel?: boolean;
  state: boolean;
  containerClass?: string;
  onChange?: (state: boolean) => void;
}
