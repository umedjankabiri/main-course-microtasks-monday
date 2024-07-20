import {Button} from "button/common/components/Button.tsx";
import {FullInputProps} from "input/common/types/FullInputProps.ts";
import {ChangeEvent, useState} from "react";

export const FullInput = (props: FullInputProps) => {
    const [value, setValue] = useState("");
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
    }
    const onClickButtonHandler = () => {
        props.onChange && props.onChange(value)
        setValue('')
    }

    return (
        <>
            <input type="text" value={value} onChange={onChangeInputHandler}/>
            <Button name="+" onClick={onClickButtonHandler}/>
        </>
    );
};