export const Navbar = () => {
  return (
    <>
      <div className=" fixed w-screen-xl w-full flex justify-between items-center p-2 z-50 bg-black">
        <div className="flex items-center ">
          <img
            className="w-12 rounded-full"
            src="https://pbs.twimg.com/profile_images/1344214220175331328/g97b2IT__400x400.jpg"
            alt="logo"
          />
        </div>

        <div className="flex items-center space-x-3 ">
          <a href="#home">
            <button className=" p-5  text-white font-bold transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-indigo-500">
              Home
            </button>
          </a>
          <a href="#home">
            <button className=" p-5  text-white font-bold transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-indigo-500">
              About
            </button>
          </a><a href="#home">
            <button className=" p-5  text-white font-bold transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-indigo-500">
              Testimonials
            </button>
          </a>
         
        </div>
        <div>
          <div className="rounded-3xl cursor-pointer text-white font-bold py-2 px-4 bg-blue-500 hover:bg-blue-700  ">
            Contact
          </div>
        </div>
      </div>
    </>
  );
};
