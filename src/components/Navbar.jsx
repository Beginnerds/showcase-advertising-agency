import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full rounded-lg bg-primary text-accent p-4 flex justify-between lg:justify-start items-center">
      <ul className="hidden lg:flex justify-start gap-3 text-sm font-semibold lg:basis-[30%]">
        <li>
          <a className="transition-all hover:text-accent/70" href="#">
            Mission
          </a>
        </li>
        <li>
          <a className="transition-all hover:text-accent/70" href="#">
            Partners
          </a>
        </li>
        <li>
          <a className="transition-all hover:text-accent/70" href="#">
            About Us
          </a>
        </li>
        <li>
          <a className="transition-all hover:text-accent/70" href="#">
            Resources
          </a>
        </li>
      </ul>
      <h2 className="text-center lg:basis-[40%] font-bold text-xl">HH</h2>
      <div className="lg:basis-[30%] flex justify-end items-center gap-2 font-bold">
        <div className="relative rounded-2xl hover:border-b-0 hover:rounded-bl-none hover:rounded-br-none text-center w-28  py-3 border border-accent text-sm group">
          <a href="#" className="">
            Advertising{" "}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#202020"
              className="inline size-[14px] transition-all group-hover:rotate-180"
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
                  d="M7 10L12 15L17 10"
                  stroke="#000000"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </a>
          <div className="absolute top-[80%] left-[-1px] bg-primary w-[102%] py-3 text-center border-accent border border-t-0 rounded-bl-2xl rounded-br-2xl pointer-events-none origin-top scale-y-0 group-hover:pointer-events-auto group-hover:scale-y-100 transition-all">
            <a
              className="block py-3 hover:bg-accent hover:text-primary transition-all"
              href="#"
            >
              Marketing
            </a>
            <a
              className="block py-3 hover:bg-accent hover:text-primary transition-all"
              href="#"
            >
              Analytics
            </a>
            <a
              className="block py-3 hover:bg-accent hover:text-primary transition-all"
              href="#"
            >
              Support
            </a>
            <a
              className="block py-3 hover:bg-accent hover:text-primary transition-all"
              href="#"
            >
              Careers
            </a>
          </div>
        </div>
        <a
          href="#"
          className="rounded-2xl text-center w-28 py-3 bg-accent text-primary text-sm"
        >
          Get in touch
        </a>
      </div>
    </nav>
  );
}
