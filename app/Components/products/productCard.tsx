"use client";

import { formatPrice } from "@/utils/formatPrice";
import { truncateText } from "@/utils/truncate";
import { Rating } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { isTemplateExpression } from "typescript";

interface ProductCardProps {
    data: any
}

const ProductCard: React.FC<ProductCardProps> = ({data}) => {

    const router = useRouter();
    const productRating = 
                    data.reviews.reduce((acc: number, item: any) => 
                    item.rating + acc, 0) / 
                    data.reviews.length ;

    return (
        <div 
        onClick = {() => router.push(`/product/${data.id}`)}
        className="col-span-1 
        cursor-pointer 
        border-[1.2px ]
        border-slate-200
        bg-slate-50
        rounded-sm
        p-2
        transition
        hove:scale-105
        text-center
        text-sm">
            <div className="
            flex-col
            items-center
            w-full
            gap-1">


                <div className="aspect-square overflow-hidden relative w-f">
                    <Image  className="w-full object-contain"
                        fill
                        src = {data.images[0].image}
                        alt={data.name}
                       
                    />

                </div>
                <div className="mt-4">
                    {truncateText(data.name)}
                </div>
                <div className="">
                    <Rating value = {productRating} readOnly/>
                </div>
                <div>
                    {data.reviews.length} reviews
                </div>
                <div className="font-bold">{formatPrice(data.price)}</div>
            </div>
        </div>
    );
}

export default ProductCard;