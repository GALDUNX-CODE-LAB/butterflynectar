import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { LayoutDashboardIcon } from "lucide-react";
import Link from "next/link";


const Sidebar = () => {
    return ( 
        <Command className="pt-10 px-4">
  
    
   
      <CommandItem className="mb-7 text-sm rounded-3xl p-3 data-[selected=true]:bg-[#5849EF] data-[selected=true]:text-white"> <LayoutDashboardIcon className=" mr-1.5 h-4 w-4"/> <Link href='/'>Dashboard</Link></CommandItem>
       <CommandItem className="mb-7 text-sm rounded-3xl p-3 data-[selected=true]:bg-[#5849EF] data-[selected=true]:text-white "> <LayoutDashboardIcon className=" mr-1.5 h-4 w-4"/> <Link href='/referrals'>Referrals</Link></CommandItem>
        <CommandItem className="mb-7 text-sm rounded-3xl p-3 data-[selected=true]:bg-[#5849EF] data-[selected=true]:text-white"> <LayoutDashboardIcon className=" mr-1.5 h-4 w-4"/> <Link href='/booking'>MyBooking</Link></CommandItem>
               <CommandItem className="mb-7 text-sm rounded-3xl p-3 data-[selected=true]:bg-[#5849EF] data-[selected=true]:text-white "> <LayoutDashboardIcon className=" mr-1.5 h-4 w-4"/> <Link href='/ranksperks'>Ranks & Perks</Link></CommandItem>
        <CommandItem className="mb-7 text-sm rounded-3xl p-3 data-[selected=true]:bg-[#5849EF] data-[selected=true]:text-white"> <LayoutDashboardIcon className=" mr-1.5 h-4 w-4"/> <Link href='/earning'>Earning</Link></CommandItem>
                {/* <CommandItem className="mb-7 text-sm rounded-3xl p-3 data-[selected=true]:bg-[#5849EF] data-[selected=true]:text-white lg:hidden"> <LayoutDashboardIcon className=" mr-1.5 h-4 w-4"/> <Link href='/profile'></Link></CommandItem> */}

    
    
  
</Command>
     );
}
 
export default Sidebar;