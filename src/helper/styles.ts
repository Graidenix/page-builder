import clsx, {Argument} from 'classnames';
import {twMerge} from 'tailwind-merge';
import {isTruphy} from "@/type-helper";

export function cn(...inputs: (Argument | undefined)[]): string {
    return twMerge(clsx(inputs.filter(isTruphy)));
}

export function mapStyleCn<T extends Record<string, string | string[]> = string>(record: T): Record<keyof T, typeof cn> {
    return Object.keys(record).reduce((acc, prop) => {
        acc[prop] = (...inputs) => cn(record[prop], inputs);
        return acc;
    }, {});
}

export function mapStyles<T extends Record<string, string | string[]> = string>(record: T): Record<keyof T, string> {
    return Object.keys(record).reduce((acc, prop) => {
        acc[prop] = cn(record[prop]);
        return acc;
    }, {});
}
