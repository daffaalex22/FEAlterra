import './Alert.css'

import React, { Component } from 'react'

export default class AlertClass extends Component {
    render() {
        return (
            <div className={`box alert alert-${this.props.type}`}>
                <span>{this.props.msg}</span>
            </div>
        )
    }
}
