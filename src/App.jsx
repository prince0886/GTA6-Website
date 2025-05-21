import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./index.css"; // Import the CSS file for the SVG animation
import 'remixicon/fonts/remixicon.css'

function App() {  
  const [showContent, setShowContent] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "power4.inOut",
      transformOrigin: "50% 50%",
    })
      .to(".vi-mask-group", {
        scale: 10,
        duration: 2,
        delay: -1.8,
        ease: "expo.inOut",
        transformOrigin: "50% 50%",
        opacity: 0,
        onUpdate: function () {
          if (this.progress() >= 0.9) {
            const svgEl = document.querySelector(".svg");
            if (svgEl) svgEl.remove();
            setShowContent(true);
            this.kill();
          }
        },
      });
  }, []);

  useGSAP(()=>{
    if(!showContent) return;

    gsap.to(".main",{
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeinOut",
    })
    gsap.to(".sky",{
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeinOut",
    })
    gsap.to(".bg",{          
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeinOut",
    })
    gsap.to(".character",{
      scale: 1,  // Changed from 1.2 to 1
      x:"-50%", 
      bottom: "-40%",  // Changed from -40% to -30%
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeinOut",
    })

    gsap.to(".text",{
      scale: 1,  // Changed from 1.2 to 1 
     // Changed from -40% to -30%
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeinOut",
    })

    const main = document.querySelector('.main')

    main?.addEventListener('mousemove',function(e){
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text",{
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sky",{
        x: xMove,
      });
      gsap.to(".bg",{
        x: xMove*1.7,
      });
      
    }); 
  }, [showContent]);
  

  return (
    <>
      {/* Intro Masked SVG Animation */}
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-black">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>

          <rect width="100%" height="100%" fill="black" />
          <image
            href="/bg.png" // Make sure bg.png is inside `public` folder
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full rotate[-10deg] scale-[1.7]">
          <div className="landing overflow-hidden relative w-full h-screen bg-black relative">
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-7 px-10">
              <div className="logo flex gap-5">
                <div className="lines flex flex-col gap-[5px]">
                  <div className="line w-13 h-1 bg-white"></div>
                  <div className="line w-8 h-1 bg-white"></div>
                  <div className="line w-5 h-1 bg-white"></div>
                </div>
                <h3 className="text-3xl -mt-[8px] leading-none  text-white">Rockstar</h3>
              </div>
            </div>
            <div className="imagediv relative overflow-hidden w-full h-screen">
              <img 
              className="absolute sky scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover" 
              src="./sky.png" 
              alt="" />
              <img 
              className="absolute scale-[1.8] rotate-[-3deg] bg top-0 left-0 w-full h-full object-cover" 
              src="./bg.png" 
              alt="" />

              <div className="text text-white flex flex-col gap--1 absolute top-10 left-1/2 -translate-x-1/2 scale-[1.4] rotate-[-10deg] ">
              <h1 className="text-[9rem] leading-none -ml-40">grand</h1>
              <h1 className="text-[9rem] leading-none ml-0">theft</h1>
              <h1 className="text-[9rem] leading-none -ml-40">auto</h1> 
              </div>
              <img 
                className="absolute character -bottom-[150%] left-1/2 -translate-x-1/2 scale-[1.8] rotation-[-20deg]" 
                src="./girlbg.png" 
                alt="" 
              />
            </div>
            <div className="btmbar text-white absolute bottom-0 left-0 w-full px-10 py-15 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-4 items-center">
              <i className="text-3xl ri-arrow-down-line"></i>
              <h3 className="text-xl font-[Helvetika_Now_Display]">Scroll Down</h3>
              
              </div>
               <img className="absolute h-[65px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " src="./ps5.png" alt="" />
            </div>
          </div>
          <div className="w-full h-screen flex items-center justify-center bg-black">
            <div className="cntnr flex text-white w-full  h-[80%] ">
            <div className="limg relative w-1/2 h-full">
             <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="./imag.png" alt="" />
            </div>
            <div className="rg w-[30%] py-10">
              <h1 className="text-7xl" >Still Running</h1>
              <h1 className="text-7xl" >Not Hunting</h1>
              <p className="mt-10 text-xl font-[Helvetica_Now_Display]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores iste, quaerat pariatur ratione cupiditate neque dolor quas placeat? Adipisci repellendus ea iste sint.</p>
              <p className="mt-3 text-xl font-[Helvetica_Now_Display]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptatem nihil accusantium, veniam iure vitae rem deserunt officia facere repellendus, nesciunt laborum eaque non iste mollitia veritatis quia ut? In nesciunt explicabo deleniti labore totam.</p>
              <p className="mt-10 text-xl font-[Helvetica_Now_Display]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptatem nihil accusantium, veniam iure vitae rem deserunt officia facere repellendus, nesciunt laborum eaque non iste mollitia veritatis quia ut? In nesciunt explicabo deleniti labore totam.</p>
            <button className="bg-yellow-500 btn px-10 py-10 text-2xl text-black mt-10">Download Now</button>
            </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
