import clsx, {Argument} from 'classnames';
import {twMerge} from 'tailwind-merge';
import {isTruphy, objKeys} from "@/type-helper";

/**
 * Merge multiple classNames using tailwind
 */
export function cn(...inputs: (Argument | undefined)[]): string {
    return twMerge(clsx(inputs.filter(isTruphy)));
}

/**
 * Merge the classes and makes callback for merging with other classes afterthat
 * Best to be used inside extendable components
 */
export function mapStyleCn<T extends Record<string, string | string[]>>(record: T): Record<keyof T, typeof cn> {
    return objKeys(record).reduce((acc, prop) => {
        acc[prop] = (...inputs: (Argument | undefined)[]) => cn(record[prop], inputs);
        return acc;
    }, {} as Record<keyof T, typeof cn>);
}

/**
 * Merge the classes and makes the one string line
 */
export function mapStyles<T extends Record<string, string | string[]>>(record: T): Record<keyof T, string> {
    return objKeys(record).reduce((acc, prop) => {
        acc[prop] = cn(record[prop]);
        return acc;
    }, {} as Record<keyof T, string>);
}
