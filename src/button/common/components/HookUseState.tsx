import {useState} from "react";
import {Button} from "button/common/components/Button.tsx";

export const HookUseState = () => {
    let [a, setA] = useState(1)
    const onClickButton = () => {
        setA(++a)
        console.log(a)
    }
    const onClickZero = () => {
        setA(0)
    }

    return (
        <div>
            <h1>{a}</h1>
            <Button name={"Click me"} onClick={onClickButton}/>
            <Button name={"0"} onClick={onClickZero}/>
        </div>
    );
};