import { H2, MenuIcon, P1 } from "@/components";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { animateScroll as scroll, scroller } from "react-scroll";

const NavBar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const goToHomePageAndScroll = async (
        selector: string,
        duration?: number,
    ) => {
        await navigate("/home");
        await scroller.scrollTo(selector, {
            duration: duration ?? 600,
            smooth: true,
            spy: true,
        });
    };

    const goToLanding = async () => {
        await navigate("/");
        let root = document.documentElement;
        root.style.setProperty("overflow", "hidden hidden");
        await scroller.scrollTo("landing", {
            duration: 0,
            smooth: true,
            spy: true,
        });
    };

    return location.pathname !== "/" ? (
        <>
            <div className="fixed top-0 z-50 sm:flex h-8 w-screen items-center justify-center hidden">
                <div className="relative flex xl:w-[75vw] max-w-[900px] lg:w-[80vw] md:w-[90vw] w-full items-center justify-between rounded-bl-4 rounded-br-4 md:px-24 px-12 pb-4 pt-12  transition-all duration-300">
                    <div className="absolute backdrop-blur-[1.5px] bg-primary-background bg-opacity-15  w-full h-full top-0 left-0 rounded-bl-4 rounded-br-4" />

                    <P1
                        className="z-[100] cursor-pointer !text-3.5"
                        onClick={() => scroll.scrollToTop()}
                    >
                        Home
                    </P1>
                    <P1
                        className="z-[100] cursor-pointer !text-3.5"
                        onClick={() => goToHomePageAndScroll("projects")}
                    >
                        Projects
                    </P1>
                    <H2
                        className="font-normal !text-6 text-primary !uppercase cursor-pointer drop-shadow-text-light z-[100]"
                        onClick={() => {
                            goToLanding();
                        }}
                    >
                        Stanley Lin
                    </H2>
                    <P1
                        className="z-[100] !text-3.5"
                        onClick={() =>
                            goToHomePageAndScroll("experiences", 800)
                        }
                    >
                        Experiences
                    </P1>
                    <P1 className="z-[100] !text-3.5">Contact</P1>
                </div>
            </div>
            <div className="border-b-[0.5px] bg-primary-background bg-opacity-15 border-b-foreground border-opacity-20 fixed top-0 z-50 sm:hidden h-14 w-screen items-center justify-between flex p-8 backdrop-blur-[3px]">
                <H2
                    className="font-normal !uppercase text-6 cursor-pointer drop-shadow-text-bright"
                    onClick={() => {
                        goToLanding();
                    }}
                >
                    Stanley Lin
                </H2>
                <MenuIcon open={open} onClick={() => setOpen(!open)} />
            </div>
            {open && (
                <div className=" fixed top-20 mt-2 rounded-2 z-50 w-[96vw] translate-x-[2vw] flex flex-col items-center justify-center py-4 sm:hidden">
                    <div className="absolute backdrop-blur-[1.5px] bg-primary-background bg-opacity-15 rounded-2 z-50 w-full h-full top-0 left-0" />
                    <P1
                        className="h-9 flex items-center justify-center z-[100] cursor-pointer"
                        onClick={() => {
                            navigate("/home");
                            setOpen(false);
                        }}
                    >
                        Home
                    </P1>
                    <P1
                        className="h-9 flex items-center justify-center z-[100] cursor-pointer"
                        onClick={() => {
                            goToHomePageAndScroll("projects");
                            setOpen(false);
                        }}
                    >
                        Projects
                    </P1>
                    <P1
                        className="h-9 flex items-center justify-center z-[100] cursor-pointer"
                        onClick={() => {
                            goToHomePageAndScroll("experiences", 800);
                            setOpen(false);
                        }}
                    >
                        Experiences
                    </P1>
                    <P1 className="h-9 flex items-center justify-center z-[100] cursor-pointer">
                        Contact
                    </P1>
                </div>
            )}
        </>
    ) : null;
};

export default NavBar;
