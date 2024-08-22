import Navbar from "./components/Navbar";

import HeroImg from "./assets/hero.webp";
import LandMarkImg from "./assets/landmark.webp";
import AD1 from "./assets/dummy_ad_1.webp";
import AD2 from "./assets/dummy_ad_2.webp";
import AD3 from "./assets/dummy_ad_3.webp";

import BUS_ICON from "./assets/bus_icon.svg";
import PLANE_ICON from "./assets/plane_icon.svg";
import CODE_ICON from "./assets/code_icon.svg";
import { useState } from "react";

const PRODUCTS_DATA = [
  {
    title: "Transit",
    icon: BUS_ICON,
    items: [
      "Bus Wraps",
      "Transit Shelters",
      "Digital Displays",
      "Tourist Centers",
      "Exterior Rail",
    ],
  },
  {
    title: "Air",
    icon: PLANE_ICON,
    items: [
      "Floor Graphics",
      "Wi-Fi Pages",
      "Airport Exits",
      "Check-In Counters",
      "Terminals",
    ],
  },
  {
    title: "Digital",
    icon: CODE_ICON,
    items: [
      "Streaming Services",
      "Affiliate Websites",
      "Virtual Events",
      "Mobile Apps",
      "Search Engines",
    ],
  },
];

function App() {
  const [openProductIndex, setOpenProductIndex] = useState(0);

  return (
    <section className="bg-bg min-h-screen max-w-screen px-3 py-2 lg:px-6 font-primary text-accent">
      <Navbar />
      <section className="__HERO_CONTAINER__ relative mt-8 w-full h-[720px] z-10">
        <div className="__BACK__ absolute -top-4 left-1/2 -translate-x-1/2 w-[90%] z-[-1] h-full bg-primary/50 rounded-3xl"></div>
        <img
          src={HeroImg}
          className="h-full w-full object-cover rounded-3xl"
          alt=""
        />
        <div className="__OVERLAY__ absolute top-0 left-0 h-full w-full pointer-events-none bg-black/30 rounded-3xl"></div>
        <div className="__ITEMS_CONTAINER__ absolute top-0 left-0 h-full w-full rounded-3xl flex flex-col justify-between items-center lg:flex-row lg:items-end py-12 px-8 lg:px-24">
          <div className="__HEADING_CONTAINER__ text-primary">
            <h1 className="font-secondary text-5xl sm:text-9xl">SeattleVista</h1>
            <p className="text-3xl">Outdoor Ads</p>
          </div>
          <div className="__ACTION_BTN_CONTAINER__ w-full max-w-72 sm:max-w-sm lg:max-w-sm xl:max-w-xl text-primary rounded-2xl backdrop-blur-sm bg-black/40 px-8 py-8">
            <h2 className="text-3xl">Sales Office</h2>
            <p className="mt-6 text-primary/80">1234 Pine Street</p>
            <p className="text-primary/80">Suite 57</p>
            <p className="text-primary/80">Seattle, WA 98101</p>
            <p className="text-primary/80">777-234-1234</p>
            <a
              href="#"
              className="mt-6 w-full bg-primary text-accent font-medium block text-center text-xl rounded-2xl py-3 filter transition-all hover:brightness-90"
            >
              Contact us
            </a>
          </div>
        </div>
      </section>
      <section className="__PRODUCTS_CONTAINER__ mt-2 flex flex-col sm:flex-row sm:justify-between bg-primary rounded-3xl px-8 py-12 gap-4 xl:gap-8">
        <div className="__PRODUCTS_TEXT_CONT__ md:w-1/3 flex flex-col justify-start items-start gap-8">
          <h2 className="text-4xl font-semibold">Products</h2>
          <p className="text-accent/80 font-medium">
            Turn your travel dreams into unforgettable experiences. We provide
            personalized, seamless service to create journeys that inspire and
            connect you with the world. Let us help you discover and cherish new
            adventures.
          </p>
        </div>
        <div className="__ITEMS_CONT__ flex flex-col gap-2 md:w-1/2">
          {PRODUCTS_DATA.map((item, ind) => {
            return (
              <div
                onClick={() => setOpenProductIndex(ind)}
                key={ind}
                className={`bg-bg/40 p-6 rounded-2xl cursor-pointer transition-all ${openProductIndex != ind ? 'hover:bg-accent group' : ''}`}
              >
                <div className="__TITLE_ICON_CONT__ flex justify-between items-center">
                  <h3 className="text-xl font-semibold group-hover:text-primary">{item.title}</h3>
                  <div className="bg-primary rounded-lg size-10 p-2">
                    <img src={item.icon} alt="" />
                  </div>
                </div>
                {openProductIndex == ind && (
                  <div className="__ITEMS_ITEMS_CONTAINER__ mt-4 flex flex-wrap  gap-4">
                    {item.items.map((i) => {
                      return (
                        <div
                          key={i}
                          className="bg-primary rounded-lg size-full lg:size-40 xl:size-44 2xl:size-52 flex flex-col justify-between items-start px-4 py-2 md:py-4 group hover:bg-accent transition-all hover:text-primary"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            transform="rotate(90)"
                            className="max-lg:mb-4 size-4 lg:size-8 stroke-accent group-hover:stroke-primary  "
                          >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              {" "}
                              <path
                                d="M12 5V19M12 5L6 11M12 5L18 11"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>{" "}
                            </g>
                          </svg>
                          <p className="font-semibold">{i}</p>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
      <section className="__LANDMARK_IMG_CONT__ mt-2 rounded-3xl w-full h-[640px]">
        <img
          src={LandMarkImg}
          alt="landmark"
          className="w-full h-full object-cover rounded-3xl"
        />
      </section>
      <section className="__HIGHLIGHTS_CONT__ bg-primary rounded-3xl mt-2 flex flex-col sm:flex-row sm:justify-between px-8 py-12 max-sm:gap-12">
        <div className="__HEADING_CONT__ md:w-1/2">
          <h2 className="font-semibold text-4xl">Seattle Highights</h2>
          <div className="mt-32">
            <a
              href="#"
              className="rounded-xl px-6 py-4 border border-accent/50 font-semibold text-sm hover:bg-accent hover:text-primary transition-all"
            >
              Download Starter Pack
            </a>
          </div>
        </div>
        <div className="__DESC_CONT__ md:w-1/2">
          <p className="text-accent/80 font-medium">
            We specialize in creating dynamic, results-driven ad campaigns.
            Combining creativity with strategic insight, we deliver impactful
            solutions that make your brand stand out. Partner with us to
            transform your vision into powerful stories that captivate and
            convert. Let's take your brand to new heights!
          </p>
        </div>
      </section>
      <section className="__STATS_CONT__ mt-2 grid grid-cols-2 sm:grid-cols-4 gap-1">
        <div className="bg-primary rounded-3xl p-4">
          <p className="text-accent/70 text-center font-medium text-sm">
            Reach per week
          </p>
          <h2 className="mt-12 xl:mt-16 font-bold text-4xl text-center">93%</h2>
        </div>
        <div className="bg-primary rounded-3xl p-4">
          <p className="text-accent/70 text-center font-medium text-sm">
            Tourist center displays
          </p>
          <h2 className="mt-12 xl:mt-16 font-bold text-4xl text-center">
            285+
          </h2>
        </div>
        <div className="bg-primary rounded-3xl p-4">
          <p className="text-accent/70 text-center font-medium text-sm">
            Monthly Interactions
          </p>
          <h2 className="mt-12 xl:mt-16 font-bold text-4xl text-center">
            25k+
          </h2>
        </div>
        <div className="bg-primary rounded-3xl p-4">
          <p className="text-accent/70 text-center font-medium text-sm">
            Weekly ROI
          </p>
          <h2 className="mt-12 xl:mt-16 font-bold text-4xl text-center">51%</h2>
        </div>
      </section>
      <section className="__ADS_SHOWCASE_CONT__ mt-2 grid grid-cols-1  sm:grid-cols-3 gap-2">
        <div className="h-[460px] w-full rounded-3xl">
          <img
            src={AD1}
            alt="ad1"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
        <div className="hidden sm:block h-[460px] w-full rounded-3xl">
          <img
            src={AD2}
            alt="ad2"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
        <div className="h-[460px] w-full rounded-3xl">
          <img
            src={AD3}
            alt="ad3"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </section>
      <footer className="mt-2 bg-primary/80 grid grid-cols-2 md:grid-cols-4 gap-y-4 rounded-3xl py-12 px-6">
        <div className="__MEDIA_CONT__">
          <h3 className="font-bold text-xl lg:text-3xl">Media</h3>
          <a
            className="mt-6 block font-semibold leading-7 text-accent/80 hover:text-accent transition-all"
            href="#"
          >
            Posters
          </a>
          <a
            className="block font-semibold leading-7 text-accent/80 hover:text-accent transition-all"
            href="#"
          >
            Transit Shelters
          </a>
          <a
            className="block font-semibold leading-7 text-accent/80 hover:text-accent transition-all"
            href="#"
          >
            Tourist Centers
          </a>
          <a
            className="block font-semibold leading-7 text-accent/80 hover:text-accent transition-all"
            href="#"
          >
            Exterior Rails
          </a>
          <a
            className="block font-semibold leading-7 text-accent/80 hover:text-accent transition-all"
            href="#"
          >
            Digital Displays
          </a>
        </div>
        <div className="__ABOUT_CONT__">
          <h3 className="font-bold text-xl lg:text-3xl">About</h3>
          <a
            className="mt-6 block font-semibold leading-7 text-accent/80 hover:text-accent transition-all"
            href="#"
          >
            Management
          </a>
          <a
            className="block font-semibold leading-7 text-accent/80 hover:text-accent transition-all"
            href="#"
          >
            Careers
          </a>
          <a
            className="block font-semibold leading-7 text-accent/80 hover:text-accent transition-all"
            href="#"
          >
            Locations
          </a>
          <a
            className="block font-semibold leading-7 text-accent/80 hover:text-accent transition-all"
            href="#"
          >
            Associates
          </a>
        </div>
        <div className="__RESOURCES_CONT__">
          <h3 className="font-bold text-xl lg:text-3xl">Resources</h3>
          <a
            className="mt-6 block font-semibold leading-7 text-accent/80 hover:text-accent transition-all"
            href="#"
          >
            Blog
          </a>
          <a
            className="block font-semibold leading-7 text-accent/80 hover:text-accent transition-all"
            href="#"
          >
            Starter Kits
          </a>
          <a
            className="block font-semibold leading-7 text-accent/80 hover:text-accent transition-all"
            href="#"
          >
            Analytics
          </a>
          <a
            className="block font-semibold leading-7 text-accent/80 hover:text-accent transition-all"
            href="#"
          >
            Workforce
          </a>
        </div>
        <div className="__CONNECT_CONT__ max-w-[400px]">
          <h3 className="font-bold text-xl lg:text-3xl">Connect with us</h3>
          <a
            className="mt-8 bg-white rounded-xl px-4 py-4 flex justify-between items-center font-semibold leading-7 text-accent/80 hover:text-primary hover:bg-accent group transition-all"
            href="#"
          >
            <span>Email</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              transform="rotate(90)"
              className="stroke-accent/80 group-hover:stroke-primary size-6"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M12 5V19M12 5L6 11M12 5L18 11"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </a>
        </div>
      </footer>
    </section>
  );
}

export default App;
