import { H1, P1 } from "@/components/atoms";
import { useEffect } from "react";

const NotFound = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center">
            <H1>404</H1>
            <div className="w-[100px] bg-opacity-60 mt-4 mb-8 h-[0.5px] bg-foreground" />
            <P1 className="mb-8">This page could not be found</P1>
        </div>
    );
};

export default NotFound;
