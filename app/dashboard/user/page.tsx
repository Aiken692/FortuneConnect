import CountChart from "@/components/CountChart";
import FinanceChart from "@/components/FinanceChart";
import InvestmentChart from "@/components/InvestmentChart";
import UserCard from "@/components/UserCard";

const items = [
  {
    title: "Actual Investment Portfolio",
    amount: 100000,
    dateOfYear: "2021",
  },
  {
    title: "Projected Investment Portfolio",
    amount: 200000,
    dateOfYear: "2022",
  },
  {
    title: "Current Cummulative Revenue",
    amount: 300000,
    dateOfYear: "2023",
  },
  {
    title: "Outstanding Investment Arrears",
    amount: 400000,
    dateOfYear: "2024",
  },
];

const UserPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">

        <div className="w-full lg:w-2/3 flex flex-col gap-8">
            <div className="flex gap-4 justify-between flex-wrap">
              {items.map((item, index) => (
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

      <div className="w-full lg:w-1/3 flex flex-col gap-8">
      
      </div>

    </div>
  );
}

export default UserPage;