import { FC, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type P2Props = PropsWithChildren & {
    selectable?: boolean;
    className?: string;
};

const P2: FC<P2Props> = ({
    selectable = false,
    className,
    children,
    ...props
}) => (
    <p
        className={twMerge(
            "select-none font-sans !text-5 !leading-7 font-medium text-primary m-0 p-0",
            selectable && "select-text",
            className,
        )}
        {...props}
    >
        {children}
    </p>
);
export default P2;
