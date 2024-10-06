import FlightType from "./reportsType";

export default interface UserType {
  id: number;
  type: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  margin: number;
  gds_margin: number;
  flightsCount: number
  flights: FlightType[];
}