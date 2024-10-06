export default interface TableActionItemProps {
  icon: string;
  action?: string;
  tooltip?: boolean;
  tooltipPosition?: "top" | "right" | "bottom" | "left";
  onClick?: () => void;
}
