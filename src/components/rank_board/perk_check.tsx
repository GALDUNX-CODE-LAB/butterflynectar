"use client";
import { array } from "../../../data/checklist";

const PerckCheck = () => {
  return (
    <div className="contained gap-2">
      <h3 className="w-full text-left font-bold font-Ruska text-[16px]">RANK</h3>
      <p className="w-full text-shared text-[13px]">A short description goes here</p>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 mt-5 transition-all ease-in-out duration-500">
        {array.map((x) => (
          <div
            key={x.id}
            className="p-4 flex flex-col gap-3 justify-center items-center bg-background rounded-2xl transition-all"
          >
            <div className="p-4 bg-[#D9D9D980] rounded-full text-2xl">{x.icon}</div>
            <h3 className="w-full text-center font-bold font-Ruska text-[13px]">{x.name}</h3>
            <p className="text-center text-[12px] text-shared">{x.story}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerckCheck;
