"use client";

import { CreditCard, Gift, Bell } from "lucide-react";

const benefits = [
  {
    title: "SAVED DETAILS",
    desc: "Your info is stored and protected by our system with strong security. We make sure that next time you show up, you get things done faster and easier.",
    icon: <CreditCard className="w-8 h-8 text-purple-600" />,
  },
  {
    title: "EARN REWARDS",
    desc: "Your info is stored and protected by our system with strong security. We make sure that next time you show up, you get things done faster and easier.",
    icon: <Gift className="w-8 h-8 text-purple-600" />,
  },
  {
    title: "GET PRICE ALERTS",
    desc: "Your info is stored and protected by our system with strong security. We make sure that next time you show up, you get things done faster and easier.",
    icon: <Bell className="w-8 h-8 text-purple-600" />,
  },
];

export default function ClubIvyDetails() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <h2 className="text-center text-xl md:text-3xl font-extrabold text-gray-900 font-Ruska">Club Ivy In Details</h2>
      <p className="text-center text-gray-600 mt-2">
        This is a quick summary of why users should join (3 benefits in one line).
      </p>

      <div className="mt-12 grid md:grid-cols-3 gap-8">
        {benefits.map((item, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-lg transition">
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="font-bold text-lg text-gray-900 font-Ruska">{item.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
