import { CloudDrizzle } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="flex items-center justify-center bg-linear-to-r from-cyan-400 to-fuchsia-500 px-4 py-4 md:px-10">
        {/*Logo here  */}
        <p className="font-sans text-xl font-black text-white">
          developed by &nbsp; &nbsp; &#160;
        </p>
        <p> </p>
        <Link href="/" className="flex items-center gap-2 font-bold">
          <CloudDrizzle className="text-white" size={32} strokeWidth={1.5} />
          <p className="font-sans font-black text-white">chillrains</p>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
