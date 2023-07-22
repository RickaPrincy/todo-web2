import { useState } from "react";
import Form from "./Form";
import { TodoType } from "./Todo";
import TodoTable from "./TodoTable";
import Popup from "./Popup";

type PopupType = {
    popupStatus: boolean,
    id: string
}

function TodoManager() {
    const [listTodo, setListTodo] = useState<TodoType[]>([]);
    const [popup, setPopup] = useState<PopupType>({ popupStatus: false, id: "" });

    const addTodo = (todo: TodoType) => {
        setListTodo([...listTodo, todo]);
    }

    const removeTodo = (id: string) => {
        setListTodo([...listTodo].filter(el => el.id !== id));
    }

    const updateTodo = (updateTodo: TodoType) => {
        setListTodo([...listTodo].map(el => el.id !== popup.id ? el : updateTodo));
        setPopup({ popupStatus:false, id:"" });
    }

    const changePopup = (popupStatus: boolean, id: string) => {
        setPopup({ popupStatus: popupStatus, id: id });
    }

    return (
        <div className="box-modif mt-5 p-4 container mx-auto">
            <Form onSubmit={addTodo} submitText="Add" labelText="New Todo"/>
            <hr />
            <TodoTable list={listTodo} removeTodo={removeTodo} changePopup={changePopup} />
            {popup.popupStatus && <Popup onSubmit={updateTodo} el={listTodo.find(el => el.id === popup.id)!} />}
        </div>
    );
}

export default TodoManager;