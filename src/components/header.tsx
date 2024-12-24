"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Header() {

  const pathname = usePathname();

  const linkdata = [
    {
      name: "Performance",
      href: "/Performance",
    },
    {
      name: "Reliability",
      href: "/Reliability",
    },
    {
      name: "Scale",
      href: "/Scale",
    },
  ];

  return (
    <div className="absolute top-0 left-0 right-0 z-10">
        <div className="flex justify-between container mx-auto text-white p-8 items-center">
          <Link className="text-3xl font-bold" href="/">Home</Link>
          <div className="text-xl space-x-4">
          {linkdata.map((item) => (
  <Link 
    key={item.href} 
    className={pathname === item.href ? "text-purple-500" : ""}  
    href={item.href}
  >
    {item.name}
  </Link>
))}
          </div>
        </div>
    </div>
  );
}
