"use client"
import Image from "next/image";
import gameIcon from "../../../public/gamerename.jpg"
import yellowicon from "../../../public/yellowname.png"
import purpleIcon from "../../../public/bluerename.png"
import redicon from "../../../public/redrename.png"
import Tilt from "react-parallax-tilt";
const DashboardCard = () => {
    const data = [
        {
            id: 1,
            name:'Current Rank',
            value: 'BOSS',
            percentage:'',
            image: gameIcon,
        },
        {   
            id: 2,
            name:'Explorer Necter',
            value: 300,
            percentage: +22,
             image: yellowicon,
        },
        {
            id: 3,
            name:'Connector Nectar',
            value: 300,
            percentage: +22,
            image: purpleIcon,
        },
        {
            id: 4,
            name:'Total Nectar',
            value: 300,
            percentage: +22,
            image: redicon,
        },
    ]
    return ( <div className="grid grid-cols-2  lg:grid-cols-4 gap-4 ">
        
        {
            data.map((x)=>(
                <Tilt scale={1.1} transitionSpeed={500} key={x.id} >
                     <div  className="bg-white pt-5 pb-2 px-3 rounded-2xl relative">
                    <h3 className="text-shared">
                        {x.name}
                    </h3>
                    <div className="flex items-center gap-5 mt-3">
                        <h1 className="text-3xl font-bold font-Ruska">
                        {x.value}
                    </h1>
                    <span className="text-sm text-shared">
                        {x.percentage}
                    </span>
                    </div>
                    <Image src={x.image} alt="name" className="absolute top-0 right-0 opacity-30"/>
                </div>
               </Tilt>
               
            ))
        }
    </div> );
}
 
export default DashboardCard;