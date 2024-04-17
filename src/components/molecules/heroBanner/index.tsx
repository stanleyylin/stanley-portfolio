import EmberGroveSecondPoster from "@/assets/ember-grove-second-poster.png";
import EmberGroveSecond from "@/assets/ember-grove-second.mp4";
import Stanley from "@/assets/stanley.png";
import { H1, P2, StarIcon } from "@/components/atoms";
import React from "react";

const HeroBanner = () => {
    return (
        <div className="relative h-[105vh]">
            <img
                src={EmberGroveSecondPoster}
                className="absolute top-0 h-[100vh] w-[100vw] object-cover object-center"
            />
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 h-[105vh] w-[100vw] object-cover object-center hidden md:flex"
            >
                <source src={EmberGroveSecond} type="video/mp4" />
            </video>

            <div className="absolute flex flex-col h-screen w-screen items-center justify-center">
                <div className="relative h-[0.1rem] w-64 bg-primary flex items-start justify-center mb-14 md:mb-28">
                    <StarIcon className="h-8 " />
                </div>
                <div className="flex flex-col md:flex-row w-screen justify-center items-center">
                    <img src={Stanley} className="h-56 mb-4 flex md:hidden" />
                    <div className="flex flex-col w-[80vw] md:w-[40rem]">
                        <H1 className="mb-4 text-11 md:text-16 drop-shadow-text-bright">
                            HI. I’M STANLEY.
                        </H1>
                        <P2>
                            I create{" "}
                            <span className="text-secondary-foreground">
                                meaningful user experiences.
                            </span>
                        </P2>
                        <P2 className="">
                            Currently, I am a software developer @{" "}
                            <span className="text-accent">Deep Trekker</span> &
                            a CS student at the{" "}
                            <span className="text-accent">
                                University of Waterloo
                            </span>
                            !
                        </P2>
                    </div>
                    <img src={Stanley} className="h-56 mt-2 hidden md:flex" />
                </div>
                <div className="relative h-[0.1rem] w-64 bg-primary flex items-end justify-center mt-16 md:mt-32">
                    <StarIcon className="h-8 " />
                </div>
            </div>
            <div className="absolute bottom-0 w-full h-20 left-0 bg-gradient-to-b from-transparent to-background" />
        </div>
    );
};

export default HeroBanner;
