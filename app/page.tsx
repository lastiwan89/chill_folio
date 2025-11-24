import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  FaBootstrap,
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaInstagram,
  FaLinkedin,
  FaReact,
} from "react-icons/fa6";
import { IoLogoJavascript, IoLocationSharp } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiStyledcomponents, SiTypescript } from "react-icons/si";

const Home = () => {
  return (
    <main className="flex flex-col gap-10 px-10 py-8 text-white">
      {/* hero section */}
      <div className="flex flex-col-reverse items-center justify-center gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="font-serif text-2xl font-bold text-orange-500">
            Hi..!!, I&apos;m iwan
          </h1>
          <p className="font-serif text-xl">
            Frontend Developer with specialized in reactjs. <br />I build
            responsive and great web apps.
          </p>
          <div className="mt-3">
            <Button className="bg-blue-500 tracking-wider uppercase">
              <Link href="/contact">hire me</Link>
            </Button>
          </div>
        </div>
        <div>
          <div className="flex h-[300px] w-[300px] items-center justify-center rounded-sm bg-orange-500"></div>
          <div className="mt-5 flex flex-col items-center justify-between gap-4">
            <div>
              <p className="flex gap-2 font-serif">
                <IoLocationSharp />
                Praya, Lombok, Indonesia
              </p>
            </div>
            <div className="flex gap-4">
              <Link href="https://github.com/lastiwan89">
                <FaGithub size={24} />
              </Link>
              <Link href="https://www.linkedin.com/in/muhammad-ikhwan-67539a1b8/">
                <FaLinkedin size={24} color="#0B66C2" />
              </Link>
              <FaInstagram size={24} color="red" />
            </div>
          </div>
        </div>
      </div>
      {/* tech stack */}
      <div>
        <h1 className="font-serif text-xl font-bold">My Tech Stack</h1>
        <div className="mt-5 flex gap-3">
          <FaHtml5 size={30} color="#DB4C24" />
          <FaCss3Alt size={30} color="#0B66C2" />
          <IoLogoJavascript size={30} color="yellow" />
          <SiTypescript size={30} color="#0B66C2" />
          <FaReact size={30} color="cyan" />
          <RiNextjsFill size={30} color="black" />
          <RiTailwindCssFill size={30} color="cyan" />
          <SiStyledcomponents size={30} color="orange" />
          <FaBootstrap size={30} color="#6E2BF1" />
        </div>
      </div>
    </main>
  );
};

export default Home;
