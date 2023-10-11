export type Prettify<T> = {
    [Prop in keyof T]: T[Prop]
} & {};

export type SxProp<T> = Partial<{
    [S in keyof T]: string | string[]
}>


