import './List.css'

import React, { Component } from 'react'
import { FaEdit, FaTrash, FaCheck } from 'react-icons/fa'

export default class ListClass extends Component {
    render() {
        return (
            <div className="list">
                <ul className="container-fluid list-group w-50 m-auto mt-3 align-content-lg-start">
                    {
                        this.props.list.map((item) => (
                            <li className="list-group-item" key={item.id}>
                                <div className="d-inline-block">
                                    <button type="submit" className="check-btn" onClick={() => this.props.checkItem(item.id)}>
                                        <FaCheck />
                                    </button>
                                    <button type="button" className="edit-btn" onClick={() => this.props.editItem(item.id)}>
                                        <FaEdit />
                                    </button>
                                    <button type="button" className="delete-btn" onClick={() => this.props.deleteItem(item.id)}>
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
            </div>
        )
    }
}
