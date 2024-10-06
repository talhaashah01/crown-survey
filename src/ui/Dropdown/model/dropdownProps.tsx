export default interface DropdownProps {
  options?: {}[] | string[];
  selected?: any;
  type?: "text" | "color";
  onSelect?: (value: any) => void;
}
