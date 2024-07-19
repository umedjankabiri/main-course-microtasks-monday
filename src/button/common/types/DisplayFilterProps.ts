import {BanknoteProps} from "button/common/types/BanknoteProps.ts";
import {FilterProps} from "button/common/types/FilterProps.ts";

export type DisplayFilterProps = {
    filteredMoney: BanknoteProps[]
    onClick?: (banknote: FilterProps) => void
}