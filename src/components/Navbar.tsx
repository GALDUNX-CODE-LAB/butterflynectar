import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import Link from "next/link";
import DeskSetting from "@/app/(dashboard)/dexsetting/page";

const Navbar = () => {
  return (
    <nav className="hidden lg:block sticky top-0 z-50 bg-white  border-b-2">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <div>Search Bar area</div>
        <div className="flex items-center gap-x-8">
          <span className=" rounded-full ">
            <DeskSetting />
          </span>

          <Link href="profile">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" width={150} alt="@shadcn" />
              <AvatarFallback className="p-3">Fp</AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
