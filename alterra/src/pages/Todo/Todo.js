import { useState } from "react";
import List from "../../components/List/List";
import Input from "../../components/Input/Input";
import Alert from "../../components/Alert/Alert";
import './Todo.css'

const Todo = () => {
    const [list, setList] = useState([
        // { id: 1, title: "Membuat Komponen", completed: true, },
        // { id: 2, title: "Unit Testing", completed: false, },
        // { id: 3, title: "Setup Development Environment", completed: true, },
        // { id: 4, title: "Deploy ke server", completed: false, },
    ]);
    const [name, setName] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [editID, seteditID] = useState(null);
    const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) {
            //display alert
            setAlert({
                show: true,
                msg: 'The field is still empty',
                type: 'danger'
            })

            clearTimeout();
            setTimeout(
                function () {
                    setAlert({
                        show: false,
                        msg: ''
                    })
                }
                , 2500);
        }
        else if (name && isEditing) {
            // deal with edit
        }
        else {
            //display alert
            setAlert({
                show: true,
                msg: 'Added Item',
                type: 'success'
            })
            setTimeout(
                function () {
                    setAlert({
                        show: false,
                        msg: ''
                    })
                }
                , 2500);

            //deal with add items
            const newItem = {
                id: new Date().getTime().toString(),
                title: name
            };
            setList([...list, newItem]);
            setName('')
        }
    }

    const handleClear = (e) => {
        e.preventDefault();
        setList([]);
    }

    const handleDelete = (id) => {
        setAlert({
            show: true,
            msg: 'Deleted Item',
            type: 'Danger'
        })
        setTimeout(
            function () {
                setAlert({
                    show: false,
                    msg: ''
                })
            }
            , 2500);
        setList(list.filter((item) => {
            if (id != item.id) {
                return item
            }
        }))
    }

    return (
        <div className="todo">
            <form action="" className="todo-form" onSubmit={handleSubmit}>
                <h3>Todo List MF!</h3>
                {alert.show &&
                    <Alert msg={alert.msg} />
                }
                <div className="form-control">
                    <input
                        type="text"
                        className="todo-input"
                        placeholder="What are you planning to do?"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        size={35}
                    />
                    <button type="submit" className="submit-btn">
                        {isEditing ? 'edit' : 'submit'}
                    </button>
                </div>
            </form>

            {list.length > 0 &&
                <div>
                    <List list={list} deleteItem={handleDelete} />
                    <button className="clear-btn" onClick={handleClear}>
                        Clear All
                    </button>
                </div>
            }

            {/* <div className="todo">
                <h2>To Do App</h2>
                <br />
                <Input />
                <List list={list} />
            </div> */}
        </div>

    )
}

export default Todo;


