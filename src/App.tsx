import React, {useState} from "react";
import './App.css'
import {StudentProps} from "nested-components/common/types/StudentProps.ts";
import {Header} from "nested-components/common/components/Header.tsx";
import {Body} from "nested-components/common/components/Body.tsx";
import {Footer} from "nested-components/common/components/Footer.tsx";
import {MapComponent} from "nested-components/common/components/MapComponent/MapComponent.tsx";
import {Button} from "button/common/components/Button.tsx";
import {HookUseState} from "button/common/components/HookUseState.tsx";
import {Filter} from "button/common/components/Filter.tsx";
import {FullInput} from "input/common/components/FullInput.tsx";
import {Input} from "input/common/components/Input.tsx";
import {v1} from "uuid";
import {FilterValuesType} from "associative-array/common/types/FilterValueProps.ts";
import {TodolistsProps} from "associative-array/common/types/TodolistsProps.ts";
import {Todolist} from "associative-array/common/components/Todolists.tsx";

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

    /* FullInput component */
    const [message, setMessage] = useState([
        {message: "Hello I am Ivan"},
        {message: "Hello I am Vasiliy"},
        {message: "Hello I am John"}
    ])
    const addMessage = (value: string) => {
        const newMessage = {message: value}
        setMessage([newMessage, ...message])
    }
    const messages = message.map((item, index) => {
        return (
            <li key={index}>
                <span>
                    {item.message}
                </span>
            </li>
        )
    })

    /* Input component */
    const [value, setValue] = useState("");
    const onClickButtonHandler = () => {
        addMessage(value)
        setValue('')
    }

    /* Associative array */
    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState<TodolistsProps[]>([
        {TodolistID: todolistID1, title: 'What to learn', filter: 'all'},
        {TodolistID: todolistID2, title: 'What to buy', filter: 'all'},
    ])
    let [tasks, setTasks] = useState({
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: "Books", isDone: true},
            {id: v1(), title: "Macbook pro 16 M3 Max", isDone: true},
            {id: v1(), title: "iPhone Pro Max 15", isDone: false},
            {id: v1(), title: "Apple watch", isDone: false},
            {id: v1(), title: "Airpods", isDone: false},
        ]
    });

    function removeTask(todolistID: string, taskID: string) {
        setTasks({...tasks, [todolistID]: tasks[todolistID].filter(task => task.id !== taskID)});
    }
    function addTask(todolistID: string, title: string) {
        const newTask = {id: v1(), title: title, isDone: false};
        setTasks({...tasks, [todolistID]: [newTask, ...tasks[todolistID]]});
    }
    function changeStatus(todolistID: string, taskID: string, isDone: boolean) {
        setTasks({...tasks, [todolistID]: tasks[todolistID].map(task =>
                task.id === taskID
                    ? {...task, isDone: isDone}
                    : task)});
    }
    function changeFilter(todolistID: string, filterValue: FilterValuesType) {
        setTodolists(todolists.map(todolist =>
            todolist.TodolistID === todolistID
                ? {...todolist, filter: filterValue}
                : todolist));
    }

    const mappedTodolists = todolists.map(todolist => {
        let tasksForTodolist = tasks[todolist.TodolistID];
        todolist.filter === "active" && (tasksForTodolist = tasks[todolist.TodolistID]
            .filter(task => !task.isDone))
        todolist.filter === "completed" && (tasksForTodolist = tasks[todolist.TodolistID]
            .filter(task => task.isDone))

        return (
            <Todolist
                key={todolist.TodolistID}
                todolistID={todolist.TodolistID}
                title={todolist.title}
                tasks={tasksForTodolist}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask}
                changeTaskStatus={changeStatus}
                filter={todolist.filter}
            />
        )
    })

    return (
        <>
            {/* nested-component */}
            <div style={{fontSize: "24px"}}>Nested component</div>
            <br/><br/>
            <Header title={"Header from props"}/>
            <Body title={"Body from props"}/>
            <Footer title={"Footer from props"}/>
            <MapComponent students={students}/>

            {/* button component */}
            <div>Button component</div>
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

            {/* FullInput component */}
            <div>
                <div>FullInput component</div>
                <FullInput onChange={addMessage}/>
            </div>

            {/* Input component */}
            <div>
                <div>Input component</div>
                <Input value={value} onChange={(event: string) => setValue(event)}/>
                <Button name="+" onClick={onClickButtonHandler}/>
                <ul>
                    {messages}
                </ul>
            </div>
            {/* Associative array */}
            <div className={'mappedTodolist'}>
                {mappedTodolists}
            </div>
        </>
    )
}

export default App