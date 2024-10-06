export default interface ProductType {
  id: number;
  thumbnail?: string;
  name: string;
  category: string;
  variation: {} | string | null;
  allVariation: {}[] | string[] | null;
  color: {} | string | null;
  allColors: {}[] | string[] | null;
  qty: number;
  price: number;
  status: {
    id: number;
    text: string;
  };
}
