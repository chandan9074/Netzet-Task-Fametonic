import Icons from "@/assets/icons";
import Images from "@/assets/images";
import Container from "@/components/Container";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
    return (
        <div className="w-full h-full pb-16 xl:pb-24 2xl:pb-40">
            <Image
                src={Images.hero_image}
                alt="hero_image"
                width={2000}
                height={2000}
                className="xl:w-[666px] w-[530px] h-[540px] xl:h-[679px] absolute right-0 md:right-16 xl:right-[100px] top-[126px] z-10 sm:block hidden"
            />
            <Container.Primary>
                <div className="grid grid-cols-1 xl:grid-cols-2 mt-24 sm:mt-[57px] relative z-20">
                    <Image
                        src={Images.hero_image}
                        alt="hero_image"
                        width={2000}
                        height={2000}
                        className=" w-full sm:hidden block relative"
                    />
                    <div>
                        <h1 className="text-white text-[25px] md:text-3xl lg:text-[35px] font-bold leading-[30px] md:leading-[40px] lg:leading-[44px] font-heading text-center sm:text-left">
                            Want to Turn Social Media Into a Profitable Career?
                        </h1>
                        <h1 className="text-secondary text-shadow-primary text-[25px] md:text-3xl lg:text-[35px] font-bold mt-0 leading-[30px] md:leading-[40px] lg:leading-[44px] font-heading text-center sm:text-left">
                            Discover your way to success with Fametonic:
                        </h1>
                        <div>
                            {subHeadings.map((heading, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2.5 mt-3"
                                >
                                    <span>✨</span>
                                    <p className="text-white text-base font-semibold leading-[22px]">
                                        {heading}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col-reverse sm:flex-col sm:items-center xl:items-start">
                            <div>
                                <button className="w-full sm:w-auto px-20 rounded-[10px] bg-primary text-white text-xl font-bold  py-2 drop-shadow-secondary mt-[38px]">
                                    <span>GET STARTED</span>
                                    <Image
                                        src={Icons.right_arrow}
                                        alt="right_arrow"
                                        width={100}
                                        height={100}
                                        className="inline-block ml-2 w-4 h-4 mb-0.5"
                                    />
                                </button>
                                <p className="text-xs mt-3 text-white text-center">
                                    1-minute quiz for personalized Insights
                                </p>
                            </div>
                            <div className="mt-[30px] ">
                                <p className="text-medium-gray-2 text-xs font-medium text-center xl:text-left">
                                    By clicking "Get Started", you agree with
                                    Terms and Conditions, Privacy Policy,
                                    Subscription Terms
                                </p>
                                <p className="text-medium-gray-2 text-xs font-medium mt-5 sm:mt-3 text-center xl:text-left">
                                    Fametonic 2025 ©All Rights Reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container.Primary>
        </div>
    );
};

export default HeroSection;

const subHeadings = [
    "Start growing your influence right away—no waiting required!",
    "Create viral TikToks and Reels step by step with easy-to-follow lessons",
    "Use a Personal AI Worker to boost your content",
    "Learn from expert-led courses designed for aspiring influencers",
];
