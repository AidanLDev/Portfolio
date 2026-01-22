import React, { useEffect, useState } from "react";

export default function useIsTablet() {
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const query = window.matchMedia("(max-width: 1024px)");
    const handleChange = () => setIsTablet(query.matches);

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

  return isTablet;
}
