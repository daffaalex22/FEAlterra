import './List.css'
import { FaEdit, FaTrash } from 'react-icons/fa'

const List = (props) => {
    const list = props.list;
    // const handleDelete = props.handleDelete;


    return (
        <div className="list">
            <ul className="container-fluid list-group w-50 m-auto mt-3">
                {
                    list.map((item) => (
                        <li className="list-group-item" key={item.id}>
                            <div className="d-inline-block justify-content-start">
                                <button type="button" className="edit-btn" onClick={() => props.editItem(item.id)}>
                                    <FaEdit />
                                </button>
                                <button type="button" className="delete-btn" onClick={() => props.deleteItem(item.id)}>
                                    <FaTrash />
                                </button>
                            </div>
                            <span className="title">
                                {item.title}
                            </span>
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