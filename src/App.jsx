import React, { useRef, useEffect } from "react";
import cartIcon from "./assets/cart.svg";
import myImage from "./assets/taha.png";
import headphone from "./assets/headphone.jpg";
import headphone2 from "./assets/headphone2.jpg";
import headphone3 from "./assets/headphone3.jpg";
import headphone4 from "./assets/headphone4.png";
import person from "./assets/person.png";
import wifiIcon from "./assets/wifi-solid.svg";
import headphoneIcon from "./assets/headphones-solid.svg";
import microphoneIcon from "./assets/microphone-solid.svg";
import weighticon from "./assets/weight-scale-solid.svg";
import person3 from "./assets/person3.jpg";
import playIcon from "./assets/play.svg";
import volumeIcon from "./assets/volume.svg";
import batteryIcon from "./assets/battery.svg";
import andriodIcon from "./assets/andriod.svg";
import iosIcon from "./assets/ios.svg";
import sendIcon from "./assets/send.svg";
import instagramIcon from "./assets/instagram.svg";
import linkedinIcon from "./assets/linkedin.svg";
import "./App.css";

// animations
import { useInView } from "framer-motion";

function App() {
  const section0 = useRef(null);
  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);
  const section4 = useRef(null);
  const section5 = useRef(null);
  const section6 = useRef(null);
  const isS0InView = useInView(section0, { once: true });
  const isS1InView = useInView(section1, { once: true });
  const isS2InView = useInView(section2, { once: true });
  const isS3InView = useInView(section3, { once: true });
  const isS4InView = useInView(section4, { once: true });
  const isS5InView = useInView(section5, { once: true });
  const isS6InView = useInView(section6, { once: true });

    const handleMenuClick = () => {
      const menuItems = document.querySelectorAll(".b");

      menuItems.forEach(function (menuItem) {
        menuItem.classList.toggle("active");
        console.log("first");
      });
    };

  return (
    <>
      <nav className="flex justify-between container py-3 relative">
        <div className="block sm:hidden cursor-pointer" onClick={handleMenuClick}>
          <div className="McButton" data="hamburger-menu">
            <div className="b"></div>
            <div className="b"></div>
            <div className="b"></div>
          </div>
        </div>
        <h1 className="text-gray-600 font-extrabold text-3xl">
          Beats <span className="text-red-500">.</span>
        </h1>
        <ul className="text-gray-600 font-semibold text-base sm:flex space-x-10 items-center hidden">
          <li className="cursor-pointer hover:text-gray-800">
            <a href="#">Home</a>
          </li>
          <li className="cursor-pointer hover:text-gray-800">
            <a href="#product">Product</a>
          </li>
          <li className="cursor-pointer hover:text-gray-800">
            <a href="#features">Features</a>
          </li>
        </ul>
        <div className="flex items-center">
          <img src={cartIcon} alt="cartIcon" />
          <a
            href="https://www.instagram.com/_taha_umer_/"
            target="_blank"
            className="rounded-full overflow-hidden w-[30px] mx-3"
          >
            <img src={myImage} alt="" />
          </a>
        </div>
      </nav>
      <section ref={section0} className={`flex container justify-center items-center h-[100vh]`}>
        <h2 className="text-[30vw] font-bold text-[#EDEEEF]">2024</h2>
        <div
          className={`absolute transition ${
            isS0InView
              ? "translate-y-0 opacity-100"
              : "translate-y-40 opacity-0"
          }`}
        >
          <img
            className={`w-[80vw] md:w-[36vw] headphoneAnimation `}
            src={headphone}
            alt=""
          />
        </div>
      </section>
      <section ref={section1} className={`flex container justify-center items-center py-3 transition ${isS1InView ? "translate-x-0 opacity-100" : "translate-x-36 opacity-0"}`}>
        <div>
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-600">SOLO PRO</h2>
            <p className="text-md font-medium mt-2 text-gray-600">
              The only Headset you'll ever need.
            </p>
          </div>
          <div className="flex flex-col md:flex-row boxShadow transitionCs mt-10 rounded-md">
            <div className="row-span-2">
              <img className="md:h-80 md:w-full" src={person} alt="" />
            </div>
            <div className="grid grid-cols-2 grid-rows-2 text-center">
              <div className="flex flex-col px-10 py-10 md:py-0 justify-center items-center border border-[#E5E7EB]">
                <img className="w-[30px]" src={wifiIcon} alt="" />
                <p className="font-medium mt-4 text-sm text-gray-600">
                  Wireless Connectivity
                </p>
              </div>
              <div className="flex flex-col px-10 justify-center items-center border border-[#E5E7EB]">
                <img className="w-[30px]" src={headphoneIcon} alt="" />
                <p className="font-medium mt-4 text-sm text-gray-600">
                  Foldable Design
                </p>
              </div>
              <div className="flex flex-col px-10 justify-center items-center border border-[#E5E7EB]">
                <img className="w-[25px]" src={weighticon} alt="" />
                <p className="font-medium mt-4 text-sm text-gray-600">
                  Product Weight
                </p>
              </div>
              <div className="flex flex-col px-10 justify-center items-center border border-[#E5E7EB]">
                <img className="w-[20px]" src={microphoneIcon} alt="" />
                <p className="font-medium mt-4 text-sm text-gray-600">
                  Microphone Feature
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="product" className="container flex flex-col md:flex-row pt-10 md:pt-0 justify-start items-center">
        <img className={`w-[60%] transition ${isS2InView ? "translate-x-0 opacity-100" : "-translate-x-40 opacity-0"}`} src={headphone2} alt="" />
        <div className={`transition ${isS2InView ? "translate-x-0 opacity-100" : "translate-x-40 opacity-0"}`}>
          <h3 ref={section2} className="text-gray-600 text-4xl md:text-5xl font-bold">
            Immerse yourself <br /> in your music
          </h3>
          <p className="text-gray-600 font-medium text-lg mt-4 flex items-center">
            $199 &nbsp; |&nbsp; Colors
            <span className="w-4 h-4 block bg-[#ED4133] rounded-full boxShadow cursor-pointer ml-4"></span>
            <span className="w-4 h-4 block bg-[#7b7b7b] rounded-full boxShadow cursor-pointer mx-4"></span>
            <span className="w-4 h-4 block bg-[#385798] rounded-full boxShadow cursor-pointer mr-4"></span>
            <span className="w-4 h-4 block bg-[#eaeaea] rounded-full boxShadow cursor-pointer "></span>
          </p>
          <p className="text-gray-600 font-medium md:text-xl mt-4">
            With an advanced acoustic platform and noise cancelling, Solo Pro
            ensures you'll always have the right sound for right situation.
          </p>
          <button className="rounded-3xl border border-[#EB3B2C] hover:bg-[#eb3c2c15] transitionCs text-[#EB3B2C] font-medium mt-6 px-5 py-2 shadow-xl">
            Buy Now
          </button>
        </div>
      </section>
       <section className="container flex justify-start items-center pt-10">
        <div ref={section3} className={`w-full h-[350px] rounded-xl overflow-hidden relative shadow-lg transition ${isS3InView ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"}`}>
          <img
            className="w-full h-full object-cover object-center rotate-180"
            src={person3}
            alt=""
          />
          <div className="absolute z-10 md:left-10 bottom-3 md:bottom-10 text-gray-600 text-xl font-bold flex cursor-pointer blurCs p-4 rounded-xl">
            <div className="bg-[#EF4444] rounded-full flex justify-center items-center pl-3 pr-2 mr-4">
              <img src={playIcon} alt="" />
            </div>
            <p>
              Watch <br /> Intro Video
            </p>
          </div>
        </div>
      </section>
     <section id="features" className="container h-[100vh] flex flex-col md:flex-row justify-evenly md:justify-between items-center pt-10">
        <div ref={section4} className={`md:w-1/2 transition ${isS4InView ? "translate-x-0 opacity-100" : "-translate-x-40 opacity-0"}`}>
          <h3 className="text-gray-600 text-4xl md:text-5xl font-bold">
            Controll your sound with listening modes
          </h3>
          <p className="text-gray-600 md:text-xl font-semibold mt-5">
            With an advanced acoustic platform and noise cancelling, Solo Pro
            ensures you'll always have the right sound for right situation.
          </p>
        </div>
        <div className={`flex justify-center items-center relative transition ${isS4InView ? "translate-x-0 opacity-100" : "translate-x-40 opacity-0"}`}>
          <h2 className="text-[25vw] md:text-[15vw] font-bold top-14 md:top-20 text-[#EDEEEF] absolute -z-10">
            SOLO
          </h2>
          <img src={headphone3} className="w-[80%]" alt="" />
        </div>
      </section>
     <section className="container flex flex-col md:flex-row justify-between items-center gap-20 mt-10">
        <div className={`w-[90%] md:w-1/3 shadow-xl hover:shadow-2xl text-center space-y-5 p-7 flex flex-col justify-center items-center transition-all duration-[1000ms] ${isS5InView ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"}`}>
          <img className="w-10" src={volumeIcon} alt="" />
          <h2 className="text-gray-600 text-xl font-bold">
            Active Noise Cancelling
          </h2>
          <p ref={section5} className="text-gray-600 text-md font-semibold">
            Actively blocks external noise and uses real-time audio calibration,
            giving you the space you need
          </p>
        </div>
        <div className={`w-[90%] md:w-1/3 shadow-xl hover:shadow-2xl text-center space-y-5 p-7 flex flex-col justify-center items-center transition-all duration-[1250ms] ${isS5InView ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"}`}>
          <img className="w-12" src={batteryIcon} alt="" />
          <h2 className="text-gray-600 text-xl font-bold">
            Long Lasting Battery
          </h2>
          <p className="text-gray-600 text-md font-semibold">
            Up to 40 Hours of Listening Time<sup>1</sup> <br /> 5 Minutes = 3
            Hours With Fast Fuel, a quick 5-minute charge provides 3 hours of
            playback.
          </p>
        </div>
        <div className={`w-[90%] md:w-1/3 shadow-xl hover:shadow-2xl text-center space-y-5 p-7 flex flex-col justify-center items-center transition-all duration-[1500ms] ${isS5InView ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"}`}>
          <div className="flex">
            <img className="w-10 mr-2" src={andriodIcon} alt="" />
            <img className="w-10" src={iosIcon} alt="" />
          </div>
          <h2 className="text-gray-600 text-xl font-bold">
            Compatible with Apple & Android<sup>4</sup>
          </h2>
          <p className="text-gray-600 text-md font-semibold">
            Solo3 headphones easily connect to Android and IOS devices via
            Bluetooth® right out of the box.
          </p>
        </div>
      </section>
       <section ref={section6} className="container md:h-[100vh] flex flex-col md:flex-row justify-between items-center py-10">
        <div className={`flex items-center relative transition ${isS6InView ? "translate-x-0 opacity-100":"-translate-x-40 opacity-0"}`}>
          <img src={headphone4} className="w-[80%]" alt="" />
        </div>
        <div className={`md:w-1/2 transition ${isS6InView ? "translate-x-0 opacity-100":"translate-x-40 opacity-0"}`}>
          <h3 className="text-gray-600 text-4xl md:text-5xl font-bold">
            What's in the box
          </h3>
          <ul className="text-gray-600 text-lg md:text-xl font-semibold mt-7 space-y-4">
            <li>
              <span className="inline-block w-3 h-3 rounded-full bg-gray-400"></span>{" "}
              Solo Pro wireless headphones
            </li>
            <li>
              <span className="inline-block w-3 h-3 rounded-full bg-gray-400"></span>{" "}
              Carrying Case
            </li>
            <li>
              <span className="inline-block w-3 h-3 rounded-full bg-gray-400"></span>{" "}
              Lightning to USB-A charging cable
            </li>
            <li>
              <span className="inline-block w-3 h-3 rounded-full bg-gray-400"></span>{" "}
              Quick Start Guide
            </li>
            <li>
              <span className="inline-block w-3 h-3 rounded-full bg-gray-400"></span>{" "}
              Warranty Card
            </li>
          </ul>
        </div>
      </section>
      <footer className="container h-20">
        <hr />
        <div className="flex flex-col items-center py-5">
          <h2 className="text-gray-600 text-4xl md:text-5xl font-bold">Say hello to us</h2>
          <div className="relative shadow-lg mt-5 w-[300px]">
            <label htmlFor="UserEmail" className="sr-only">
              Email
            </label>
            <input
              type="email"
              id="UserEmail"
              placeholder="Enter your email..."
              className="w-full rounded-md border-gray-200 pe-10 p-3 shadow-inner sm:text-md placeholder:text-gray-600"
            />
            <span className="cursor-pointer bg-[#EE4332] rounded-r-md absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-700">
              <img src={sendIcon} alt="" />
            </span>
          </div>
        </div>
        <div className="flex space-y-3 flex-col md:flex-row items-center justify-between py-10">
          <div className="flex space-x-3 text-gray-600 text-sm md:text-lg">
            <p className="cursor-pointer">About</p>
            <span>|</span>
            <p className="cursor-pointer">Privacy Policy</p>
            <span>|</span>
            <p className="cursor-pointer">Contact Me</p>
          </div>
          <div className="md:w-1/3">
            <h3 className="text-gray-600 text-sm md:">
              Copyright © 2024 - Taha Umar
            </h3>
          </div>
          <div className="flex space-x-3">
            <a href="https://www.instagram.com/_taha_umer_/">
              <img className="w-7" src={instagramIcon} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/taha-umer/">
              <img className="w-7" src={linkedinIcon} alt="" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
