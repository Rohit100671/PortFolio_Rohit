import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";

function Home() {
  const { name, tagline, img, img2 } = personalDetails;

  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(h11.current, {
      x: "-100%",
      delay: 0.2,    
      opacity: 0,
      duration: 1,     
      ease: "power3.out",
    }, "<")
      .from(h12.current, {
        x: "-100%",
        delay: 0.1,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      }, "<")
      .from(h13.current, {
        x: "-100%",
        delay: 0,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      }, "<")
      .from(myimageref.current, {
        x: "200%",
        delay: 0,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      }, "<");
  }, []);

  return (
    <main className="container mx-auto max-width section md:flex justify-between items-center px-4 md:px-0">
      {/* Left content: Text */}
      <div className="w-full md:w-1/2 space-y-3">
        <h1
          ref={h11}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          Hi,👋<br />My Name is<br />
        </h1>
        <h1
          ref={h12}
          className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          {name}
        </h1>
        <h2
          ref={h13}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-3xl xl:text-4xl font-semibold"
        >
          {tagline}
        </h2>
      </div>

      {/* Right content: Flip Image with Two Sides */}
      <div
        className="w-full md:w-1/2 mt-5 md:mt-0 flex justify-center md:justify-end"
        style={{ perspective: "1000px" }}
      >
        <div
          ref={myimageref}
          onMouseEnter={() => {
            gsap.to(myimageref.current, {
              rotateY: 180,
              duration: 0.8,
              ease: "power2.inOut",
            });
          }}
          onMouseLeave={() => {
            gsap.to(myimageref.current, {
              rotateY: 0,
              duration: 0.8,
              ease: "power2.inOut",
            });
          }}
          className="relative w-48 h-48 md:w-64 md:h-64 rounded-full shadow-lg cursor-pointer"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {/* Front Image */}
          <img
            src={img}
            alt="Front"
            className="absolute w-full h-full rounded-full object-cover"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(0deg)",
            }}
          />

          {/* Back Image */}
          <img
            src={img2}
            alt="Back"
            className="absolute w-full h-full rounded-full object-cover"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          />
        </div>
      </div>
    </main>
  );
}

export default Home;
