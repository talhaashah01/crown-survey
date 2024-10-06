export default interface OrderType {
  id: number;
  no: number;
  time: string;
  orderId: string;
  method: string;
  total: number;
  status: {
    id: number;
    text: string;
  };
}
