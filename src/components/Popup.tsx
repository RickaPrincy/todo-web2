import { TodoType } from "./Todo";
import Form from "./Form";

type PopupProps ={
    onSubmit: (updateTodo: TodoType)=>void,
    el: TodoType
}

function Popup(props: PopupProps) {
    const { el, onSubmit} = props;

    return (  
        <div className="popup">
            <div className="p-4 box-modif container">
                <Form onSubmit={onSubmit} labelText="Update Todo" submitText="Save" {...el}/>
            </div>
        </div>
    );
}

export default Popup;