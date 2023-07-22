import { ChangeEvent, FormEvent, useState } from "react";
import {v4 as uuid} from "uuid";
import { TodoType } from "./Todo";

function Form() {
    const [ newTodo, setNewTodo] = useState<TodoType>({
        id: uuid(),
        value: "",
        priority: 0
    });
    
    const [ listTodo, setListTodo ] = useState<TodoType[]>([]);

    const handlerChangeTodo = (event: ChangeEvent<HTMLInputElement>)=>{
        const { name, value } = event.target;
        setNewTodo({
            ...newTodo,
            [name]: value
        })
    }

    const handlerSubmitTodo = (event: FormEvent<HTMLFormElement>)=>{
        event.preventDefault();

    }

    return (
        <form action="submit" onSubmit={handlerSubmitTodo} className="container justify-content-between p-4 mt-5 main-form d-flex align-items-center">
            <h2 className="font-20 fw-bold">New Todo : </h2>
            <div className="d-flex align-items-center">
                <input type="text" placeholder="Todo Title" name="value" className="form-control mx-2" onChange={handlerChangeTodo} value={newTodo.value} required/>
                <input type="number" placeholder="Priority" name="priority" className="form-control" onChange={handlerChangeTodo} value={newTodo.priority} required/>
            </div>
            <button className="btn btn-primary">Add</button>
        </form>
    );
}

export default Form;