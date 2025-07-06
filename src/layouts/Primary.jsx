import Navbar from "@/components/Navbar";
import React from "react";

const Primary = ({ children }) => {
    return (
        <div className="bg-black h-full relative">
            <Navbar.PromotionBar />
            <Navbar.Primary />
            {children}
        </div>
    );
};

export default Primary;
