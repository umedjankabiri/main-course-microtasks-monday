import {TaskProps} from "associative-array/common/types/TaskProps.ts";
import {FilterValuesType} from "associative-array/common/types/FilterValueProps.ts";

export type TodolistProps = {
    todolistID: string
    title: string
    tasks: Array<TaskProps>
    removeTask: (todolistID: string, taskID: string) => void
    changeFilter: (todolistID: string, value: FilterValuesType) => void
    addTask: (todolistID: string, title: string) => void
    changeTaskStatus: (todolistID: string, taskId: string, isDone: boolean) => void
    filter: FilterValuesType
}