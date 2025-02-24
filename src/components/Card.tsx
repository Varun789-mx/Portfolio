import Typewriter from "typewriter-effect";
export const Card = () => {
  return (
    <>
      <div className=" grid grid-cols-6  justify-items-center w-full pt-5 pl-5 gap-5 ">
        <div className="col-span-3 text-white bg-black w-full flex flex-col justify-center">
          <h1 className="font-sans font-bold text-7xl">Hi </h1>
          <h2 className="font-sans font-bold text-7xl">I'm Harsh</h2>
          <span className="font-sans text-7xl text-red-400 font-bold min-h-24">
            <Typewriter
              options={{
                strings: [
                  "I'm a React developer",
                  "I'm a Marvel fan",
                  "I'm a Nextjs developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>
        <div className="col-span-3 max-w-fit">
          <img
            src="https://pbs.twimg.com/profile_images/1344214220175331328/g97b2IT__400x400.jpg"
            className="rounded-full"
          />
        </div>
      </div>
    </>
  );
};
