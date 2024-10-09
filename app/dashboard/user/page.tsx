"use client";

import { useEffect, useState } from "react";
import Notifications from "@/components/Notifications";
import CountChart from "@/components/CountChart";
import EventCalendar from "@/components/EventCalendar";
import FinanceChart from "@/components/FinanceChart";
import InvestmentChart from "@/components/InvestmentChart";
import UserCard from "@/components/UserCard";
import { Portfolio } from "@/components/types/portfolio";
import axios from "axios";


const UserPage = () => {

  const [items, setItems] = useState<Portfolio[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("https://run.mocky.io/v3/5f00eda3-787d-4025-93dd-28ff14b7b62f");
        setItems(response.data.count);
      } catch (error) {
        console.error("Error fetching the payments:", error);
      }
    };

    fetchItems();
  }, []); 

  return (
    <div id="dashboard" className="p-4 flex gap-4 flex-col md:flex-row">

        <div className="w-full lg:w-2/3 flex flex-col gap-8">
            <div className="flex gap-4 justify-between flex-wrap">
              {items.map((item: Portfolio, index : number) => (
                <UserCard key={index} title={item.title} amount={item.amount} dateOfYear={item.dateOfYear} />
              ))}

            </div>

            
            <div className="flex gap-4 flex-col lg:flex-row">
             
              <div className="w-full lg:w-1/3 h-[450px]">
                <CountChart />
              </div>

              <div className="w-full lg:w-2/3 h-[450px]">
                <InvestmentChart />
              </div>
            </div>

            <div className="w-full h-[500px]">
              <FinanceChart />
            </div>
        </div>

      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <Notifications/>
      </div>

    </div>
  );
}

export default UserPage;