import TableHeader from "./tableHeader";

export default interface TableProps {
  header: TableHeader[];
  headerColSpan?: number;
  align?: "center" | "left" | "right" | "start" | "end";
  children?: any;
}
