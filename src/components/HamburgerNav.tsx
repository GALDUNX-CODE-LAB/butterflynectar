"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { TbMenu3 } from "react-icons/tb";

const Hamburgernav = () => {
    const mapLinks = [
        {
            id: 1,
            name: "Dashboard",
            link:'/'
        },
        {
            id: 2,
            name: "Referrals",
            link:'referrals'
        },
        {
            id: 3,
            name: "MyBooking",
            link: 'booking'
        },
        {
            id: 4,
            name: "Ranks & Perks",
            link:'ranksperks'
        },
        {
            id: 5,
            name: "Earning",
            link:'earning'
        },
        {
            id: 6,
            name: "Profile",
            link:'profile'
        },
    ]
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const grabsize = () => {
      if (window.innerWidth >= 1000) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", grabsize);
    return () => window.removeEventListener("resize", grabsize);
  }, []);
  console.log(open);

  return (
    <div className="sticky top-0 z-40 font-Ruska transition-all  duration-700">
            <TbMenu3 onClick={()=> setOpen(true)} className="text-4xl"/>

      {open && (
        <nav
          className='navbarstyle'
        >
            <FaTimes className=" absolute top-[8%] right-[15%] text-red-700 text-4xl" onClick={()=> setOpen(false)}/>
           {mapLinks.map((x)=><Link href={x.link} key={x.id} className="capitalize  text-xl pb-1" onClick={()=>setOpen(false)}> {x.name}</Link>)}
        </nav>
      )}
    </div>
  );
};

export default Hamburgernav;
