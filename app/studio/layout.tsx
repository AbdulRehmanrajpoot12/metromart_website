import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "MetroMart. Your Ultimate E-Commerce Destination",
    description: "Experience seamless shopping with MetroMart! From daily essentials to premium finds, we bring convenience, quality, and unbeatable value right to your doorstep.",
}

const RootLayout = ({children}: {children:React.ReactNode}) => {
  return (
    <html lang="en">
        <body>
            {children}
        </body>
    </html>
  );
};

export default RootLayout;