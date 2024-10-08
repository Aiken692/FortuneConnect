import Link from "next/link";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return <div className="h-screen flex">
                <div className="w-[25%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
   
                </div>

                <div className="w-[50%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
   

                  {children}
                </div>
                    
                <div className="w-[25%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll">
        
                   
                </div>
            </div>;
  }
  