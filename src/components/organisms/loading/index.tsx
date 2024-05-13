import { H1 } from "@/components";
import { useEffect } from "react";

const Loading = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="h-screen w-screen bg-background">
            <H1>Loading...</H1>
        </div>
    );
};

export default Loading;
