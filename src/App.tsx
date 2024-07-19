import React from "react";
import './App.css'
import {StudentProps} from "nested-components/common/types/StudentProps.ts";
import {Header} from "nested-components/common/components/Header.tsx";
import {Body} from "nested-components/common/components/Body.tsx";
import {Footer} from "nested-components/common/components/Footer.tsx";
import {MapComponent} from "nested-components/common/components/MapComponent/MapComponent.tsx";
import {Button} from "button/common/components/Button.tsx";
import {HookUseState} from "button/common/components/HookUseState.tsx";
import {Filter} from "button/common/components/Filter.tsx";

function App() {
    /* nested-component */
    const students: StudentProps[] = [
        {id: 1, name: "James", age: 8},
        {id: 2, name: "Robert", age: 18},
        {id: 3, name: "John", age: 28},
        {id: 4, name: "Michael", age: 38},
        {id: 5, name: "William", age: 48},
        {id: 6, name: "David", age: 58},
        {id: 7, name: "Richard", age: 68},
        {id: 8, name: "Joseph", age: 78},
        {id: 9, name: "Thomas", age: 88},
        {id: 10, name: "Charles", age: 98},
        {id: 11, name: "Christopher", age: 100},
    ]

    /* button component */
    const myFirstSubscriber = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log("Hello I am Vasiliy")
    }
    const mySecondSubscriber = () => {
        console.log("Hello I am Ivan")
    }
    const onClickHandler = (name: string) => {
        console.log(name)
    }
    const foo1 = () => {
        console.log("100200")
    }
    const foo2 = (num: number) => {
        console.log(num)
    }
    const ButtonFoo1 = (subscriber: string, age: number, address: string) => {
        console.log(subscriber, age, address)
    }
    const ButtonFoo2 = (subscriber: string) => {
        console.log(subscriber)
    }
    const ButtonFoo3 = () => {
        console.log("I am stupid button")
    }

    return (
        <>
            {/* nested-component */}
            <div style={{fontSize: "24px"}}>Nested component</div><br/><br/>
            <Header title={"Header from props"}/>
            <Body title={"Body from props"}/>
            <Footer title={"Footer from props"}/>
            <MapComponent students={students}/>
            {/* button component */}
            <div>
                <div style={{fontSize: "24px"}}>Button component</div>
                <br/><br/>
                <button onClick={(event) => {
                    console.log("Hello")
                }
                }>My YouTube Channel 1
                </button>
                <button onClick={myFirstSubscriber}>My YouTube Channel 2</button>
                <button onClick={mySecondSubscriber}>My YouTube Channel 3</button>
                <button onClick={(event) => onClickHandler("Vasiliy")}>My YouTube Channel 4</button>
                <button onClick={(event) => onClickHandler("Ivan")}>My YouTube Channel 5</button>
            </div>
            <div>
                <button onClick={foo1}>1</button>
                <button onClick={(event) => foo2(100200)}>2</button>
            </div>
            <div>
                <Button name={"My YouTube Channel 1"}
                        onClick={() => ButtonFoo1("I am Vasiliy", 37, "I am living in Istanbul")}/>
                <Button name={"My YouTube Channel 2"} onClick={() => ButtonFoo2("I am Ivan")}/>
                <Button name={"Stupid Button"} onClick={ButtonFoo3}/>
            </div>
            <div>
                <HookUseState/>
            </div>
            <div style={{marginLeft: '300px'}}>
                <Filter/>
            </div>
        </>
    )
}

export default App