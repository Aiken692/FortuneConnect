import Link from "next/link";
import Image from "next/image";

const menuItems = [
    {
      title: "MENU",
      items: [
        {
          icon: "/home.png",
          label: "Dashboard",
          href: "user",
          visible: ["admin"],
        },
        {
          icon: "/teacher.png",
          label: "Investments",
          href: "investments",
          visible: ["admin"],
        },
        {
          icon: "/student.png",
          label: "My Businesses",
          href: "/list/students",
          visible: ["admin"],
        },
        {
          icon: "/parent.png",
          label: "Loans",
          href: "/list/parents",
          visible: ["admin",],
        }
      ],
    },
    {
      title: "MORE...",
      items: [
        {
          icon: "/profile.png",
          label: "Contact",
          href: "/profile",
          visible: ["admin"],
        },
        {
          icon: "/setting.png",
          label: "Resources",
          href: "/resources",
          visible: ["admin"],
        },
        {
          icon: "/logout.png",
          label: "My Profile",
          href: "/profile",
          visible: ["admin"],
        },
      ],
    },
  ];

const Menu = () => {
  return (
    <div className="mt-4 text-sm">
        {menuItems.map((i) => (
            <div className="flex flex-col gap-2" key={i.title}>
                <span className="hidden lg:block text-gray-400 font-light my-4">
                    {i.title}
                </span>
                {i.items.map((item) => (
                    <Link href={item.href} key={item.label} className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2">
                        <Image src={item.icon} alt="" width={20} height={20} />
                        <span>{item.label}</span>
                    </Link>
                ))}
            </div>
        ))}
    </div>
  )
}

export default Menu