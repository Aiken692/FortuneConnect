import Link from "next/link";
import Image from "next/image";
import companyLogo from "../../public/assets/images/FortuneLogo.png"
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import UserPage from "./user/page";

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return <div className="h-screen flex">
                <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
                  <Link href="#" className="flex items-center justify-center lg:justify-start gap-2">
                    
                    {/* <Image src="../.." alt="logo" width={32} height={32} /> */}
                    <span className="hidden lg:block"> Fortune 500 Klub</span>
                  </Link>

                  <Menu/>
                </div>
                    
                <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll">
                    <Navbar/>
                    <UserPage/>
                </div>
            </div>;
  }
  