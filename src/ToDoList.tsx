import { MouseEventHandler } from "react";

interface ToDoListProps {
    id: number;
    text: string;
    onSelect: MouseEventHandler<HTMLLIElement>;
}

function ToDoList(props: ToDoListProps) {
    return (
        <>
            <li onClick={props.onSelect} key={props.id}>
                {props.text}
            </li>
        </>
    );
}

export default ToDoList;
