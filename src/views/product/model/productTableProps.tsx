import ProductType from "./productType";
import ProductHeaders from "./productHeaders";

export default interface ProductTableProps {
  data: ProductType[];
  headers: ProductHeaders[];
}
