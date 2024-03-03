'use client'

import { Rating } from "@mui/material";
import { Anybody } from "next/font/google";
import { useCallback, useState } from "react";
import SetColor from "../Components/products/SetColor";
import SetQuantity from "../Components/products/SetQuantity";
import Button from "../Components/products/Button";

interface ProductDetailsProps {
    product: any
}

export type CartProduct = {
    id: String,
    name: String,
    description: String,
    category: String,
    brand: String,
    selectedImg: selectedImgType,
    quantity: number,
    price: number

}

export type selectedImgType = {
    color: String,
    colorCode: String,
    image: String

}

const Horizontal = () => {
    return <hr className="w-[30%] my-2" />
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {

    const [cartProduct, setCartProduct] = useState<CartProduct>({
        id: product.id,
        name: product.name,
        description: product.description,
        category: product.category,
        brand: product.brand,
        selectedImg: { ...product.images[0] },
        quantity: 1,
        price: product.price
    });
    console.log(cartProduct)

    const productRating =
        product.reviews.reduce((acc: number, item: any) =>
            item.rating + acc, 0) /
        product.reviews.length;

    const handleColorSelect = useCallback((value: selectedImgType) => {
        setCartProduct((prev) => {
            return {...prev, selectedImg: value}
        }) ;
     }, [cartProduct.selectedImg]);

     const handleDecrease = useCallback(() => {
        if(cartProduct.quantity === 1){
            return ;
        }
        setCartProduct((prevQty) => {
            return {...prevQty, quantity: prevQty.quantity--}
        } )
     }, [cartProduct])
     const handleIncrease = useCallback(() => {
        if(cartProduct.quantity === 10){
            return ;
        }
        setCartProduct((prevQty) => {
            return {...prevQty, quantity: prevQty.quantity++}
        } )
     }, [cartProduct])
  

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>Images</div>
            <div>
                <h2 className="text-3xl font-medium text-slate-700">{product.name}</h2>

                <div className="flex items-center gap-2">
                    <Rating value={productRating} readOnly />
                    <div>{product.reviews.length} reviews</div>
                </div>
                <Horizontal />

                <div className="text-justify">
                    {product.description}
                </div>
                <Horizontal />

                <div>
                    <span className="font-bold">CATEGORY:</span> {product.category}
                </div>
                <Horizontal />
                <div>
                    <span className="font-bold">BRAND:</span> {product.brand}
                </div>
                <Horizontal />
                <div className={product.inStock ? "text-teal-400" : "text-red-400"}>{product.inStock ? 'In stock' : 'Out of stock'}</div>
                <SetColor cartProduct={cartProduct} images={product.images} handColorSelect={handleColorSelect} />
                <Horizontal />
                <div>
                    <SetQuantity cartProduct = {cartProduct}
                     handleQtyDecrease = {handleDecrease}
                    handleQtyIncrease = {handleIncrease} 
                   
                   />
                </div>
                <Horizontal />
                <div className="max-w-[300px]">
                    <Button
                        label = "Add to cart"
                            onClick={()=>{

                            }}
                            // outline
                    />
                </div>
            </div>

        </div>
    );
}

export default ProductDetails;