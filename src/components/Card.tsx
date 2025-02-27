import Typewriter from "typewriter-effect";
export const Card = () => {
  return (
    <>
      <div className="flex justify-between w-full min-w-auto pl-[20%] pt-5">
        <div className="max-w-1/2 inline-block align-middle text-white bg-black  ">
          <h1 className="font-sans font-bold text-6xl">Hi </h1>
          <h2 className="font-sans font-bold text-6xl">I'm Harsh</h2>
          <span className="font-sans text-6xl text-red-400 font-bold">
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
        <div className="w-1/2">
          <img
            src="https://pbs.twimg.com/profile_images/1344214220175331328/g97b2IT__400x400.jpg"
            className="rounded-full"
          />
        </div>
      </div>
    </>
  );
};
