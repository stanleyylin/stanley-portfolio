import { H1, HeroBanner, Projects } from "@/components";
import React, { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        let root = document.documentElement;
        root.style.setProperty("overflow", "scroll");
    }, []);

    return (
        <div className="flex flex-col bg-background">
            <HeroBanner />
            <Projects />
        </div>
    );
};

export default Home;
