import Image from "next/image";
import nextSvg from "../../../../public/itachi2.jpeg";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { MdLaptopMac } from "react-icons/md";
import { Switch } from "@/components/ui/switch";

const MobileSetting = () => {
  return (
    <div>
      {/* first div  */}

      <div className="mb-5">
        <div className="flex items-start gap-4 mb-5">
          <Image src={nextSvg} alt="name" width={60} height={60} className="rounded-full" />
          <div>
            <h1 className="text-[16px] font-semibold">David Oshinowo</h1>
            <p className="text-[13px] text-[#000000A6]">David_ola</p>
          </div>
        </div>
        <button className="text-[13px] bg-[#5849EF] rounded-2xl py-3 px-4 font-[400] text-white">Edit Profile</button>
      </div>

      {/* second div  */}

      <div className="rounded-3xl bg-white p-4 mb-3">
        <h1 className="font-Ruska font-bold text-xl mb-2">Setting</h1>
        <p className="text-xs text-[#00000066] border-b-2 pb-3">A short description here</p>

        <ul className="text-black">
          <div className="flex justify-between items-center py-3 border-b border-black/10">
            <div>
              <p className="font-Ruska text-[13px] mb-2 font-bold text-[#000000A6]">Notification</p>
              <p className="text-sm">Enable email notification</p>
            </div>
            <Switch defaultChecked className="data-[state=checked]:bg-[#5849EF]/50 opacity-80" />
          </div>

          <div className="flex justify-between items-center py-3 border-b border-black/10">
            <p className="text-[13px] mb-0.5">Get Sms for referrals</p>
            <Switch className="data-[state=checked]:bg-[#5849EF]" />
          </div>

          <div className="flex justify-between items-center py-3 border-b border-black/10">
            <p className="text-[13px] mb-0.5">Get Sms for referrals</p>
            <Switch className="data-[state=checked]:bg-[#5849EF]" />
          </div>
        </ul>
      </div>

      {/* third div  */}

      <div className="bg-white p-5 rounded-3xl mb-3">
        <div className="flex justify-between items-center py-3 border-b border-black/10">
          <div>
            <p className="font-Ruska text-[13px] mb-2 font-bold text-[#000000A6]">Security</p>
            <p className="text-sm">Enable 2FA</p>
          </div>
          <Switch defaultChecked className="data-[state=checked]:bg-[#5849EF]" />
        </div>
      </div>

      {/* last div */}
      <div className="bg-white p-5 rounded-3xl">
        <div className="flex justify-between items-center py-3 border-b border-black/10">
          <div>
            <p className="font-Ruska text-[13px] mb-1.5 font-bold text-[#000000A6]">Active sessions</p>
            <div className="text-sm flex items-center gap-3">
              <HiOutlineDevicePhoneMobile className="text-2xl" />

              <div>
                <p className="text-[13px]">Iphone 13 pro</p>
                <p className="text-[11px] text-[#5849EF]">Current Session</p>
              </div>
            </div>
          </div>
          <button className="text-[#5849EF] text-xs">Log out</button>
        </div>
        <div className="flex justify-between  py-3 border-b border-black/10">
          <div>
            <div className="text-sm flex  gap-3">
              <MdLaptopMac className="text-2xl" />

              <div>
                <p className="text-[13px]">Macbook pro</p>
              </div>
            </div>
          </div>
          <button className="text-[#5849EF] text-xs">Log out</button>
        </div>
        <div className="flex justify-between  py-3 border-b border-black/10">
          <div>
            <div className="text-sm flex  gap-3">
              <HiOutlineDevicePhoneMobile className="text-2xl" />

              <div>
                <p className="text-[13px]">Iphone 13 pro</p>
              </div>
            </div>
          </div>
          <button className="text-[#5849EF] text-xs">Log out</button>
        </div>
      </div>
    </div>
  );
};

export default MobileSetting;
