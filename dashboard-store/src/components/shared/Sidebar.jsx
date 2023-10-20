import React from "react";
import {RiHome5Line, RiCellphoneFill, RiMacbookLine,RiLogoutCircleLine} from "react-icons/ri"
import { GrPersonalComputer } from "react-icons/gr";
const Sidebar = (props) => {
    const {showMenu} = props
    return (
        <div className={`bg-[#1f1d2b] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50  ${showMenu? "left-0": "-left-28"}`}> 
       <div>
        <ul className=" pl-4">
            <li>
                 <h1 className="text-3xl text-gray-300 uppercase font-bold text-center my-5">Logo</h1>
            </li>
            <li className="bg-[#262837] p-4 rounded-tl-lg rounded-bl-xl">
                <a href="#" className="bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-white">
                    <RiHome5Line className="text-3xl"/></a>
            </li>
            <li className="hover:bg-[#262837] p-4 rounded-tl-lg rounded-bl-xl group transition-colors">
                <a href="#" className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors">
                    <RiCellphoneFill className="text-3xl"/></a>
            </li>   
            <li className="hover:bg-[#262837] p-4 rounded-tl-lg rounded-bl-xl group transition-colors">
                <a href="#" className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors">
                    < RiMacbookLine className="text-3xl"/></a>
            </li>
        </ul>
        </div>
        <div>
            <ul>
            <li className="hover:bg-[#262837] p-4 rounded-tl-lg rounded-bl-xl group transition-colors">
                <a href="#" className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors">
                    <RiLogoutCircleLine className="text-3xl"/></a>
            </li>  
            </ul>
        </div>
        </div>
    )
}
export default Sidebar