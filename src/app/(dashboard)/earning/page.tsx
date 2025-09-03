"use client";
import DashboardCard from "@/components/dashboard/DashboardCard";
import { EarnFirstPage } from "@/components/earnboard/earnfirstgraph";
import { EarnSecond } from "@/components/earnboard/earnsecondgraph";

const EarningPage = () => {
  return (
    <div className="transition-all ease-in-out duration-700 ">
      <h3 className="text-lg mb-5">Hello Sheriff</h3>
      <h1 className=" text-2xl lg:text-4xl font-bold font-Ruska mb-7">HEY THERE, SHERIFF</h1>
      <DashboardCard />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
        {/* <EarningPage/> */}
        <EarnFirstPage />
        <EarnSecond />
      </div>
      <div className="transition-all duration-500 bg-white p-5 rounded-3xl mt-5">
        <h3 className="w-full text-left font-bold font-Ruska text-xl mb-2">Redemption Tab</h3>
        <p className="w-full text-shared text-[13px]">Check team progress and success</p>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 mt-5">
          <div className="p-5 flex flex-col items-center justify-center bg-background rounded-3xl">
            <div className="bg-[#5849EF] flex flex-col items-center justify-center gap-5 w-full p-3 md:p-5 rounded-3xl">
              <div className="w-full flex items-center justify-between">
                <h1 className="text-lg font-Ruska font-bold text-white opacity-60">CASH-OUT</h1>
                <button className="bg-white text-[13px] py-2 px-4 rounded-3xl font-semibold">Withdraw</button>
              </div>
              <div className="w-full flex items-center justify-between">
                <div>
                  <span className="text-white opacity-60 text-xs">Connector Nectar</span>
                  <h1 className="text-3xl text-white font-Ruska font-bold">400</h1>
                </div>
                <button className="text-[10px] py-1 px-3 rounded-3xl bg-[#CFEE49] ">40%/40%</button>
              </div>
            </div>
            <div className="w-full mt-5">
              <h4 className="mb-3 text-[#00000066] opacity-40 text-xs">History</h4>

              {/* here you can clear all the list tags since the data will come dynamic */}
              <ul className="max-h-48 overflow-y-scroll scrollbar-none">
                <li className="flex justify-between border-b-2 pb-2">
                  <div>
                    <h3 className="text-sm font-semibold">55 Nectar</h3>
                    <span className="text-black opacity-40 text-xs">Today</span>
                  </div>
                  <span className="font-Ruska font-bold text-lg">$20</span>
                </li>
                <li className="flex justify-between border-b-2 pb-2">
                  <div>
                    <h3 className="text-sm font-semibold">55 Nectar</h3>
                    <span className="text-black opacity-40 text-xs">Today</span>
                  </div>
                  <span className="font-Ruska font-bold text-lg">$20</span>
                </li>
                <li className="flex justify-between border-b-2 pb-2">
                  <div>
                    <h3 className="text-sm font-semibold">55 Nectar</h3>
                    <span className="text-black opacity-40 text-xs">Today</span>
                  </div>
                  <span className="font-Ruska font-bold text-lg">$20</span>
                </li>
                <li className="flex justify-between border-b-2 pb-2">
                  <div>
                    <h3 className="text-sm font-semibold">55 Nectar</h3>
                    <span className="text-black opacity-40 text-xs">Today</span>
                  </div>
                  <span className="font-Ruska font-bold text-lg">$20</span>
                </li>
              </ul>
            </div>
            <div></div>
          </div>
          <div className="p-5 flex flex-col items-center justify-center bg-background rounded-3xl">
            <div className="bg-[#CFEE49] flex flex-col items-center justify-center gap-5 w-full p-3 md:p-5 rounded-3xl">
              <div className="w-full flex items-center justify-between">
                <h1 className="text-lg font-Ruska font-bold text-[#00000099] ">CASH-OUT</h1>
                <button className="bg-black text-white text-[13px] py-2 px-4 rounded-3xl font-semibold">
                  Withdraw
                </button>
              </div>
              <div className="w-full flex items-center justify-between">
                <div>
                  <span className="text-[#00000066] text-xs">Available Nectar</span>
                  <h1 className="text-3xl text-black font-Ruska font-bold">400</h1>
                </div>
                <button className="text-[10px] py-1 px-3 rounded-3xl bg-[#333394] ">40%/40%</button>
              </div>
            </div>
            <div className="w-full mt-5">
              <h4 className="mb-3 text-[#00000066] opacity-40 text-xs">History</h4>

              {/* here you can clear all the list tags since the data will come dynamic */}
              <ul className="max-h-48 overflow-y-scroll scrollbar-none">
                <li className="flex justify-between border-b-2 pb-2">
                  <div>
                    <h3 className="text-sm font-semibold">55 Nectar</h3>
                    <span className="text-black opacity-40 text-xs">Today</span>
                  </div>
                  <span className="font-Ruska font-bold text-lg">$20</span>
                </li>
                <li className="flex justify-between border-b-2 pb-2">
                  <div>
                    <h3 className="text-sm font-semibold">55 Nectar</h3>
                    <span className="text-black opacity-40 text-xs">Today</span>
                  </div>
                  <span className="font-Ruska font-bold text-lg">$20</span>
                </li>
                <li className="flex justify-between border-b-2 pb-2">
                  <div>
                    <h3 className="text-sm font-semibold">55 Nectar</h3>
                    <span className="text-black opacity-40 text-xs">Today</span>
                  </div>
                  <span className="font-Ruska font-bold text-lg">$20</span>
                </li>
                <li className="flex justify-between border-b-2 pb-2">
                  <div>
                    <h3 className="text-sm font-semibold">55 Nectar</h3>
                    <span className="text-black opacity-40 text-xs">Today</span>
                  </div>
                  <span className="font-Ruska font-bold text-lg">$20</span>
                </li>
              </ul>
            </div>
            <div></div>
          </div>
          <div className="p-5 flex flex-col items-center justify-center bg-background rounded-3xl">
            <div className="bg-[#CC1C43] flex flex-col items-center justify-center gap-5 w-full p-3 md:p-5 rounded-3xl">
              <div className="w-full flex items-center justify-between">
                <h1 className="text-lg font-Ruska font-bold text-white opacity-60">CASH-OUT</h1>
                <button className="bg-black text-white text-[13px] py-2 px-4 rounded-3xl font-semibold">
                  Withdraw
                </button>
              </div>
              <div className="w-full flex items-center justify-between">
                <div>
                  <span className="text-white opacity-60 text-xs">Connector Nectar</span>
                  <h1 className="text-3xl text-white font-Ruska font-bold">400</h1>
                </div>
                <button className="text-[10px] py-1 px-3 rounded-3xl bg-[#E9EDD1] ">40%/40%</button>
              </div>
            </div>
            <div className="w-full mt-5">
              <h4 className="mb-3 text-[#00000066] opacity-40 text-xs">History</h4>

              {/* here you can clear all the list tags since the data will come dynamic */}
              <ul className="max-h-48 overflow-y-scroll scrollbar-none">
                <li className="flex justify-between border-b-2 pb-2">
                  <div>
                    <h3 className="text-sm font-semibold">55 Nectar</h3>
                    <span className="text-black opacity-40 text-xs">Today</span>
                  </div>
                  <span className="font-Ruska font-bold text-lg">$20</span>
                </li>
                <li className="flex justify-between border-b-2 pb-2">
                  <div>
                    <h3 className="text-sm font-semibold">55 Nectar</h3>
                    <span className="text-black opacity-40 text-xs">Today</span>
                  </div>
                  <span className="font-Ruska font-bold text-lg">$20</span>
                </li>
                <li className="flex justify-between border-b-2 pb-2">
                  <div>
                    <h3 className="text-sm font-semibold">55 Nectar</h3>
                    <span className="text-black opacity-40 text-xs">Today</span>
                  </div>
                  <span className="font-Ruska font-bold text-lg">$20</span>
                </li>
                <li className="flex justify-between border-b-2 pb-2">
                  <div>
                    <h3 className="text-sm font-semibold">55 Nectar</h3>
                    <span className="text-black opacity-40 text-xs">Today</span>
                  </div>
                  <span className="font-Ruska font-bold text-lg">$20</span>
                </li>
              </ul>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarningPage;
