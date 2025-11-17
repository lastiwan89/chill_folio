import { FaBootstrap, FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiStyledcomponents, SiTypescript } from "react-icons/si";

const Home = () => {
  return (
    <main className="flex flex-col gap-10 px-10 py-8">
      <div className="flex flex-col-reverse items-center justify-center gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="font-serif text-2xl font-bold text-orange-500">
            Hello..!!, I am iwan
          </h1>
          <p className="font-serif text-xl">
            Self-Taught Frontend Developer. Passionate in designing and crafting
            website with Great User Experience
          </p>
        </div>
        <div className="flex h-[300px] w-[300px] items-center justify-center rounded-sm bg-orange-500">
          <h1>Portrait goes here</h1>
        </div>
      </div>
      <div>
        <h1 className="font-serif font-bold">My Tech Stack</h1>
        <div className="flex gap-3 py-5">
          <FaHtml5 size={30} />
          <FaCss3Alt size={30} />
          <IoLogoJavascript size={30} />
          <SiTypescript size={30} />
          <FaReact size={30} />
          <RiNextjsFill size={30} />
          <RiTailwindCssFill size={30} />
          <SiStyledcomponents size={30} />
          <FaBootstrap size={30} />
        </div>
      </div>
    </main>
  );
};

export default Home;
