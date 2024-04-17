import React, { ButtonHTMLAttributes, FC } from "react";
import { ButtonState } from "@/constants";
import { twMerge } from "tailwind-merge";
import { ButtonOutlineIcon } from "@/components";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    state?: ButtonState;
    clamped?: boolean;
}

const Button: FC<ButtonProps> = ({
    state = ButtonState.Default,
    children,
    onClick,
    className = "",
    ...props
}) => {
    return (
        <button
            {...props}
            className={twMerge(
                `overflow-none break-word text-sm transition-colors relative flex max-w-xs items-center justify-center border-none bg-none px-4 py-3 font-medium shadow-none duration-300 ease-in-out`,
                className,
            )}
            style={{ overflowWrap: "anywhere" }}
            disabled={state === ButtonState.Disabled}
            onClick={onClick}
        >
            <ButtonOutlineIcon className=" left-0 top-0 h-[4.5rem]" />
            {children}
        </button>
    );
};

export default Button;
