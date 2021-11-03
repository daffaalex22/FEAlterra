import { useState } from "react";
import List from "../../components/List/List";
import './Todo.css'

const Todo = () => {
    const [list, setList] = useState([
        { id: 1, title: "Membuat Komponen", completed: true, },
        { id: 2, title: "Unit Testing", completed: false, },
        { id: 3, title: "Setup Development Environment", completed: true, },
        { id: 4, title: "Deploy ke server", completed: false, },
    ]);

    return (
        <div className="todo">
            <h2>To Do App</h2>
            <br />
            <List list={list} />
        </div>
    )
}

export default Todo;


