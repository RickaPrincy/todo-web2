import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/main.css";
import TodoManager from "./components/TodoManager";

function App() {
    return ( 
        <>
            <Header />
            <TodoManager/>
        </>
    );
}

export default App;