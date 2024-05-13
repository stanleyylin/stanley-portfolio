import { Experiences, HeroBanner, Projects } from "@/components";
import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        const root = document.documentElement;
        root.style.setProperty("overflow", "hidden scroll");
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
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
