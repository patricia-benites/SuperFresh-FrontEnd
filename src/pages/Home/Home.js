import React from "react";
import { Announcement } from "../../components/Announcement/Announcement";
import Navbar from "../../components/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Announcement />
      <Navbar />
      {/* <Slider /> */}
    </div>
  );
}
