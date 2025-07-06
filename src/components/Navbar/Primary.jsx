import React from "react";
import Container from "../Container";
import Image from "next/image";
import Icons from "@/assets/icons";
import Link from "next/link";
import { navLinks } from "@/lib/NavLinks";

const Primary = () => {
    return (
        <div className="mt-4 sm:mt-9 absolute sm:relative z-30 sm:z-20 w-full">
            <Container.Primary>
                <div className="flex items-center sm:items-start justify-between">
                    <div className="sm:hidden block" />
                    <Image
                        src={Icons.logo}
                        alt="Netzet Logo"
                        width={1000}
                        height={1000}
                        className="w-[174px] h-[74px]"
                    />
                    <div className="sm:flex items-center gap-10 hidden">
                        {navLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className="text-medium-gray text-lg font-semibold"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <button className="cursor-pointer sm:hidden block">
                        <Image
                            src={Icons.menu}
                            alt="menu"
                            width={100}
                            height={100}
                            className="w-6 h-6"
                        />
                    </button>
                </div>
            </Container.Primary>
        </div>
    );
};

export default Primary;
