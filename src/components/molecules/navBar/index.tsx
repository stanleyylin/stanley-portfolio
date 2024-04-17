import { H2, P1 } from "@/components";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const NavBar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <div
            className={twMerge(
                "fixed top-0 z-50 flex h-12 w-screen items-center justify-center",
                location.pathname === "/" && "hidden",
            )}
        >
            <div className="flex w-[70vw] items-center justify-between rounded-bl-4 rounded-br-4 bg-primary-background bg-opacity-15 px-24 pb-4 pt-12 backdrop-blur-[1.5px]">
                <P1>About</P1>
                <P1>Projects</P1>
                <H2
                    className="font-normal !uppercase cursor-pointer drop-shadow-text-light"
                    onClick={() => {
                        navigate("/");
                        console.log("RAWRR");
                    }}
                >
                    Stanley Lin
                </H2>
                <P1>Experiences</P1>
                <P1>Contact</P1>
            </div>
        </div>
    );
};

export default NavBar;
