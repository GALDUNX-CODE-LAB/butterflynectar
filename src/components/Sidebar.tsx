import { Command, CommandItem } from "@/components/ui/command";
import { LayoutDashboardIcon, MedalIcon, UserRoundPlus, Wallet2Icon } from "lucide-react";
import Link from "next/link";
import { MdOutlineEventAvailable } from "react-icons/md";

const Sidebar = () => {
  return (
    <Command className="pt-10 px-4">
      <CommandItem className="mb-7 text-sm rounded-3xl p-3 data-[selected=true]:bg-[#5849EF] data-[selected=true]:text-white">
        {" "}
        <LayoutDashboardIcon className=" mr-1.5 h-4 w-4" /> <Link href="/">Dashboard</Link>
      </CommandItem>
      <CommandItem className="mb-7 text-sm rounded-3xl p-3 data-[selected=true]:bg-[#5849EF] data-[selected=true]:text-white ">
        {" "}
        <UserRoundPlus className=" mr-1.5 h-4 w-4" /> <Link href="/referrals">Referrals</Link>
      </CommandItem>
      <CommandItem className="mb-7 text-sm rounded-3xl p-3 data-[selected=true]:bg-[#5849EF] data-[selected=true]:text-white">
        {" "}
        <MdOutlineEventAvailable className=" mr-1.5 h-4 w-4" /> <Link href="/booking">MyBooking</Link>
      </CommandItem>
      <CommandItem className="mb-7 text-sm rounded-3xl p-3 data-[selected=true]:bg-[#5849EF] data-[selected=true]:text-white ">
        {" "}
        <MedalIcon className=" mr-1.5 h-4 w-4" /> <Link href="/ranksperks">Ranks & Perks</Link>
      </CommandItem>
      <CommandItem className="mb-7 text-sm rounded-3xl p-3 data-[selected=true]:bg-[#5849EF] data-[selected=true]:text-white">
        {" "}
        <Wallet2Icon className=" mr-1.5 h-4 w-4" /> <Link href="/earning">Earning</Link>
      </CommandItem>
    </Command>
  );
};

export default Sidebar;
