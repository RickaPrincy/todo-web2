import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuid } from "uuid";
import { TodoType } from "./Todo";

type FormProps = {
    onSubmit: (todo: TodoType) => void,
    submitText: string,
    labelText: string,
    id?: string,
    value?: string,
    priority?: number
}

function Form(props: FormProps) {
    const { onSubmit, submitText, labelText} = props;
    
    const [newTodo, setNewTodo] = useState<TodoType>({
        id: props.id|| "",
        value: props.value|| "",
        priority: props.priority|| 0
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
            <h2 className="font-20 fw-bold">{labelText} : </h2>
            <div className="d-flex align-items-center">
                <input type="text" placeholder="Todo Title" name="value" className="form-control mx-2" onChange={handlerChange} value={newTodo.value} required />
                <input type="number" placeholder="Priority" name="priority" className="form-control" onChange={handlerChange} value={newTodo.priority} required />
            </div>
            <button className="btn btn-primary fw-bold">{submitText}</button>
        </form>
    );
}

export default Form;