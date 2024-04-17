import { SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement> & {
    svg?: boolean;
    color?: string;
};
