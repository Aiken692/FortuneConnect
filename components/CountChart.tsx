"use client";

import { useEffect, useState } from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Counter } from "./types/portfolio";

const data = [
  {
    name: "Total",
    count: 106,
    fill: "white",
  },
  {
    name: "Projected Investment",
    count: 63,
    fill: "#FAE27C",
  },
  {
    name: "Actual Investment",
    count: 43,
    fill: "#C3EBFA",
  },
];

const CountChart = () => {
//To be finished
  const [items, setItems] = useState<Counter[]>([]);

  const getAllCounters = async () => {

    const response = await fetch("https://run.mocky.io/v3/fafb3091-24af-4c04-a362-7189ed63854b");
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllCounters();
      setItems(data);
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
    {/* TITLE */}
    <div className="flex justify-between items-center">
      <h1 className="text-lg font-semibold">Compliance</h1>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
    </div>
    
    <div className="relative w-full h-[75%]">
      <ResponsiveContainer>
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="40%"
          outerRadius="100%"
          barSize={32}
          data={data}
        >
          <RadialBar background dataKey="count" />
        </RadialBarChart>
      </ResponsiveContainer>

    
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" width={50} height={50}>
        <path d="M4.5 3.75a3 3 0 0 0-3 3v.75h21v-.75a3 3 0 0 0-3-3h-15Z" />
        <path fill-rule="evenodd" d="M22.5 9.75h-21v7.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-7.5Zm-18 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" clip-rule="evenodd" />
        </svg>

    </div>

    <div className="flex justify-center gap-16">
      <div className="flex flex-col gap-1">
        <div className="w-5 h-5 bg-lamaGreenLight rounded-full" />
        <h1 className="font-bold">1,234</h1>
        <h2 className="text-xs text-gray-300">Actual Investment (55%)</h2>
      </div>
      <div className="flex flex-col gap-1">
        <div className="w-5 h-5 bg-lamaYellow rounded-full" />
        <h1 className="font-bold">1,234</h1>
        <h2 className="text-xs text-gray-300">Projected Investment (45%)</h2>
      </div>
    </div>
  </div>
  )
}

export default CountChart