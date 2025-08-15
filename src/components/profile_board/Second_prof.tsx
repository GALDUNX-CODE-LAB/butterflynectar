"use client"
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import nextSvg from "../../../public/itachi2.jpeg";
import loadpercent from '../../../public/Group 39.png'
import ProfileTag from "./profile_table";
import { TbMilitaryRankFilled } from "react-icons/tb";
import { MdOutlineContentCopy } from "react-icons/md";
const Secondprofile = () => {
    return (
         <div className="grid grid-cols-1 gap-5">
        <div className="flex flex-col items-start rounded-3xl p-5 bg-white gap-7">
        <div className="flex items-center justify-between w-full">
            <h1 className="text-lg font-Ruska font-bold">Edit Profile</h1>
            <button className="bg-[#5849EF] text-white text-xs py-2 px-3 rounded-3xl">save changes</button>
        </div>
        <div className="flex items-center gap-3">
            <Image src={nextSvg} alt="itachi" className="rounded-full" width={80} height={80}/>
            <div>
                <div className="flex items-center gap-3 mb-5">
                    <button className="bg-[#E9EDD1] rounded-xl p-2 text-xs">+ Change Image</button>
                    <button className="bg-background rounded-xl p-2 text-xs">Remove image</button>
                    </div>
                    <h1 className="text-sm">Not more than 3mb and in PNG form</h1>
            </div>
        </div>
        <div className="grid grid-cols-2 gap-3 w-full">
            <div className="flex flex-col items-start">
                <span className="text-xs mb-1">
                    Username
                </span>
                 <input type="text" name="Username" id="null" className="w-full outline-none border-2 rounded-2xl p-2" />
            </div>
              <div className="flex flex-col items-start">
                <span className="text-xs mb-1">
                    Full Name
                </span>
                 <input type="text" name="Username" id="null" className="w-full outline-none border-2 rounded-2xl p-2" />
            </div>
              <div className="flex flex-col items-start">
                <span className="text-xs mb-1">
                    Email
                </span>
                 <input type="text" name="Username" id="null" className="w-full outline-none border-2 rounded-2xl p-2" />
            </div>
              <div className="flex flex-col items-start">
                <span className="text-xs mb-1">
                    Phone Number
                </span>
                 <input type="text" name="Username" id="null" className="w-full outline-none border-2 rounded-2xl p-2" />
            </div>
           
        </div>
        </div>
        {/* secondviv */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Tilt  className="p-5 rounded-3xl bg-white">
                 <h1 className="text-lg font-Ruska font-bold mb-1">Rank Tracker</h1>
                 <p className="text-sm text-black opacity-40 mb-5">
                    A short description here
                 </p>
                 <div className=" w-full flex justify-center relative ">
                        <Image src={loadpercent} alt="name"/>
                        <h1 className="absolute top-[35%] right-[37%] text-4xl font-Ruska font-bold">72%</h1>
                 </div>
                
            </Tilt>
              <Tilt  className="p-5 rounded-3xl bg-white">
                 <h1 className="text-lg font-Ruska font-bold mb-1">Upline Info</h1>
                 <p className="text-sm text-black opacity-40 mb-5">
                    A short description here
                 </p>
                 <div className="w-full flex flex-row lg:flex-col gap-3 md:justify-center items-center ">
                    <Image src={nextSvg} alt="name"  className="mb-2 rounded-3xl lg:rounded-full w-36 h-28 lg:w-20 lg:h-20 "/>
                    <h2 className="font-bold text-lg">David Ola</h2>
                 </div>
                 <div className="flex justify-between items-center">
                    <div>
                        <span className="text-[13px] text-black opacity-40 mb-5">Rank</span>
                        <h1 className="text-[16px] font-Ruska font-semibold flex items-center"><TbMilitaryRankFilled className="text-[#5849EF] text-lg" />CONNECTOR PRO</h1>
                    </div>
                    <div>
                        <span className="text-[13px] text-black opacity-40 mb-5">Referral Link</span>
                        <h1 className="text-[13px] font-Ruska font-semibold flex items-center"> Ox...e34581aud &nbsp; <MdOutlineContentCopy className="text-[#5849EF]" /></h1>
                    </div>
                 </div>

            </Tilt>
        </div>
        {/* third div  */}
        <div className="p-5 bg-white rounded-3xl">
            <h1 className="text-lg font-Ruska font-bold mb-1 text-[#606060]">
                Referrals
            </h1>
            <ProfileTag/>
        </div>
    </div> );
}
 
export default Secondprofile;