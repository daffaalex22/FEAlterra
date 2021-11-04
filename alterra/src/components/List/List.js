import './List.css'
import { FaEdit, FaTrash, FaCheck } from 'react-icons/fa'

const List = ({ list, deleteItem, editItem, checkItem }) => {

    return (
        <div className="list">
            <ul className="container-fluid list-group w-50 m-auto mt-3 align-content-lg-start">
                {
                    list.map((item) => (
                        <li className="list-group-item" key={item.id}>
                            <div className="d-inline-block">
                                <button type="submit" className="check-btn" onClick={() => checkItem(item.id)}>
                                    <FaCheck />
                                </button>
                                <button type="button" className="edit-btn" onClick={() => editItem(item.id)}>
                                    <FaEdit />
                                </button>
                                <button type="button" className="delete-btn" onClick={() => deleteItem(item.id)}>
                                    <FaTrash />
                                </button>
                            </div>
                            {
                                item.status === true ?
                                    <p className="done">
                                        {item.title}
                                    </p> :
                                    <p className="undone">
                                        {item.title}
                                    </p>
                            }
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