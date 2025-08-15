import { CiSettings } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import DeskSetting from "@/app/dexsetting/page";

const Navbar = () => {
  return (
   <nav className="hidden lg:block sticky top-0 z-50 bg-white  border-b-2">
     <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* sticky top-0 z-50 flex justify-between items-center py-2 px-5 bg-white border-b-2 */}
      <div>Search Bar area</div>
      <div className="flex items-center gap-x-8">
        <span  className=" rounded-full ">
          {/* <CiSettings className="text-white text-xl" /> */}
          <DeskSetting/>
        </span>
        <span className="p-3 rounded-full bg-[#5849EF]">
          {" "}
          <IoIosNotificationsOutline className="text-white text-xl" />{" "}
        </span>
        <Link href='profile'>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" width={150} alt="@shadcn"  />
          <AvatarFallback className="p-3">Fp</AvatarFallback>
        </Avatar>
        </Link>
        
        {/* <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none">
           
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu> */}
      </div>
    </div>
   </nav>
  );
};

export default Navbar;