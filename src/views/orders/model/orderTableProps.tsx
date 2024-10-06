import OrderType from "./orderType";
import OrderHeaders from "./orderHeaders";

export default interface OrderTableProps {
  data: OrderType[];
  headers: OrderHeaders[];
}
