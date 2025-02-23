import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef} from "react";

gsap.registerPlugin(ScrollTrigger);

export const Scroll = () => {
  const container = useRef(0);

  useGSAP(() => {
    gsap.to(container.current, {
      x: container.current.scrollWidth - window.innerWidth + 10,
    });
  });

  return (
    <>
      <div className="px-20 flex space-x-6" ref={container}>
        <img
          src="https://framerusercontent.com/images/6dxMIJFXFq5WfwKbD7sPAEy591M.png"
          alt=""
          className="w-[40%] h-auto"
        />
        <img
          src="https://framerusercontent.com/images/6dxMIJFXFq5WfwKbD7sPAEy591M.png"
          alt=""
          className="w-[40%] h-auto"
        />
        <img
          src="https://framerusercontent.com/images/6dxMIJFXFq5WfwKbD7sPAEy591M.png"
          alt=""
          className="w-[40%] h-auto"
        />
        <img
          src="https://framerusercontent.com/images/6dxMIJFXFq5WfwKbD7sPAEy591M.png"
          alt=""
          className="w-[40%] h-auto"
        />
        <img
          src="https://framerusercontent.com/images/6dxMIJFXFq5WfwKbD7sPAEy591M.png"
          alt=""
          className="w-[40%] h-auto"
        />
        <img
          src="https://framerusercontent.com/images/6dxMIJFXFq5WfwKbD7sPAEy591M.png"
          alt=""
          className="w-[40%] h-auto"
        />
        <img
          src="https://framerusercontent.com/images/6dxMIJFXFq5WfwKbD7sPAEy591M.png"
          alt=""
          className="w-[40%] h-auto"
        />
        <img
          src="https://framerusercontent.com/images/6dxMIJFXFq5WfwKbD7sPAEy591M.png"
          alt=""
          className="w-[40%] h-auto"
        />
      </div>
    </>
  );
};
