// "use client";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import { FaTimes } from "react-icons/fa";
// import { TbMenu3 } from "react-icons/tb";

// const Hamburgernav = () => {
//     const mapLinks = [
//         {
//             id: 1,
//             name: "Dashboard",
//             link:'/'
//         },
//         {
//             id: 2,
//             name: "Referrals",
//             link:'referrals'
//         },
//         {
//             id: 3,
//             name: "MyBooking",
//             link: 'booking'
//         },
//         {
//             id: 4,
//             name: "Ranks & Perks",
//             link:'ranksperks'
//         },
//         {
//             id: 5,
//             name: "Earning",
//             link:'earning'
//         },
//         {
//             id: 6,
//             name: "Profile",
//             link:'profile'
//         },
//     ]
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     const grabsize = () => {
//       if (window.innerWidth >= 1000) {
//         setOpen(false);
//       }
//     };
//     window.addEventListener("resize", grabsize);
//     return () => window.removeEventListener("resize", grabsize);
//   }, []);
//   console.log(open);

//   return (
//     <div className="sticky top-0 z-40 font-Ruska transition-all  duration-700">
//             <TbMenu3 onClick={()=> setOpen(true)} className="text-4xl"/>

//       {open && (
//         <nav
//           className='navbarstyle'
//         >
//             <FaTimes className=" absolute top-[8%] right-[15%] text-red-700 text-4xl" onClick={()=> setOpen(false)}/>
//            {mapLinks.map((x)=><Link href={x.link} key={x.id} className="capitalize  text-xl pb-1" onClick={()=>setOpen(false)}> {x.name}</Link>)}
//         </nav>
//       )}
//     </div>
//   );
// };

// export default Hamburgernav;

// "use client";
// import Link from "next/link";
// import React, { useEffect, useState, useCallback } from "react";
// import { FaTimes } from "react-icons/fa";
// import { TbMenu3 } from "react-icons/tb";

// const Hamburgernav = () => {
//   const mapLinks = [
//     { id: 1, name: "Dashboard", link: "/" },
//     { id: 2, name: "Referrals", link: "/referrals" },
//     { id: 3, name: "MyBooking", link: "/booking" },
//     { id: 4, name: "Ranks & Perks", link: "/ranksperks" },
//     { id: 5, name: "Earning", link: "/earning" },
//     { id: 6, name: "Profile", link: "/profile" },
//   ];

//   const [open, setOpen] = useState(false);

//   // Close on wide screens
//   useEffect(() => {
//     const onResize = () => {
//       if (window.innerWidth >= 1000) setOpen(false);
//     };
//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//   }, []);

//   // Lock body scroll while open
//   useEffect(() => {
//     if (open) {
//       const original = document.body.style.overflow;
//       document.body.style.overflow = "hidden";
//       return () => {
//         document.body.style.overflow = original;
//       };
//     }
//   }, [open]);

//   // Close on ESC
//   const onKeyDown = useCallback((e: KeyboardEvent) => {
//     if (e.key === "Escape") setOpen(false);
//   }, []);
//   useEffect(() => {
//     if (!open) return;
//     window.addEventListener("keydown", onKeyDown);
//     return () => window.removeEventListener("keydown", onKeyDown);
//   }, [open, onKeyDown]);

//   return (
//     <div className="sticky top-0 z-40 font-Ruska">
//       {/* Trigger */}
//       <button
//         aria-controls="mobile-sidenav"
//         aria-expanded={open}
//         aria-label="Open menu"
//         onClick={() => setOpen(true)}
//         className="p-2 rounded-lg hover:bg-black/5 transition"
//       >
//         <TbMenu3 className="text-4xl" />
//       </button>

//       {/* Backdrop */}
//       <div
//         onClick={() => setOpen(false)}
//         className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300
//         ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
//         aria-hidden={!open}
//       />

//       {/* Side Nav Panel */}
//       <nav
//         id="mobile-sidenav"
//         role="dialog"
//         aria-modal="true"
//         aria-hidden={!open}
//         className={`fixed left-0 top-0 z-[60] h-dvh w-72 max-w-[85vw] bg-white shadow-2xl
//         p-6 flex flex-col gap-4 transition-transform duration-300 ease-out will-change-transform
//         ${open ? "translate-x-0" : "-translate-x-full"}`}
//       >
//         <div className="flex items-center justify-between mb-4">
//           <span className="text-xl font-bold">Menu</span>
//           <button
//             onClick={() => setOpen(false)}
//             aria-label="Close menu"
//             className="p-2 rounded-full hover:bg-black/5 transition"
//           >
//             <FaTimes className="text-2xl text-red-600" />
//           </button>
//         </div>

//         <div className="h-px bg-black/10 mb-2" />

//         <ul className="flex flex-col gap-3">
//           {mapLinks.map((x) => (
//             <li key={x.id}>
//               <Link
//                 href={x.link}
//                 onClick={() => setOpen(false)}
//                 className="block capitalize text-lg py-2 px-2 rounded-xl hover:bg-black/5 transition"
//               >
//                 {x.name}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Hamburgernav;

"use client";
import Link from "next/link";
import React, { useEffect, useState, useCallback } from "react";
import { FaTimes } from "react-icons/fa";
import { TbMenu3 } from "react-icons/tb";

const Hamburgernav = () => {
  const mapLinks = [
    { id: 1, name: "Dashboard", link: "/" },
    { id: 2, name: "Referrals", link: "/referrals" },
    { id: 3, name: "MyBooking", link: "/booking" },
    { id: 4, name: "Ranks & Perks", link: "/ranksperks" },
    { id: 5, name: "Earning", link: "/earning" },
    { id: 6, name: "Profile", link: "/profile" },
  ];

  const [open, setOpen] = useState(false);

  // Close on wide screens
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1000) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Lock body scroll while open
  useEffect(() => {
    if (open) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [open]);

  // Close on ESC
  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setOpen(false);
  }, []);
  useEffect(() => {
    if (!open) return;
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onKeyDown]);

  return (
    <div className="sticky top-0 z-40 font-Ruska">
      {/* Trigger */}
      <button
        aria-controls="mobile-sidenav"
        aria-expanded={open}
        aria-label="Open menu"
        onClick={() => setOpen(true)}
        className="p-2 rounded-lg hover:bg-black/5 transition"
      >
        <TbMenu3 className="text-4xl" />
      </button>

      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300
        ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        aria-hidden={!open}
      />

      {/* Side Nav Panel */}
      <nav
        id="mobile-sidenav"
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        className={`fixed left-0 top-0 z-[60] h-dvh w-72 max-w-[85vw] bg-white shadow-2xl
        p-6 flex flex-col gap-4 transition-transform duration-300 ease-out will-change-transform
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Close button only */}
        <button
          onClick={() => setOpen(false)}
          aria-label="Close menu"
          className="ml-auto p-2 rounded-full hover:bg-black/5 transition"
        >
          <FaTimes className="text-2xl text-red-600" />
        </button>

        <div className="h-px bg-black/10" />

        {/* Links */}
        <ul className="flex flex-col gap-3">
          {mapLinks.map((x) => (
            <li key={x.id}>
              <Link
                href={x.link}
                onClick={() => setOpen(false)}
                className="block capitalize text-lg py-2 px-2 rounded-xl hover:bg-black/5 transition"
              >
                {x.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Hamburgernav;


