import {useState} from "react";
import {FilterProps} from "button/common/types/FilterProps.ts";
import {DisplayFilter} from "button/common/components/DisplayFilter.tsx";

export const Filter = () => {
    const [banknote, setBanknote] = useState<FilterProps>("All");
    const [money] = useState([
        {banknote: "Dollar", nominal: 100, number: "a1234567890"},
        {banknote: "Dollar", nominal: 50, number: "z1234567890"},
        {banknote: "Ruble", nominal: 100, number: "w1234567890"},
        {banknote: "Dollar", nominal: 100, number: "e1234567890"},
        {banknote: "Dollar", nominal: 50, number: "c1234567890"},
        {banknote: "Ruble", nominal: 100, number: "r1234567890"},
        {banknote: "Dollar", nominal: 50, number: "x1234567890"},
        {banknote: "Ruble", nominal: 50, number: "v1234567890"}
    ])
    let filteredMoney = money
    if (banknote === "Dollar") {
        filteredMoney = money.filter((money) => money.banknote === "Dollar")
    }
    if (banknote === "Ruble") {
        filteredMoney = money.filter((money) => money.banknote === "Ruble")
    }
    const onClickFilterHandler = (clickedButton: FilterProps) => {
        setBanknote(clickedButton);
    }

    return (
        <div>
            <DisplayFilter filteredMoney={filteredMoney} onClick={onClickFilterHandler}/>
        </div>
    );
};