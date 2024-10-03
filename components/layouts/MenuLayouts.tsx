"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

export default function MenuLayouts() {
  const pathname = usePathname();
  const [isScrol, setIsScrol] = useState<boolean>(false);
  const [menus, setMenus] = useState<
    { label: string; key: string; title: string; icon?: ReactNode | string }[]
  >([]);

  useEffect(() => {
    console.log(pathname);
    setMenus([
      {
        label: "Home",
        key: "/",
        title: "Syamgaffi Store Homepage",
      },
      {
        label: "Undangan",
        key: "/undangan",
        title: "Syamgaffi Store Undangan",
      },
    ]);
  }, [pathname]);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        setIsScrol(false);
      } else {
        setIsScrol(true);
      }
    });
  });
  return (
    <nav
      className={`fixed top-0 left-0 right-0 bg-white flex justify-between py-3 sm:py-4 px-5 items-center ${
        isScrol ? "bg-opacity-80" : "bg-opacity-100"
      }`}
      style={{ zIndex: 10 }}
    >
      <div>
        <span>ICON</span>
      </div>
      <ul className="hidden sm:flex gap-3 text-sm">
        {menus.map((menu) => (
          <li
            className={`${pathname === menu.key ? "text-blue-400" : ""}`}
            key={menu.key}
          >
            <Link href={menu.key} title={menu.title}>
              <span>{menu.icon}</span>
              <span>{menu.label}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="block sm:hidden">
        <button className="p-2 border rounded shadow flex flex-col gap-1 hover:bg-gray-100 items-end hover:items-center">
          <div className="border border-gray-800 w-4"></div>
          <div className="border border-gray-800 w-3"></div>
          <div className="border border-gray-800 w-2"></div>
        </button>
      </div>
    </nav>
  );
}
