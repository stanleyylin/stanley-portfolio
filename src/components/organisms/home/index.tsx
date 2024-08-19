import { Experiences, HeroBanner, Projects } from "@/components";
import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        setTimeout(() => {
            const root = document.documentElement;
            root.style.setProperty("overflow", "hidden scroll");
            document.body.removeEventListener("touchstart", function (e) {
                e.preventDefault();
            });
        }, 2000);
    }, []);

    return (
        <div className="flex flex-col bg-background">
            <HeroBanner />
            <Projects />
            <Experiences />
        </div>
    );
};

export default Home;
