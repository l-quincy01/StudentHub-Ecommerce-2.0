'use client'

import { CartProduct, selectedImgType } from "@/app/product/ProductDetails";

interface SetColorProps {
    images: selectedImgType[],
    cartProduct: CartProduct,
    handColorSelect: (value: selectedImgType) => void
}

const SetColor: React.FC<SetColorProps> = ({
    images, cartProduct, handColorSelect
}) => {
    return <div>
        <div className="flex gap-4 items-center">
            <span className="font-bold">COLOR:</span>
            <div className="flex gap-1">
                {
                    images.map((image) => {
                        return (<div key = {image.color} onClick={() => handColorSelect(image)} className={`h-7 w-7 rounded-full border-gray-300 flex items-center justify-center ${cartProduct.selectedImg.color === image.color ? "border-[1px]" : "border-none"}`}>
                        <div style={{ background: image.colorCode }} className="h-5 w-5 rounded-full border-[1.2px] border-slate-300 cursor-pointer" >

                        </div>
                    </div>)

                    })}
            </div>
        </div>
    </div>
}

export default SetColor;