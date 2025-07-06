import React from "react";

const PromotionBar = () => {
    return (
        <div className="py-2.5 px-5 bg-linear-to-r from-primary to-secondary">
            <p className="text-center text-base sm:text-xxl font-extrabold text-white">
                🚀{" "}
                <span className="text-secondary">FRESH BEGINNINGS SALE:</span>{" "}
                Extra 25% OFF, Limited Spots - start your journey today!
            </p>
        </div>
    );
};

export default PromotionBar;
