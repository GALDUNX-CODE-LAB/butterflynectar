import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Switch } from "@/components/ui/switch";
import { CiSettings } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";

const DeskSetting = () => {
    return ( 
    <AlertDialog >
  <AlertDialogTrigger className="text-center rounded-full bg-[#5849EF] p-3">
    <CiSettings className="text-white text-xl" /> 
  </AlertDialogTrigger>
  <AlertDialogContent className="rounded-3xl">
    <AlertDialogHeader>
        <div className="flex justify-center items-center">
            <div className="w-full">
                <AlertDialogTitle className="font-Ruska font-bold text-xl mb-1.5">Setting</AlertDialogTitle>
      <p className="text-xs text-[#00000066] border-b-3 pb-3">A short description here</p>
            </div>
            <AlertDialogCancel className="border-none outline-none"><FaTimes/></AlertDialogCancel>
        </div>
      
      <AlertDialogDescription>
       <ul className="text-black">
        <li className="flex justify-between items-center py-3 border-b-3">
            <div>
                <p className="font-Ruska text-[13px] mb-5 font-bold text-[#000000A6]">
                    Notification
                </p>
                <p>Enable email notification</p>
            </div>
            <Switch checked className="opacity-25"/>
        </li>
        <li className="flex justify-between items-center py-3 border-b-3">
            <div>
                <p className="text-[13px] mb-2">
                    Get Sms for referrals
                </p>
                {/* <p>Enable email notification</p> */}
            </div>
            <Switch />
        </li>
        <li className="flex justify-between items-center py-3 border-b-3">
            <div>
                <p className="text-[13px] mb-2">
                    Get notifications from bookings
                </p>
                {/* <p>Enable email notification</p> */}
            </div>
            <Switch />
        </li>
        <li className="flex justify-between items-center py-3 border-b-3">
            <div>
                <p className="text-[13px] mb-2">
                    Get notification when there is an redemption
                </p>
                {/* <p>Enable email notification</p> */}
            </div>
            <Switch  />
        </li>
        <li className="flex justify-between items-center py-3 border-b-3">
            <div>
                <p className="font-Ruska text-[13px] mb-3 font-bold text-[#000000A6]">
                    Security
                </p>
                <p>Enable 2FA</p>
            </div>
            <Switch/>
        </li>
         <li className="flex justify-between items-center py-3 border-b-3">
            <div>
                <p className="font-Ruska text-[13px] mb-3 font-bold text-[#000000A6]">
                    Notification
                </p>
                <p>Enable email notification</p>
            </div>
            <Switch checked className="opacity-25"/>
        </li>
         <li className="flex justify-between items-center py-3 border-b-3">
            <div>
                <p className="font-Ruska text-[13px] mb-3 font-bold text-[#000000A6]">
                    Notification
                </p>
                <p>Enable email notification</p>
            </div>
            <Switch checked className="opacity-25"/>
        </li>
       </ul>
      </AlertDialogDescription>
    </AlertDialogHeader>
    {/* <AlertDialogFooter>
      
      <AlertDialogAction></AlertDialogAction>
    </AlertDialogFooter> */}
  </AlertDialogContent>
</AlertDialog>
    );
}
 
export default DeskSetting;