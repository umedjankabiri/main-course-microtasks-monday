import {BodyProps} from "nested-components/common/types/BodyProps.ts";


export const Body = (props: BodyProps) => {
    return (
        <div>
            {props.title}
        </div>
    );
};