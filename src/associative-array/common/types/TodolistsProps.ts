import {FilterValuesType} from "associative-array/common/types/FilterValueProps.ts";

export type TodolistsProps = {
    TodolistID: string
    title: string
    filter: FilterValuesType
}