import './Todo.css'

import React, { Component } from 'react'
import Alert from '../../components/Alert/Alert'
import List from '../../components/List/List'
import ListClass from '../../components/List/ListClass'
import AlertClass from '../../components/Alert/AlertClass'

export default class TodoClass extends Component {
    constructor() {
        super()
        this.state = {
            list: this.getLocalStorage(),
            name: '',
            isEditing: false,
            editID: null,
            alert: {
                show: false,
                msg: '',
                type: ''
            }
        }


        // this.storageChanged = this.storageChanged.bind(this);
    }

    getLocalStorage = () => {
        console.log("getlocalstorage")
        let list = localStorage.getItem('list');
        if (list) {
            return (list = JSON.parse(localStorage.getItem('list')));
        } else {
            return [];
        }
    };

    storageChanged = (e) => {
        console.log("Onstoragechanged")
        if ('list' == e.key && this.state.list != JSON.parse(e.newValue)) {
            console.log("localstoragechanged")
            localStorage.setItem('list', JSON.stringify(this.state.list))
        }
    }
    componentDidMount() {
        window.addEventListener('storage', (e) => this.storageChanged(e));
        this.storageChanged = this.storageChanged.bind(this);
    }

    componentWillUnmount() {
        window.removeEventListener('storage', this.storageChanged)
    }

    showAlert(msg, type) {
        this.setState({
            alert: {
                show: true,
                msg: msg,
                type: type
            }
        })
    }

    hideAlert() {
        clearTimeout();
        setTimeout(
            () => {
                this.setState({
                    alert: {
                        show: false,
                        msg: ''
                    }
                })
            }
            , 2500);
    }

    handleSubmit(e) {
        e.preventDefault();
        // console.log('handleSubmit Started');
        if (this.state.name === "") {
            this.showAlert('The field is still empty', 'danger');
            // this.hideAlert();
        }
        else if (this.state.name && this.state.isEditing) {
            // deal with edit
            this.showAlert('Edited Item', 'success');
            this.hideAlert();

            this.state.list.map((item) => {
                if (this.state.editID === item.id) {
                    item.title = this.state.name;
                    return item
                }
                return item
            })
            this.setState({
                name: '',
                isEditing: false
            })
        }
        else {
            //display alert
            this.showAlert('Added Item', 'success')
            this.hideAlert()

            //deal with add items
            const newItem = {
                id: new Date().getTime().toString(),
                title: this.state.name,
                status: false
            };
            this.setState({
                name: '',
                list: [...this.state.list, newItem]
            })
            localStorage.setItem('list', JSON.stringify(this.state.list))
        }

    }

    handleClear() {
        this.showAlert('Deleted All Items', 'danger');
        this.hideAlert();
        this.setState({
            list: []
        })
    }

    handleDelete = (id) => {
        // console.log('Masuk HandleDelete')
        this.showAlert('Deleted item', 'danger');
        this.hideAlert();
        this.setState({
            list: this.state.list.filter((item) => {
                if (id !== item.id) {
                    return item
                }
            })
        })

    }

    handleEdit = (id) => {
        const specificItem = this.state.list.find((item) => item.id === id);
        this.setState({
            isEditing: true,
            editID: id,
            name: specificItem.title
        })
    }

    handleCheck = (id) => {
        this.showAlert('Checked Out Item', 'danger');
        this.hideAlert();
        this.state.list.map((item) => {
            if (item.id === id) {
                item.status = true
                return item
            }
            return item
        });
    }

    render() {
        return (
            <div className="todo container w-50">
                <form action="" className="todo-form" onSubmit={(e) => this.handleSubmit(e)}>
                    <h3>Todos</h3>
                    {this.state.alert.show &&
                        <AlertClass msg={this.state.alert.msg} type={this.state.alert.type} />
                    }
                    <br />
                    <div className="form-control w-75 m-auto">
                        <input
                            type="text"
                            className="todo-input"
                            placeholder="What are you planning to do?"
                            value={this.state.name}
                            onChange={(e) => this.setState({
                                name: e.target.value
                            })}
                            size={35}
                        />
                        <button type="submit" className="submit-btn">
                            {this.state.isEditing ? 'edit' : 'submit'}
                        </button>
                    </div>
                </form>
                {this.state.list.length > 0 &&
                    <div>
                        <ListClass list={this.state.list} deleteItem={this.handleDelete} editItem={this.handleEdit} checkItem={this.handleCheck} />
                        <button className="clear-btn" onClick={() => this.handleClear()}>
                            Clear All
                        </button>
                    </div>
                }
            </div>
        )
    }
}
