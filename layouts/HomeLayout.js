import React from "react";
import Navbar from "../Components/Navbar";

export default function HomeLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
