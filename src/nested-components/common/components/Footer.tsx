import {FooterProps} from "nested-components/common/types/FooterProps.ts";


export const Footer = (props: FooterProps) => {
    return (
        <div>
            {props.title}
        </div>
    );
};