import React, { FC, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type P1Props = PropsWithChildren & {
    selectable?: boolean;
    className?: string;
};

const P1: FC<P1Props> = ({
    selectable = false,
    className,
    children,
    ...props
}) => (
    <p
        className={twMerge(
            "select-none font-sans text-4 font-medium text-primary",
            selectable && "select-text",
            className,
        )}
        {...props}
    >
        {children}
    </p>
);
export default P1;
