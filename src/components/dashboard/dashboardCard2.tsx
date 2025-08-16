"use client";
import { ImQrcode } from "react-icons/im";
import { MdContentCopy } from "react-icons/md";
import { ChartPieDonutText } from "../Piechart";
import { useState } from "react";
import { FaCircle } from "react-icons/fa";

const heading = [
  {
    id: 1,
    name: "Name",
  },
  {
    id: 2,
    name: "Date",
  },
  {
    id: 3,
    name: "Referred",
  },
  {
    id: 4,
    name: "Badge",
  },
];
const avtivities = [
  {
    id: 1,
    name: "Sheriff",
    date: "12/9/2025",
    refered: 30,
    status: "Completed",
  },
  {
    id: 2,
    name: "Ibrahim",
    date: "12/9/2025",
    refered: 30,
    status: "Completed",
  },
  {
    id: 3,
    name: "Nonso",
    date: "12/9/2025",
    refered: 30,
    status: "Completed",
  },
];
const DashboardCard2 = () => {
  const [referTab, setReferTab] = useState(true);
  const [referTab2, setReferTab2] = useState(true);
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
      <div className="order-3 lg:order-1 contained w-full overflow-hidden">
        <h3 className="w-full text-left font-bold font-Ruska text-[16px]">QUICK ACTION</h3>
        <ImQrcode className="w-[260px] h-[158px]" />
        <div className="flex items-center justify-between w-full text-[13px]">
          <span className="font-bold font-Ruska text-sm">0x5DC126...c093f4A8</span>
          <span className="flex items-center text-shared">
            copy <MdContentCopy className="ml-2 h-4 w-4" />{" "}
          </span>
        </div>
        <div className="rounded-3xl flex items-center bg-background w-full">
          <button
            className={`h-full w-[50%] text-sm p-3 ${
              referTab ? "bg-[#5849EF] text-white" : ""
            } focus:text-white rounded-3xl`}
            onClick={() => setReferTab(true)}
          >
            Refer
          </button>
          <button
            className={`h-full p-3 w-[50%] text-sm  ${
              referTab ? "" : "bg-[#5849EF] text-white"
            } focus:text-white rounded-3xl`}
            onClick={() => setReferTab(false)}
          >
            Redeem nectar
          </button>
        </div>
      </div>

      {/* this is the second card  */}
      <div className="order-2 lg:order-2  contained">
        <div className="flex items-center justify-between w w-full">
          <h3 className="w-[30%] text-shared">Activities</h3>
          <div className="rounded-3xl flex items-center bg-background w-[50%] text-[13px]">
            <button
              className={`h-full w-[50%] text-xs py-2 px-1 ${referTab2 ? "bg-[#5849EF] text-white" : ""} rounded-3xl`}
              onClick={() => setReferTab2(true)}
            >
              Refer
            </button>
            <button
              className={`h-full py-2 px-1 w-[50%] text-xs  ${referTab2 ? "" : "bg-[#5849EF] text-white"} rounded-3xl`}
              onClick={() => setReferTab2(false)}
            >
              Bookings
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <div className="grid grid-cols-4 gap-5 w-full text-shared">
            {heading.map((x) => (
              <h4 key={x.id} className="text-left text-[12px]">
                {x.name}
              </h4>
            ))}
          </div>
          <div className=" w-full mt-7 space-y-5">
            {avtivities.map((x) => (
              <div className="grid grid-cols-4 gap-x-3 text-left text-[13px] items-center text-shared" key={x.id}>
                <h4 className="text-left ">{x.name}</h4>
                <h4 className="text-left">{x.date}</h4>
                <h4 className="text-center">{x.refered}</h4>
                <h4 className="text-left flex items-center justify-center">
                  <small className="bg-yellow-400 p-1 px-2 rounded-sm">{x.status}</small>
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* this is the piechart card   */}
      <div className="order-1 lg:order-3 bg-white pt-4 px-4 rounded-2xl w-full">
        <h3 className="w-full text-left font-bold">QUICK STATS</h3>
        <div className="w-full grid grid-cols-3 gap-x-2 text-[13px] pt-3 capitalize">
          <div className="flex items-center gap-1 ">
            <FaCircle color="#CFEE49" /> <span>bookings</span>{" "}
          </div>
          <div className="flex items-center gap-1">
            <FaCircle color="#212121" />
            <span>Referrals</span>{" "}
          </div>
          <div className="flex items-center gap-1">
            <FaCircle color="#CC1C43" />
            <span>Pending </span>
          </div>
        </div>
        <ChartPieDonutText />
      </div>
    </div>
  );
};

export default DashboardCard2;
