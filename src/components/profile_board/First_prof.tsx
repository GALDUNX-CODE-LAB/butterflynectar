import Image from "next/image";
import nextSvg from "../../../public/itachi2.jpeg";
import { FaEnvelope, FaPeopleArrows, FaRegAddressCard } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";

const Firstprofile = () => {
  return (
    <div className="grid grid-cols-1 gap-5">
      <div className="py-7 px-5 flex flex-col items-center justify-center text-left bg-white gap-3 rounded-3xl">
        <Image src={nextSvg} alt="name" className="rounded-t-3xl lg:rounded-full w-full lg:w-[200px] lg:h-[200px]" />
        <div className="text-center">
          <h1 className="text-lg font-Ruska font-bold mb-1">ITACHI UCHIHA</h1>
          <h3 className="text-[13px] text-[#000000A6]">David_Olu123</h3>
        </div>
        <ul className="text-left w-full text-[#000000A6] text-xs">
          <li className="flex items-center mb-2">
            <FaEnvelope />
            &nbsp;&nbsp;Davidexample@gmail.com
          </li>
          <li className="flex items-center mb-2">
            <LuPhone />
            &nbsp;&nbsp;+2348186490349
          </li>
          <li className="flex items-center mb-2">
            <FaRegAddressCard />
            &nbsp;&nbsp;#11378908
          </li>
          <li className="flex items-center mb-2">
            <FaPeopleArrows />
            &nbsp;&nbsp;#11378908
          </li>
        </ul>
      </div>
      <div className="p-5 relative bg-white rounded-3xl transition-all duration-500">
        <h1 className="text-lg font-Ruska mb-2 font-bold">Expiring soon</h1>
        <p className="text-sm">Your passpord will soon expire on June 24th, 2025</p>
        <FaRegAddressCard className="text-[#5849EF80] absolute top-3 right-3 text-7xl" />
      </div>
    </div>
  );
};

export default Firstprofile;
