import { FC, PropsWithChildren } from "react";
import React from "react";
import { twMerge } from "tailwind-merge";

type P1Props = PropsWithChildren & {
    selectable?: boolean;
    className?: string;
    onClick?: (
        event?: React.MouseEvent<HTMLParagraphElement, MouseEvent>,
    ) => void;
};

const P1: FC<P1Props> = ({
    selectable = false,
    className,
    children,
    onClick,
    ...props
}) => (
    <p
        className={twMerge(
            "select-none font-sans text-4 font-medium text-primary",
            selectable && "select-text",
            className,
        )}
        onClick={onClick}
        {...props}
    >
        {children}
    </p>
);
export default P1;
