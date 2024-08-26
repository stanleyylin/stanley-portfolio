import starCursor from "@/assets/starCursor.svg";
import { useCursorify } from "@cursorify/react";
import { twMerge } from "tailwind-merge";

const StarCursor = () => {
    const { mouseState, style } = useCursorify();
    return (
        <div
            className={twMerge(
                "w-12 h-12 rounded-10 border-primary border-2 flex justify-center items-center transition-all duration-300 ease-in-out border-opacity-55",
                (mouseState === "mouseDown" || style === "pointer") &&
                    "w-16 h-16 border-opacity-95",
                mouseState === "mouseDown" && "scale-[1.2]",
            )}
        >
            <img src={starCursor} />
        </div>
    );
};

export default StarCursor;
