import { FC } from "react";
import { twMerge } from "tailwind-merge";

type MenuIconProps = {
    open: boolean;
    onClick: () => void;
};
const MenuIcon: FC<MenuIconProps> = ({ open, onClick }) => {
    return (
        <div
            className="flex flex-col w-10 mt-1 cursor-pointer"
            onClick={onClick}
        >
            <div
                className={twMerge(
                    "bg-foreground w-7 h-1 rounded-2 mb-1.5 drop-shadow-text-light transition-transform duration-300",
                    open && "translate-x-2",
                )}
            />
            <div className="bg-foreground w-9 h-1 rounded-2 mb-1.5" />
            <div
                className={twMerge(
                    "bg-foreground w-7 h-1 rounded-2 transition-transform duration-300",
                    !open && "translate-x-2",
                )}
            />
        </div>
    );
};

export default MenuIcon;
