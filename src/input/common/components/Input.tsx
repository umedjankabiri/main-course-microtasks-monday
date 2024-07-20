import {InputProps} from "input/common/types/InputProps.ts";
import {ChangeEvent} from "react";

export const Input = (props: InputProps) => {
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.onChange && props.onChange(event.currentTarget.value);
    }

    return (
        <input type="text" value={props.value} onChange={onChangeHandler}/>
    );
};