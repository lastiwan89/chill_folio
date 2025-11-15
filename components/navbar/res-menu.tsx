"use client";
import { motion, AnimatePresence } from "framer-motion";
import { NavLinks } from "../../constant/link";
import Link from "next/link";

const ResponsiveMenu = ({
  isOpen,
  handleClick,
}: {
  isOpen: boolean;
  handleClick: () => void;
}) => {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          className="absolute top-16 left-0 z-20 h-screen w-full md:hidden"
        >
          <div className="m-2 rounded-3xl bg-linear-to-tr from-cyan-400 to-fuchsia-500 py-10 text-xl font-semibold text-white">
            <ul className="grid grid-rows-4 items-center justify-center gap-12">
              {NavLinks.map((items) => (
                <Link
                  onClick={handleClick}
                  className="font-sans tracking-wide hover:text-gray-700"
                  key={items.id}
                  href={items.link}
                >
                  {items.title}
                </Link>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
