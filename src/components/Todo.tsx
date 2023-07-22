export type TodoType={
    id: string,
    value: string,
    priority: number
}

type TodoProps= {
    todo: TodoType
}

function Todo(props: TodoProps) {
    const { todo } = props;

    return (  
        <tr>
            <td>{todo.value}</td>
            <td>{todo.priority}</td>
            <td>
                <button className="btn btn-warning fw-bold me-3">Edit</button>
                <button className="btn btn-danger fw-bold">Delete</button>
            </td>
        </tr>
    );
}

export default Todo;