export const Card = () => {
  return (
    <>
      <div className=" grid grid-cols-6  justify-items-center p-3 m-3 ">
        <div className="col-span-3 text-white bg-black">
          <h1 className="font-sans font-bold text-4xl">Hi I'm Harsh</h1>
          <h2 className="font-sans font-bold text-3xl">I'm a Java developer</h2>
        </div>
        <div className="col-span-3 max-w-fit">
          
          <img src="https://pbs.twimg.com/profile_images/1344214220175331328/g97b2IT__400x400.jpg" className="rounded-full" />
     
        </div>
      </div>
    </>
  );
};
