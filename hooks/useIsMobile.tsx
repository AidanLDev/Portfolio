import React, { useEffect, useState } from "react";

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const query = window.matchMedia("(max-width: 575px)");
    const handleChange = () => setIsMobile(query.matches);

    handleChange();
    if (query.addEventListener) {
      query.addEventListener("change", handleChange);
    } else {
      query.onchange = handleChange;
    }

    return () => {
      if (query.removeEventListener) {
        query.removeEventListener("change", handleChange);
      } else {
        query.onchange = null;
      }
    };
  }, []);

  return isMobile;
}
