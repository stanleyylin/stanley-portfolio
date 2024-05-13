import { IconProps } from "@/types";
import { FC } from "react";

const StarIcon: FC<IconProps> = ({ ...props }) => {
    return (
        <svg
            viewBox="0 0 29 31"
            preserveAspectRatio="xMaxYMax meet"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g filter="url(#filter0_d_705_25)">
                <path
                    d="M6.81812 15.5364L6 15.8261C9.42615 16.6347 12.1725 19.1893 13.2266 22.5481L13.3684 23L13.4859 22.6257C14.5535 19.2241 17.3512 16.6481 20.8292 15.8646L21 15.8261L20.0276 15.4975C17.0006 14.4745 14.6447 12.0667 13.688 9.01821L13.3684 8L13.0219 9.10418C12.0803 12.1044 9.78234 14.487 6.81812 15.5364Z"
                    stroke="white"
                    strokeWidth="1.5"
                    shapeRendering="crispEdges"
                />
            </g>
            <defs>
                <filter
                    id="filter0_d_705_25"
                    x="0.749756"
                    y="0.495316"
                    width="28.0208"
                    height="30.0094"
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
                    <feGaussianBlur stdDeviation="2.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_705_25"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_705_25"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
    );
};

export default StarIcon;
