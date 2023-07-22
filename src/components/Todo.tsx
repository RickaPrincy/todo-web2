export type TodoType={
    id: string,
    value: string,
    priority: number
}

function Todo(todo: TodoType) {
    return (  
        <li>todo</li>
    );
}

export default Todo;