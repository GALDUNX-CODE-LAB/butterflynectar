import DashboardCard from "@/components/dashboard/DashboardCard";
import Rankboard from "@/components/rank_board/layout_1";
import PerckCheck from "@/components/rank_board/perk_check";
import Rankperks from "@/components/rank_board/rankperk";

const Referralpage = () => {
  return ( <div className="transition-all ease-in-out duration-700 ">
    <h3 className="text-lg mb-5">
      Hello Sheriff
    </h3>
    <h1 className="text-4xl font-bold font-Ruska mb-7">
      HEY THERE, SHERIFF
    </h1>
    <div className="flex flex-col gap-5 transition-all transform ease-in-out duration-1200 delay-1100">
      <DashboardCard/>
      <Rankboard/>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full border-2">
        <PerckCheck/>
        <PerckCheck/>
      </div>
    </div>
   </div> );
}
 
export default Referralpage;