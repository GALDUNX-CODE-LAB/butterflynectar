import Image from "next/image";
import nextSvg from "../../../public/itachi2.jpeg";
import grouped from "../../../public/group18.png"
import { ImQrcode } from "react-icons/im";
import { MdContentCopy } from "react-icons/md";
import PostsTable from "../post/PostsTable";
import ProfileTag from "../profile_board/profile_table";

const Secondheader = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="contained  order-4 lg:order-1  md:col-span-7">
        <h3 className="w-full text-left font-bold font-Ruska text-[16px]">
          How to offer
        </h3>
        <p className="w-full text-shared text-[13px]">A short description goes here</p>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3 justify-between items-center mt-3">
          <div className=" flex flex-col gap-3 text-center justify-center items-center">
             <Image
              src={nextSvg}
              alt="name"
              width={70}
              height={70}
              className="rounded-full"
              placeholder="blur"
             
            />
            <h3 className="w-full text-center font-bold font-Ruska text-[16px]">Send invitation</h3>
            <p className="text-shared text-[13px]">Lorem ipsum dolor sit amet consectetur. Arcu nibh.</p>
          </div>
          <div className=" flex flex-col gap-3 text-center justify-center items-center">
             <Image
              src={nextSvg}
              alt="name"
              width={70}
              height={70}
              className="rounded-full"
              placeholder="blur"
             
            />
            <h3 className="w-full text-center font-bold font-Ruska text-[16px]">Send invitation</h3>
            <p className="text-shared text-[13px]">Lorem ipsum dolor sit amet consectetur. Arcu nibh.</p>
          </div>
          <div className=" flex flex-col gap-3 text-center justify-center items-center">
             <Image
              src={nextSvg}
              alt="name"
              width={70}
              height={70}
              className="rounded-full"
              placeholder="blur"
             
            />
            <h3 className="w-full text-center font-bold font-Ruska text-[16px]">Send invitation</h3>
            <p className="text-shared text-[13px]">Lorem ipsum dolor sit amet consectetur. Arcu nibh.</p>
          </div>
        </div>
      </div>
      <div className="contained gap-2 order-1 lg:order-2  md:col-span-3">
         <h3 className="w-full text-left font-bold font-Ruska text-[16px]">
          REFERRAL STATS
        </h3>
         <p className="w-full text-shared text-[13px]">Short Description</p>
         <div className="flex flex-col justify-center relative items-center">
           <Image src={grouped} alt="name" height={200} className="p-0" />
           <h1 className="text-3xl font-bold font-Ruska absolute top-[40%]">
                        53 %
                    </h1>
            <p className="w-full text-shared text-[13px] absolute bottom-0 text-center">You’ve referred more than 53% of users and destributors!</p>
         </div>
       

        
      </div>
      <div className=" order-2 lg:order-3  md:col-span-3">
        <div className="contained gap-2">
          <h3 className="w-full text-left text-shared font-bold font-Ruska text-[16px]">
          QUICK ACTION
        </h3>
                  <ImQrcode className="w-[260px] h-[158px]"/>
                  <div className="flex items-center justify-between w-full text-[13px]">
                      <span className="font-bold font-Ruska text-sm">0x5DC126...c093f4A8</span>
                      <span className="flex items-center text-shared">copy <MdContentCopy  className="ml-2 h-4 w-4"/> </span>
                  </div>
                  <div className="rounded-3xl flex items-center bg-background w-full">
                      <button className="h-full w-[50%] text-sm p-3 focus:bg-[#5849EF] focus:text-white rounded-3xl">
                          Refer
                      </button>
                      <button className="h-full p-3 w-[50%] text-sm  focus:bg-[#5849EF] focus:text-white rounded-3xl">
                          Redeem nectar
                      </button>
                  </div>
        </div>
        <div className="w-full flex items-center mt-4 justify-between">
         <span className="w-[45%] bg-white p-4 rounded-3xl">2</span>
         <span className="w-[45%] bg-white p-4 rounded-3xl">1</span>
        </div>
      </div>
      <div className="contained order-3 lg:order-4  md:col-span-7">
        <ProfileTag/>
      </div>
    </div>
  );
};

export default Secondheader;
