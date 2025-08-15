import Firstheader from "@/components/ref_board/firstheader";
import Secondheader from "@/components/ref_board/secondheader";

const Referralpage = () => {
    return ( <div className="transition-all ease-in-out duration-500 delay-700">
    <h3 className="text-lg mb-5">
      Hello Sheriff
    </h3>
    <h1 className="text-4xl font-bold font-Ruska mb-7">
      HEY THERE, SHERIFF
    </h1>
    <div className="flex flex-col gap-5 transition-all  duration-1200 delay-1100">
      <Firstheader/>
      <Secondheader/>
    </div>
   </div> );
}
 
export default Referralpage;