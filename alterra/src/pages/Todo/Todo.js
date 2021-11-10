import { useState, useEffect } from "react";
import List from "../../components/List/List";
import Alert from "../../components/Alert/Alert";
import { useSelector, useDispatch } from "react-redux";
import './Todo.css'
import { changeName, resetName } from '../../redux'
import { deleteItem, addItem, deleteAllItems, checkUncheck, editItem, editingItem } from '../../redux'

const Todo = () => {
    const dispatch = useDispatch()

    // name state
    // const [name, setName] = useState('');
    const name = useSelector(state => state.name.name);
    const setName = (newName) => {
        dispatch(changeName(newName))
    }
    const clearName = () => {
        dispatch(resetName())
    }

    //List state
    // const [list, setList] = useState(getLocalStorage());
    // const [isEditing, setIsEditing] = useState(false);
    // const [editID, seteditID] = useState(null);
    const list = useSelector(state => state.list.list)
    const isEditing = useSelector(state => state.list.isEditing)
    // const editID = useSelector(state => state.list.editID)

    const editingAnItem = (newTitle) => {
        dispatch(editingItem(newTitle))
    }

    const editAnItem = (editId) => {
        dispatch(editItem(editId))
    }

    const addAnItem = (titleItem) => {
        dispatch(addItem(titleItem))
    }

    const clearAllItems = () => {
        dispatch(deleteAllItems())
    }

    const deleteAnItem = (deleteId) => {
        dispatch(deleteItem(deleteId))
    }


    //alert state
    const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

    const showAlert = (msg, type) => {
        setAlert({
            show: true,
            msg: msg,
            type: type
        })
    }

    const hideAlert = () => {
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

            // list.map((item) => {
            //     if (editID == item.id) {
            //         item.title = name;
            //         return item
            //     }
            //     return item
            // })
            editingAnItem(name)
            clearName()
            // setIsEditing(false)
        }
        else {
            //display alert
            showAlert('Added Item', 'success')
            hideAlert()

            //deal with add items
            // const newItem = {
            //     id: new Date().getTime().toString(),
            //     title: name,
            //     checked: false
            // };
            // setList([...list, newItem]);
            addAnItem(name)
            clearName()
        }
    }

    const handleClear = (e) => {
        showAlert('Deleted All Items', 'danger');
        hideAlert();
        e.preventDefault();
        // setList([]);
        clearAllItems()
    }

    const handleDelete = (id) => {
        showAlert('Deleted item', 'danger');
        hideAlert();
        // setList(list.filter((item) => {
        //     if (id != item.id) {
        //         return item
        //     }
        // }))
        deleteAnItem(id);
    }

    const handleEdit = (id) => {
        const specificItem = list.find((item) => item.id == id);
        editAnItem(id)
        // setIsEditing(true);
        // seteditID(id);
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


