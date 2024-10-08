import Link from "next/link";
import { FaHome, FaMoneyBillWave, FaBusinessTime, FaClipboardList, FaUserCircle, FaCog, FaSignOutAlt } from 'react-icons/fa';

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: FaHome,
        label: "Dashboard",
        href: "user",
        visible: ["admin"],
      },
      {
        icon: FaMoneyBillWave,
        label: "Investments",
        href: "investments",
        visible: ["admin"],
      },
      {
        icon: FaBusinessTime,
        label: "My Businesses",
        href: "/list/students",
        visible: ["admin"],
      },
      {
        icon: FaClipboardList,
        label: "Loans",
        href: "/list/parents",
        visible: ["admin"],
      },
    ],
  },
  {
    title: "MORE...",
    items: [
      {
        icon: FaUserCircle,
        label: "Contact",
        href: "/profile",
        visible: ["admin"],
      },
      {
        icon: FaCog,
        label: "Resources",
        href: "/resources",
        visible: ["admin"],
      },
      {
        icon: FaSignOutAlt,
        label: "My Profile",
        href: "/profile",
        visible: ["admin"],
      },
    ],
  },
];

const renderIcon = (IconComponent: any, index: number): JSX.Element => {
  return (
    <div key={index}>
      <IconComponent size={20} className="text-gray-500" /> 
    </div>
  );
};

const Menu = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {i.title}
          </span>
          {i.items.map((item, index) => (
            <Link
              href={item.href}
              key={item.label}
              className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2"
            >
              {renderIcon(item.icon, index)}
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;