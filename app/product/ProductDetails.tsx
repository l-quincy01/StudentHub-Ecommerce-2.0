'use client'

import { Rating } from "@mui/material";
import { Anybody } from "next/font/google";

interface ProductDetailsProps{
    product:any
}

const Horizontal = () => {
    return <hr className = "w-[30%] my-2"/>
}

const ProductDetails:React.FC<ProductDetailsProps> = ({product}) => {

    const productRating = 
    product.reviews.reduce((acc: number, item: any) => 
    item.rating + acc, 0) / 
    product.reviews.length ;

    return ( 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>Images</div>
                <div>
                    <h2 className="text-3xl font-medium text-slate-700">{product.name}</h2>
                    <div className="flex items-center gap-2">
                        <Rating value={productRating} readOnly/>
                        <div>{product.reviews.length} reviews</div>
                    </div>
                   
                    <div className="text-justify">
                    {product.description}
                    </div>
                    <Horizontal />
                    <div>
                        <span className="font-bold">Category:</span> {product.category}
                    </div>
                    <div>
                        <span className="font-bold">Brand:</span> {product.brand}
                    </div>
                    <div>{product.inStock ? 'In stock' : 'Out of stock'}</div>
                </div>

        </div>
     );
}
 
export default ProductDetails;