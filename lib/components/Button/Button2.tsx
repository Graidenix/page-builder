import React from "react";
import clsx, {Argument} from 'classnames';
import {twMerge} from 'tailwind-merge';

const cn = (...inputs: (Argument)[]): string => {
    return twMerge(clsx(inputs));
}

export type AsButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" }
export type AsAnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a" }
export type ButtonProps = AsButtonProps | AsAnchorProps

const isAnchor = (props: ButtonProps): props is AsAnchorProps => props.as === 'a';

const defaultClassName = "group inline-flex items-center justify-center rounded py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-main-9 text-white hover:text-slate-100 hover:bg-main-10 active:bg-main-11 active:text-blue-100 focus-visible:outline-main-10";
const Button: React.FC<ButtonProps> = (props) => {
    if (isAnchor(props)) {
        return (<a {...props} className={cn(defaultClassName, props.className)}/>)
    }
    return (<button {...props} className={cn(defaultClassName, props.className)}/>)
}

export default Button;
