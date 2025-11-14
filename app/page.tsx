import Image from "next/image";

const Home = () => {
  return (
    <div className="flex flex-col-reverse justify-center items-center px-6 py-10 gap-10">
      <div>
        <h1 className="text-orange-500 font-mono text-xl font-bold">
          Hello..!!, I am iwan
        </h1>
        <p className="font-mono">
          Self-Taught Frontend Developer. Passionate in designing and crafting
          website with nice UI and User Experience
        </p>
      </div>
      <div className="bg-orange-500 rounded-sm flex justify-center items-center w-[300px] h-[300px]">
        <h1>Portrait goes here</h1>
      </div>
    </div>
  );
};

export default Home;
