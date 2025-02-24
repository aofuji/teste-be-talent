"use client";

import { useState, useEffect } from "react";
import List from "@/components/list";
import MobileList from "@/components/MobileList";

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
      {isMobile ? <MobileList /> : <List />}
    </div>
  );
}