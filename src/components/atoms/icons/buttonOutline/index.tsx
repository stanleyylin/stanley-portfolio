import { IconProps } from "@/types";
import React, { FC } from "react";

const ButtonOutlineIcon: FC<IconProps> = ({ ...props }) => {
    return (
        <svg
            viewBox="0 0 151 55"
            preserveAspectRatio="xMaxYMax meet"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g filter="url(#filter0_d_712_155)">
                <path
                    d="M22 5H10C7.79086 5 6 6.79086 6 9V22V37.4876C6 38.4622 6.35583 39.4033 7.00065 40.1341L12.3057 46.1465C13.065 47.007 14.1574 47.5 15.3051 47.5H89.5"
                    stroke="white"
                />
                <path d="M99 47.5H121" stroke="white" />
                <path
                    d="M130 47.5H140.5C142.709 47.5 144.5 45.7091 144.5 43.5V15.2493C144.5 14.2962 144.16 13.3744 143.54 12.65L138.198 6.40069C137.438 5.5118 136.327 5 135.157 5H46.5"
                    stroke="white"
                />
            </g>
            <defs>
                <filter
                    id="filter0_d_712_155"
                    x="2.5"
                    y="1.5"
                    width="145.5"
                    height="49.5"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="1.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_712_155"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_712_155"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
    );
};

export default ButtonOutlineIcon;
