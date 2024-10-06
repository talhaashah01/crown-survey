import ReportsType from "./reportsType";
import ReportsHeader from "./reportsHeader";

export default interface ReportsTableProps {
  headers: ReportsHeader[];
  data: ReportsType[];
}
