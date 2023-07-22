import { useState } from "react";
import Form from "./Form";
import { TodoType } from "./Todo";
import TodoTable from "./TodoTable";

function TodoManager() {
    const [ listTodo, setListTodo ] = useState<TodoType[]>([]);

    const addTodo = (todo: TodoType)=>{
        setListTodo([...listTodo, todo]);
    }

    const removeTodo =  (id: string)=>{
        setListTodo([...listTodo].filter(el=>el.id !== id));
    }

    return (
        <div className="box-modif mt-5 p-4 container mx-auto">
            <Form onSubmit={addTodo}/>
            <hr />
            <TodoTable list={listTodo} removeTodo={removeTodo}/>
        </div> 
    );
}

export default TodoManager;