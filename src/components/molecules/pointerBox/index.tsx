import { FC } from "react";
import { twMerge } from "tailwind-merge";

export type PointerBoxProps = {
    setTranslateXY: (coordinates: { x: number; y: number }) => void;
    xValue: number;
    yValue: number;
    className: string;
    enable: boolean;
};
const PointerBox: FC<PointerBoxProps> = ({
    setTranslateXY,
    xValue,
    yValue,
    className,
    enable,
}) => {
    return (
        <div
            className={twMerge("absolute", className)}
            onPointerEnter={() => {
                enable && setTranslateXY({ x: xValue, y: yValue });
            }}
            onPointerLeave={() => {
                setTranslateXY({ x: 0, y: 0 });
            }}
        />
    );
};

export default PointerBox;
