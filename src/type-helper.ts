export const isTruphy = (item: any): item is NonNullable<any> => !!item;


export const objKeys = <T extends object>(obj: T) => Object.keys(obj) as (keyof T)[];