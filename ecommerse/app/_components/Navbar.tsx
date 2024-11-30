"use client"
import Image from "next/image"
import Slice from '@/public/Slice 1.png'
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  const[present,setPresent] = useState<String>("Home")  
  const onClickHandler = (name:String)=>{
    setPresent(name)
  }
  return (
    <div className="absolute top-0 w-full overflow-hidden">
    <div className="flex justify-evenly items-center   bg-white">
        <Image src={Slice} alt=""/>
        <div className="flex items-center border rounded-md  gap-1 h-10">
            <IoSearchOutline size={20} className="ml-2"/>
            <input type="text" placeholder="Search" className="outline-none lg:w-96 md:w-60"/>
            <button className="bg-green-500 text-white h-10 w-20 rounded-r-md">Search</button>
        </div>
        <div className="flex items-center gap-2">
            <CiHeart size={30} className="border-r-2 w-10  pr-2"/>
            <MdOutlineShoppingBag size={30} className=""/>
        </div>
    </div>
    <div className="flex justify-between lg:px-40 md:px-10 bg-black  py-4">
        <div className="flex gap-7">
            <div className={`flex items-center gap-1 ${present === 'Home'?'text-white':'text-gray-400'}`} onClick={()=>onClickHandler("Home")}>
            <p className="text-sm">Home</p>
            <FaChevronDown size={10}/>
            </div>
            <div className={`flex items-center gap-1 ${present === 'Shop'?'text-white':'text-gray-400'}`} onClick={()=>onClickHandler("Shop")}>
            <p className="text-sm">Shop</p>
            <FaChevronDown size={10}/>
            </div>
            <div className={`flex items-center gap-1 ${present === 'Pages'?'text-white':'text-gray-400'}`} onClick={()=>onClickHandler("Pages")}>
            <p className="text-sm">Pages</p>
            <FaChevronDown size={10}/>
            </div>
            <div className={`flex items-center gap-1 ${present === 'Blog'?'text-white':'text-gray-400'}`} onClick={()=>onClickHandler("Blog")}>
            <p className="text-sm">Blog</p>
            <FaChevronDown size={10}/>
            </div>
            <div className={`flex items-center gap-1 ${present === 'About Us'?'text-white':'text-gray-400'}`} onClick={()=>onClickHandler("About Us")}>
            <p className="text-sm">About Us</p>
            <FaChevronDown size={10}/>
            </div>
            <div className={`flex items-center gap-1 ${present === 'Contact Us'?'text-white':'text-gray-400'}`} onClick={()=>onClickHandler("Contact Us")}>
            <p className="text-sm">Contact Us</p>
            <FaChevronDown size={10}/>
            </div>
           
        </div>
        <div className="flex items-center gap-2 text-white">
            <FaPhoneAlt/>
            <p>32847239842484</p>
        </div>
    </div>
    </div>
  )
}

export default Navbar