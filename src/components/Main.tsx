"use client";

import { useState, useEffect } from "react";
import List from "@/components/List";
import MobileList from "@/components/MobileList";
import Search from "./Search";

export default function Main() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
        <Search />
      {isMobile ? <MobileList /> : <List />}
    </div>
  );
}