import React from "react";
import Navbar from "../Components/Navbar";

export default function HomeLayout({ children }) {
  return (
    <div className=" min-h-screen w-full ">
      <div className="flex flex-col items-start justify-start ">
        <div className="items relative">
          <Navbar />
        </div>
        <div className="items relative">
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}
