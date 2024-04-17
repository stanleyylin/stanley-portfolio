import React, { FC, HTMLAttributes, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export type H1Props = PropsWithChildren &
    HTMLAttributes<HTMLHeadingElement> & {
        selectable?: boolean;
        className?: string | undefined;
    };

const H1: FC<H1Props> = ({
    selectable = false,
    className,
    children,
    ...props
}) => {
    return (
        <h1
            className={twMerge(
                "select-none font-display text-16 !text-primary",
                selectable && "select-text",
                className,
            )}
            {...props}
        >
            {children}
        </h1>
    );
};

export default H1;
