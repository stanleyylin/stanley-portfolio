import EmberGroveIntroGif from "@/assets/ember-grove-intro-gif.gif";
import EmberGroveIntroPoster from "@/assets/ember-grove-intro-poster.webp";
import EmberGroveIntro from "@/assets/ember-grove-intro.mp4";
import { Button, H1, P1, P2, PointerBox } from "@/components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const Landing = () => {
    const [xy, setXY] = useState<{ x: number; y: number }>({
        x: 0,
        y: 0,
    });
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
        let root = document.documentElement;
        root.style.setProperty("overflow", "hidden hidden");
    }, []);

    return (
        <div
            className="select-none relative flex h-screen w-screen items-center justify-center overflow-hidden"
            id="landing"
        >
            <PointerBox
                className="left-0 top-0 z-10 h-[30vh] w-[30vw]"
                setTranslateXY={setXY}
                xValue={-1}
                yValue={-1}
            />
            <PointerBox
                className="left-0 top-[30vh] z-10 h-[40vh] w-[25vw]"
                setTranslateXY={setXY}
                xValue={-1}
                yValue={0}
            />
            <PointerBox
                className="left-[30vw] top-0 z-10 h-[25vh] w-[40vw]"
                setTranslateXY={setXY}
                xValue={0}
                yValue={-1}
            />
            <PointerBox
                className="right-0 top-0 z-10 h-[30vh] w-[30vw]"
                setTranslateXY={setXY}
                xValue={1}
                yValue={-1}
            />
            <PointerBox
                className="right-0 top-[30vh] z-10 h-[40vh]  w-[30vw]"
                setTranslateXY={setXY}
                xValue={1}
                yValue={0}
            />
            <PointerBox
                className="bottom-0 left-0 z-10 h-[30vh] w-[30vw]"
                setTranslateXY={setXY}
                xValue={-1}
                yValue={1}
            />
            <PointerBox
                className="bottom-0 left-[30vw] z-10 h-[25vh] w-[40vw]"
                setTranslateXY={setXY}
                xValue={0}
                yValue={1}
            />
            <PointerBox
                className="bottom-0 right-0 z-10 h-[30vh] w-[30vw]"
                setTranslateXY={setXY}
                xValue={1}
                yValue={1}
            />

            <div className="absolute top-0 z-0 h-[100vh] w-[100vw] overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={twMerge(
                        "hidden md:flex transition-object-position duration-2000 w-[100vw] h-[100vh] object-none delay-75 object-center ease-in-out cover-video:object-cover",
                        xy.x < 0 && xy.y < 0 && "object-left-top",
                        xy.x > 0 && xy.y < 0 && "object-right-top",
                        xy.x < 0 && xy.y > 0 && "object-left-bottom",
                        xy.x > 0 && xy.y > 0 && "object-right-bottom",
                        xy.x < 0 && xy.y === 0 && "object-left",
                        xy.x > 0 && xy.y === 0 && "object-right",
                        xy.y < 0 && xy.x === 0 && "object-top",
                        xy.y > 0 && xy.x === 0 && "object-bottom",
                    )}
                    poster={EmberGroveIntroPoster}
                >
                    <source src={EmberGroveIntro} type="video/mp4" />
                </video>
                <img
                    src={EmberGroveIntroGif}
                    className={twMerge(
                        "transition-object-position duration-2000 w-[100vw] h-[100vh] å object-center ease-in-out object-cover delay-20",
                        xy.x < 0 && xy.y < 0 && "object-left-top",
                        xy.x > 0 && xy.y < 0 && "object-right-top",
                        xy.x < 0 && xy.y > 0 && "object-left-bottom",
                        xy.x > 0 && xy.y > 0 && "object-right-bottom",
                        xy.x < 0 && xy.y === 0 && "object-left",
                        xy.x > 0 && xy.y === 0 && "object-right",
                        xy.y < 0 && xy.x === 0 && "object-top",
                        xy.y > 0 && xy.x === 0 && "object-bottom",
                    )}
                />
                <img
                    src={EmberGroveIntroPoster}
                    className={twMerge(
                        "transition-object-position duration-2000 w-[100vw] h-[100vh] object-none  object-center ease-in-out cover-video:object-cover delay-20",
                        xy.x < 0 && xy.y < 0 && "object-left-top",
                        xy.x > 0 && xy.y < 0 && "object-right-top",
                        xy.x < 0 && xy.y > 0 && "object-left-bottom",
                        xy.x > 0 && xy.y > 0 && "object-right-bottom",
                        xy.x < 0 && xy.y === 0 && "object-left",
                        xy.x > 0 && xy.y === 0 && "object-right",
                        xy.y < 0 && xy.x === 0 && "object-top",
                        xy.y > 0 && xy.x === 0 && "object-bottom",
                    )}
                />
            </div>

            <div className="z-[1] flex h-screen sm-height:-translate-y-7 w-screen flex-col items-center justify-center">
                <P1 className="-mb-2 -mt-4 !uppercase drop-shadow-text-light">
                    This is Stanley Lin's
                </P1>
                <H1
                    className=" animate-glow mb-8 sm-height:!mb-2 sm-height:!text-12 !uppercase xs:!text-14  sm:!text-16 2xs:!text-13 !text-12 transition-all"
                    style={{ transitionDuration: "300ms" }}
                >
                    Portfolio
                </H1>
                <Button onClick={() => navigate("/home")} className="z-[100]">
                    <P1
                        className="absolute mb-1 !uppercase drop-shadow-text-bright"
                        onClick={() => navigate("/home")}
                    >
                        Enter
                    </P1>
                </Button>
            </div>

            <P2 className="absolute bottom-0 z-50 text-muted-foreground text-opacity-50 pb-4 !text-2">
                Move your cursor around!
            </P2>
        </div>
    );
};

export default Landing;
