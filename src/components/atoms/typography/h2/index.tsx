import { FC, HTMLAttributes, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export type H2Props = PropsWithChildren &
    HTMLAttributes<HTMLHeadingElement> & {
        selectable?: boolean;
        className?: string | undefined;
    };

const H2: FC<H2Props> = ({
    selectable = false,
    className,
    children,
    ...props
}) => {
    return (
        <h1
            className={twMerge(
                "select-none font-display text-7 !text-primary",
                selectable && "select-text",
                className,
            )}
            {...props}
        >
            {children}
        </h1>
    );
};

export default H2;
