import Todo, { TodoType } from "./Todo";

type TodoTableProps = {
    list: TodoType[],
    removeTodo: (id:string)=>void
}

function TodoTable(props: TodoTableProps) {
    const { list, removeTodo } = props;

    return (
        <table className="w-100 mt-5">
            <colgroup>
                <col />
                <col />
                <col />
            </colgroup>
            <thead>
                <tr>
                    <th>Content</th>
                    <th>Priority</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {list.map(el => {
                    return <Todo key={el.id} todo={el} removeTodo={removeTodo}/>
                })}
            </tbody>
        </table>
    );
}

export default TodoTable;