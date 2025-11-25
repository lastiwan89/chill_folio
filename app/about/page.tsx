import { cn } from "@/lib/utils";

const About = () => {
  return (
    <div className={cn("grid h-screen grid-rows-2 px-6 py-8 md:grid-cols-2")}>
      <div className={cn("h-1/2 w-1/2 bg-cyan-400")}></div>
      <div className={cn("flex flex-col gap-6 font-serif text-white")}>
        <h1 className={cn("text-2xl font-black")}>
          Hi..!!, I&apos;m Iwan, Passionate Frontend React Developer. <br />
          Based in Lombok, Indonesia.
        </h1>
        <div className={cn("font-sans")}>
          <p>
            I&apos;m self-taught developer passionate using react to develop
            websites.
          </p>
          <p>
            These days my time is spent researching for nice project, then
            design it and coding.
          </p>
          <p>
            Out of my routine you&apos;ll find me reading book, gardening or
            review other code on github.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
