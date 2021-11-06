import { useState, useEffect } from "react";
import List from "../../components/List/List";
import Alert from "../../components/Alert/Alert";
import './Todo.css'

const getLocalStorage = () => {
    let list = localStorage.getItem('list');
    if (list) {
        return (list = JSON.parse(localStorage.getItem('list')));
    } else {
        return [];
    }
};

const Todo = () => {
    const [list, setList] = useState(getLocalStorage());
    const [name, setName] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [editID, seteditID] = useState(null);
    const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

    const showAlert = (msg, type) => {
        setAlert({
            show: true,
            msg: msg,
            type: type
        })
    }

    const hideAlert = () => {
        clearTimeout();
        setTimeout(
            () => {
                setAlert({
                    show: false,
                    msg: '',
                    type: ''
                })
            }
            , 2500);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) {
            //display alert
            showAlert('The field is still empty', 'danger')
            hideAlert()
        }
        else if (name && isEditing) {
            // deal with edit
            showAlert('Edited Item', 'success')
            hideAlert()

            list.map((item) => {
                if (editID == item.id) {
                    item.title = name;
                    return item
                }
                return item
            })
            setName('')
            setIsEditing(false)
        }
        else {
            //display alert
            showAlert('Added Item', 'success')
            hideAlert()

            //deal with add items
            const newItem = {
                id: new Date().getTime().toString(),
                title: name,
                checked: false
            };
            setList([...list, newItem]);
            setName('')
        }
    }

    const handleClear = (e) => {
        showAlert('Deleted All Items', 'danger');
        hideAlert();
        e.preventDefault();
        setList([]);
    }

    const handleDelete = (id) => {
        showAlert('Deleted item', 'danger');
        hideAlert();
        setList(list.filter((item) => {
            if (id != item.id) {
                return item
            }
        }))
    }

    const handleEdit = (id) => {
        const specificItem = list.find((item) => item.id == id);
        setIsEditing(true);
        seteditID(id);
        setName(specificItem.title);
    }

    const handleCheck = (id) => {
        list.map((item) => {
            if (item.id == id) {
                if (item.checked) {
                    item.checked = false
                    showAlert('Unchecked Item', 'success');
                    hideAlert();
                }
                else {
                    item.checked = true
                    showAlert('Checked Out Item', 'danger');
                    hideAlert();
                }
                return item
            }
            return item
        });
    }

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list));
    }, [list]);

    return (
        <div className="todo container w-50">
            <form action="" className="todo-form" onSubmit={handleSubmit}>
                <h3>Todos</h3>
                {alert.show &&
                    <Alert msg={alert.msg} type={alert.type} />
                }
                <br />
                <div className="form-control w-75 m-auto">
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
                    <List list={list} deleteItem={handleDelete} editItem={handleEdit} checkItem={handleCheck} />
                    <button className="clear-btn" onClick={handleClear}>
                        Clear All
                    </button>
                </div>
            }

        </div>
    )
}

export default Todo;


