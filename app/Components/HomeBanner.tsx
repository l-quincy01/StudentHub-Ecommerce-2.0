import Image from "next/image";

const  HomeBanner= () => {
    return ( 
        
        <div className="relative bg-gradient-to-r from-sky-500 to-sky-700 mb-8"> 
        {/* Banner parent div */}
            <div className="mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center jusify-evenly">
                <div className="mb-8 md:mb-0 text-center"> 
                 {/* Banner text */}
                    <h1 className=" text-4xl md:text-6xl font-bold text-white mb-4"> Student Summer Sale</h1>
                    <p className="text-lg md:text-xl text-white mb-2">Enjoy premium discounts on campus </p>
                    <p className="text-2xl md:text-5xl text-yellow-400 font-bold">get 50% OFF</p>
                </div>
                <div className="w-1/3 relative aspect-video">
                     {/* Banner images */}
                        {/* <Image className="object-contain" src='/banner.img'
                        fill 
                        alt="Banner Image"/> */}
                        

                </div>
            </div>
        </div>
     );
}
 
export default HomeBanner ;