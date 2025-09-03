"use client";

import { Plane } from "lucide-react";

interface Flight {
  id: string;
  code: string;
  seat: string;
  from: string;
  to: string;
  departure: string;
  arrival: string;
  duration: string;
  color?: string; // optional tailwind color class
}

const flights: Flight[] = [
  {
    id: "1",
    code: "DP 243-55",
    seat: "32F",
    from: "LAG",
    to: "HND",
    departure: "10:25 AM",
    arrival: "02:34 PM",
    duration: "Landing in 3H 23M",
    color: "text-purple-600 border-purple-600",
  },
  //   {
  //     id: "2",
  //     code: "DP 243-55",
  //     seat: "32F",
  //     from: "LAG",
  //     to: "HND",
  //     departure: "10:25 AM",
  //     arrival: "02:34 PM",
  //     duration: "Landing in 3H 23M",
  //     color: "text-blue-600 border-blue-600",
  //   },
  //   {
  //     id: "3",
  //     code: "DP 243-55",
  //     seat: "32F",
  //     from: "LAG",
  //     to: "HND",
  //     departure: "10:26 AM",
  //     arrival: "02:34 PM",
  //     duration: "Landing in 3H 23M",
  //     color: "text-black border-black",
  //   },
  //   {
  //     id: "4",
  //     code: "DP 243-55",
  //     seat: "32F",
  //     from: "LAG",
  //     to: "HND",
  //     departure: "10:25 AM",
  //     arrival: "02:34 PM",
  //     duration: "Landing in 3H 23M",
  //     color: "text-red-600 border-red-600",
  //   },
];

export default function FlightWidget() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 font-Ruska">Real-Time Flight Status</h2>
        <p className="text-gray-600 mt-2">Live updates for today’s flights.</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-6 py-3 rounded-lg text-sm bg-purple-600 text-white font-medium hover:bg-purple-700">
            Search Flight
          </button>
          <button className="px-6 py-3 rounded-lg text-sm bg-gray-200 text-gray-700 font-medium hover:bg-gray-300">
            Sign In As Guest
          </button>
        </div>
      </div>

      <div className="gap-6 flex justify-center">
        {flights.map((f) => (
          <div
            key={f.id}
            className="bg-[#ECECEC] rounded-xl shadow-md p-6 flex flex-col gap-3 hover:shadow-lg transition w-full lg:w-xl"
          >
            <div className="flex justify-between text-sm text-gray-500">
              <span className={`flex items-center gap-2 ${f.color}`}>
                <Plane size={16} /> {f.code}
              </span>
              <span className="text-gray-400">SEAT {f.seat}</span>
            </div>

            <p className={`font-bold ${f.color}`}>{f.duration}</p>

            <div className="flex justify-between items-center mt-2">
              <div className="text-center">
                <p className="text-xl font-bold">{f.from}</p>
                <p className="text-sm text-gray-500">{f.departure}</p>
              </div>

              <div className={`flex-1 border-t mx-4 ${f.color}`} />

              <div className="text-center">
                <p className="text-xl font-bold">{f.to}</p>
                <p className="text-sm text-gray-500">{f.arrival}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
