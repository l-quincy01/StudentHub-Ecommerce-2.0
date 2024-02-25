import Container from "@/app/Components/Container";
import { product } from "@/utils/product";
import ProductDetails from "../ProductDetails";

interface IPrams {
    productId?: string
}

const Product = ({params: IPrams}) => {
    product
    return (  
      <div className="p-8">
          <Container>
            <ProductDetails product = {product}/>
        </Container>
      </div>
    );
}
 
export default Product;