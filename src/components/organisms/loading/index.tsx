import EmberGroveIntroGif from "@/assets/ember-grove-intro-gif.gif";
import EmberGroveIntroPoster from "@/assets/ember-grove-intro-poster.webp";
import EmberGroveIntro from "@/assets/ember-grove-intro.mp4";
import { useEffect } from "react";
import { twMerge } from "tailwind-merge";

const Loading = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="absolute top-0 h-[100vh] w-[100vw] overflow-hidden z-50">
            <video
                autoPlay
                loop
                muted
                playsInline
                className={twMerge(
                    "hidden md:flex transition-object-position duration-2000 w-[100vw] h-[100vh] object-none delay-75 object-center ease-in-out cover-video:object-cover",
                )}
                poster={EmberGroveIntroPoster}
            >
                <source src={EmberGroveIntro} type="video/mp4" />
            </video>
            <img
                src={EmberGroveIntroGif}
                className={twMerge(
                    "transition-object-position duration-2000 w-[100vw] h-[100vh] å object-center ease-in-out object-cover delay-20",
                )}
            />
            <img
                src={EmberGroveIntroPoster}
                className={twMerge(
                    "transition-object-position duration-2000 w-[100vw] h-[100vh] object-none  object-center ease-in-out cover-video:object-cover delay-20",
                )}
            />
        </div>
    );
};

export default Loading;
