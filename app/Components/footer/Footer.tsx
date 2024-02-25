import Link from "next/link";
import Container from "../Container";
import Footerlist from "./FooterList";
import {MdFacebook} from "react-icons/md"
import {AiFillInstagram, AiFillTwitterCircle, } from "react-icons/ai"



const Footer = () => {
    return ( 
        <footer className = "bg-slate-700 text-slate-200 text-sm mt-16">

        <Container>
            <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">

                <Footerlist>
                    <h3 className="text-base font-bold mb-2"> Shop Categories</h3>
                    <Link href="#"> Phones </Link>
                    <Link href="#"> Laptops </Link>
                    <Link href="#"> Desktops </Link>
                    <Link href="#"> Watches </Link>
                    <Link href="#"> TV's </Link>
                    <Link href="#"> Accessories </Link>
                </Footerlist>
                <Footerlist>
                    <h3 className="text-base font-bold mb-2"> Shop Categories</h3>
                    <Link href="#"> Phones </Link>
                    <Link href="#"> Laptops </Link>
                    <Link href="#"> Desktops </Link>
                    <Link href="#"> Watches </Link>
                    <Link href="#"> TV's </Link>
                    <Link href="#"> Accessories </Link>
                </Footerlist>
                <Footerlist>
                    <h3 className="text-base font-bold mb-2"> Shop Categories</h3>
                    <Link href="#"> Phones </Link>
                    <Link href="#"> Laptops </Link>
                    <Link href="#"> Desktops </Link>
                    <Link href="#"> Watches </Link>
                    <Link href="#"> TV's </Link>
                    <Link href="#"> Accessories </Link>
                </Footerlist>
                <div className="w-full md:w 1/3 mb-6">
                    <h3 className="text-base font-bold mb-2"> About us</h3>
                    <p className="mb-2">
                        Studentshare is a p2p marketplace for students within univeristy institutions
                    </p>
                    <p>&copy; {new Date().getFullYear()} 
                           Studentshare. All rights Reserved 
                    </p>
                </div>
                <Footerlist>
                    <h3 className="text-base font-bold mb-2">Follow Us</h3>
                    <div className="flex gap-2">
                        <Link href={""}> <MdFacebook size = {24}/> </Link>
                        <Link href={""}> <AiFillTwitterCircle  size = {24}/> </Link>
                        <Link href={""}> <AiFillInstagram  size = {24}/> </Link>
                    </div>
                </Footerlist>
            </div>
        </Container>

        </footer>
     );
}
 
export default Footer;