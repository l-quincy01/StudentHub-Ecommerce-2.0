'use client'

import { CartProduct } from "@/app/product/ProductDetails";

interface SetQtyProps {
    cartCounter?: boolean;
    cartProduct: CartProduct;
    handleQtyIncrease: () => void;
    handleQtyDecrease: () => void;
}

const btnStyles = "border-[1.2px] border-slate-300 p-1"

const SetQuantity: React.FC<SetQtyProps> = ({
    cartProduct,
    cartCounter,
    handleQtyIncrease,
    handleQtyDecrease

}) => {
    return <div className="flex gap-8 items-center ">
        {cartCounter ? null : <div className="font-semibold">
            Quantity
        </div>}
        <div className="flex gap-4 items-center justify-center text-base">
            <button className={btnStyles} onClick={handleQtyDecrease}>-</button>
            <div> {cartProduct.quantity}</div>
            <button className={btnStyles} onClick={handleQtyIncrease} > + </button>
        </div>

    </div>;
}

export default SetQuantity;