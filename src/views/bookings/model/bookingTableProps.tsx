import BookingType from "./bookingType";
import BookingHeaders from "./bookingType";

export default interface BookingTableProps {
  data: BookingType[];
  headers: BookingHeaders[];
}
