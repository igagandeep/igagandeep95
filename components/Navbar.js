import Link from "next/link";
import {nav_items} from "../utils/nav_items";
import {SocialIcon} from "react-social-icons";
import {UserIcon, MenuIcon} from "@heroicons/react/outline";
import React, {useState} from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);     

    return (
        <div className="py-7">        
        <nav  className="z-999 bg-white flex flex-col md:flex-row  md:items-stretch md:justify-evenly p-3  h-auto shadow-lg fixed top-0 w-full z-50">
            <div className="flex justify-between mx-5 text-center" >
            <h1 className="text-2xl font-bold"> Gagan</h1>
            <MenuIcon  onClick={() => {setIsOpen(!isOpen)}} className="md:hidden w-8 h-7 cursor-pointer"/>
            </div>

            <div className={`mx-5  justify-evenly md:mx-0 mt-5 md:mt-0 md:flex md:space-x-10 ${isOpen ? "block" : "hidden"} `}>
                <div className="flex flex-col md:mt-1   md:flex-row md:space-x-10 font-bold ">
                    {nav_items.map((item, i) => (
                        <Link  key={item.menu} href={item.target}>
                        <a className=" md:transition md:duration-100 md:transform hover:scale-125 hover:text-red-500 active:text-red-500 py-2 md:py-0 text-sm">{item.menu}</a>
                    </Link>
                    ))}
                </div>
                <div className="space-x-1 my-2 md:my-0">
                    <SocialIcon  style={{width:"30px", height:"30px"}} url="https://facebook.com" /> 
                    <SocialIcon  style={{width:"30px", height:"30px"}} url="https://linkedin.com" /> 
                    <SocialIcon style={{width:"30px", height:"30px"}} url="https://twitter.com" />   
                </div>
            </div>            
        </nav>
        </div>

    )
}

export default Navbar
