"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import { ReactNode } from "react";

interface IProviders {
  children: ReactNode;
}

export default function Providers({ children }: Readonly<IProviders>) {
  return (
    <>
      <GoogleAnalytics gaId="G-W0ZWY4VS2K" dataLayerName="dataLayer" />
      {children}
    </>
  );
}
