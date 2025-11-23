"use client";
import { useState } from "react";
import Link from "next/link";
import { CloudDrizzleIcon, Menu, X } from "lucide-react";
import { NavLinks } from "../../constant/link";
import ResponsiveMenu from "./res-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <nav>
        <div className="flex items-center justify-between bg-linear-to-r from-blue-400 to-orange-400 px-4 py-4 md:px-10">
          {/*Logo here  */}
          <Link href="/" className="flex items-center gap-2 font-bold">
            <CloudDrizzleIcon
              className="text-white"
              size={32}
              strokeWidth={1.5}
            />
            <p className="font-sans text-xl font-black text-white">
              chillrains
            </p>
          </Link>
          {/* menu goes here */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6">
              {NavLinks.map((items) => (
                <Link
                  className="font-sans font-semibold tracking-wide hover:text-gray-700"
                  key={items.id}
                  href={items.link}
                >
                  {items.title}
                </Link>
              ))}
            </ul>
          </div>
          {/* hamburger menu here */}
          <div onClick={handleClick} className="cursor-pointer md:hidden">
            {!isOpen ? (
              <Menu size={24} color="white" strokeWidth={2.5} />
            ) : (
              <X size={24} strokeWidth={2.5} color="white" />
            )}
          </div>
        </div>
      </nav>
      <ResponsiveMenu isOpen={isOpen} handleClick={handleClick} />
    </>
  );
};

export default Navbar;
