import './List.css'
import { FaEdit, FaTrash } from 'react-icons/fa'

const List = (props) => {
    const list = props.list;
    // const handleDelete = props.handleDelete;


    return (
        <div className="list">
            <ul className="list-group w-25 m-auto">
                {
                    list.map((item) => (
                        <li className="list-group-item" key={item.id}>
                            <p className="title">{item.title}</p>
                            <div className="btn-container">
                                <button type="button" className="edit-btn" onClick={() => props.editItem(item.id)}>
                                    <FaEdit />
                                </button>
                                <button type="button" className="delete-btn" onClick={() => props.deleteItem(item.id)}>
                                    <FaTrash />
                                </button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div >
        // <h2>The todo list</h2>
        // <div>List</div>
    );
}

export default List;