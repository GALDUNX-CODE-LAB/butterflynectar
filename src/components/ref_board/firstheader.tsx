"use client"
import Tilt from "react-parallax-tilt";
const Firstheader = () => {
    const data = [
        {
            id: 1,
            name:'Total Teferral',
            value: 20,
            percentage:''
        },
        {   
            id: 2,
            name:'Explorer Necter',
            value: 300,
            percentage: +22,
        },
        {
            id: 3,
            name:'Referrals for next rank',
            value: 300,
            percentage: "",
        },
        
    ]
    return ( <div className="grid grid-cols-2 md:grid-cols-3 gap-4 transition-all transform ease-in-out duration-1200 delay-900 ">
        
        {
            data.map((x, i)=>(
                <Tilt scale={1.1} transitionSpeed={500} key={x.id}>
                    <div   className={`bg-white pt-5 pb-2 px-3 rounded-2xl 
        ${i === 2 ? "col-span-2 mx-auto md:col-span-1 md:mx-0" : ""}`}>
                    <h3>
                        {x.name}
                    </h3>
                    <div className="flex items-center gap-5 mt-3">
                        <h1 className="text-3xl font-bold font-Ruska">
                        {x.value}
                    </h1>
                    <span className="text-sm">
                        {x.percentage}
                    </span>
                    </div>
                </div>
                </Tilt>
                
            ))
        }
    </div> );
}
 
export default Firstheader;