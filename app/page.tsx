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
        <p className="font-serif">
          React with Typescript in NextJS Framework with TailwindCSS for Styling
          it, but it doesn&apos;t matter. I also hungry to learn anything to
          make myself improve in this Tech.
        </p>
      </div>
    </main>
  );
};

export default Home;
