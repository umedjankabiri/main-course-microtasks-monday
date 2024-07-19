import {HeaderProps} from "nested-components/common/types/HeaderProps.ts";


export const Header = (props: HeaderProps) => {
    return (
        <div>
            {props.title}
        </div>
    );
};