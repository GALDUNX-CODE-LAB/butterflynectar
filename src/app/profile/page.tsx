import Firstprofile from "@/components/profile_board/First_prof";
import Secondprofile from "@/components/profile_board/Second_prof";

const Profilepage = () => {
    return (    
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4">
            <div>
                <Firstprofile/>
            </div>
            <div className="h-auto scrollbar-none md:h-[90vh] overflow-y-auto ">
                <Secondprofile/>
            </div>
            
        </div>
      );
}
 
export default Profilepage;