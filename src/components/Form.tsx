import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuid } from "uuid";
import { TodoType } from "./Todo";

type FormProps = {
    onSubmit: (todo: TodoType) => void,
}

function Form(props: FormProps) {
    const { onSubmit } = props;

    const [newTodo, setNewTodo] = useState<TodoType>({
        id: uuid(),
        value: "",
        priority: 0
    });

    const handlerChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setNewTodo({
            ...newTodo,
            [name]: value
        })
    }

    const handlerSubmit= (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(newTodo);
        setNewTodo({
            id: uuid(),
            value: "",
            priority: 0
        });
    }

    return (
        <form action="submit" onSubmit={handlerSubmit} className="justify-content-between d-flex align-items-center">
            <h2 className="font-20 fw-bold">New Todo : </h2>
            <div className="d-flex align-items-center">
                <input type="text" placeholder="Todo Title" name="value" className="form-control mx-2" onChange={handlerChange} value={newTodo.value} required />
                <input type="number" placeholder="Priority" name="priority" className="form-control" onChange={handlerChange} value={newTodo.priority} required />
            </div>
            <button className="btn btn-primary fw-bold">Add</button>
        </form>
    );
}

export default Form;