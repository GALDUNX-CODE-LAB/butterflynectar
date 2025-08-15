import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Switch } from "@/components/ui/switch";
import { CiSettings } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { MdLaptopMac } from "react-icons/md";


const DeskSetting = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger className="text-center rounded-full bg-[#5849EF] p-3">
        <CiSettings className="text-white text-xl" />
      </AlertDialogTrigger>

      <AlertDialogContent className="rounded-3xl pb-10">
        {/* Header should only contain title + description */}
        <AlertDialogHeader>
          <div className="flex items-start justify-between gap-2">
            <div className="w-full">
              <AlertDialogTitle className="font-Ruska font-bold text-xl">
                Setting
              </AlertDialogTitle>
              <AlertDialogDescription className="text-xs text-[#00000066]">
                A short description here
              </AlertDialogDescription>
            </div>

            {/* Optional close icon */}
            <AlertDialogCancel className="border-none outline-none p-2 rounded-full hover:bg-black/5">
              <FaTimes />
            </AlertDialogCancel>
          </div>
        </AlertDialogHeader>

     
        <ul className="text-black mt-2">
          <li className="flex justify-between items-center py-3 border-b border-black/10">
            <div>
              <p className="font-Ruska text-[13px] mb-1.5 font-bold text-[#000000A6]">Notification</p>
              <p className="text-sm">Enable email notification</p>
            </div>
            <Switch
              defaultChecked
              className="data-[state=checked]:bg-[#5849EF]/50 opacity-80"
            />
          </li>

          <li className="flex justify-between items-center py-3 border-b border-black/10">
            <p className="text-[13px] mb-0.5">Get SMS for referrals</p>
            <Switch className="data-[state=checked]:bg-[#5849EF]" />
          </li>

          <li className="flex justify-between items-center py-3 border-b border-black/10">
            <p className="text-[13px] mb-0.5">Get notifications from bookings</p>
            <Switch className="data-[state=checked]:bg-[#5849EF]" />
          </li>

          <li className="flex justify-between items-center py-3 border-b border-black/10">
            <p className="text-[13px] mb-0.5">Get notification when there is a redemption</p>
            <Switch className="data-[state=checked]:bg-[#5849EF]" />
          </li>

          <li className="flex justify-between items-center py-3 border-b border-black/10">
            <div>
              <p className="font-Ruska text-[13px] mb-1.5 font-bold text-[#000000A6]">Security</p>
              <p className="text-sm">Enable 2FA</p>
            </div>
            <Switch className="data-[state=checked]:bg-[#5849EF]" />
          </li>

  
          <li className="flex justify-between items-center py-3 border-b border-black/10">
            <div>
              <p className="font-Ruska text-[13px] mb-1.5 font-bold text-[#000000A6]">Notification</p>
              <p className="text-sm">Enable email notification</p>
            </div>
            <Switch defaultChecked className="data-[state=checked]:bg-[#5849EF]" />
          </li>

          <li className="flex justify-between items-center py-3 border-b border-black/10">
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
            <p className="text-[#5849EF] text-xs">Log out</p>
          </li>
           <li className="flex justify-between  py-3 border-b border-black/10">
            <div>
              {/* <p className="font-Ruska text-[13px] mb-1.5 font-bold text-[#000000A6]">Active sessions</p> */}
              <div className="text-sm flex  gap-3">
                <MdLaptopMac className="text-2xl" />

                <div>
                    <p className="text-[13px]">Macbook pro</p>
                    {/* <p className="text-[11px] text-[#5849EF]">Current Session</p> */}
                </div>
              </div>
            </div>
            {/* <p className="text-[#5849EF] text-xs">Log out</p> */}
          </li>
           <li className="flex justify-between  py-3 border-b border-black/10">
            <div>
              {/* <p className="font-Ruska text-[13px] mb-1.5 font-bold text-[#000000A6]">Active sessions</p> */}
              <div className="text-sm flex  gap-3">
                <HiOutlineDevicePhoneMobile className="text-2xl" />

                <div>
                    <p className="text-[13px]">Iphone 13 pro</p>
                    {/* <p className="text-[11px] text-[#5849EF]">Current Session</p> */}
                </div>
              </div>
            </div>
            {/* <p className="text-[#5849EF] text-xs">Log out</p> */}
          </li>
         
        </ul>

       
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeskSetting;
