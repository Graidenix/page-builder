import React from "react";
import {mapStyleCn} from "@/helper/styles";
import {SxProp} from "@/typings";

export interface InputProps extends React.HTMLProps<'input'> {
    sx?: SxProp<typeof styles>;
}

const Input: React.FC<InputProps> = (props) => {
    const {sx, ...rest} = props;
    return (<div className={styles.wrapper(sx?.wrapper)}>
        <input type="text" className={styles.input(sx?.input)} {...rest} />
    </div>)
};

export default Input;

const styles = mapStyleCn({
    wrapper: 'rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md px-1',
    input: 'block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 outline-0 sm:text-sm sm:leading-6'
});
