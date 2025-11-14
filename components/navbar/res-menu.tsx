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
          <div className="m-2 rounded-2xl bg-linear-240 from-fuchsia-500 to-cyan-400 py-10 text-xl font-semibold text-white">
            <ul className="flex flex-col items-center justify-center gap-10">
              {NavLinks.map((items) => (
                <Link
                  onClick={handleClick}
                  className="tracking-widest uppercase"
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
