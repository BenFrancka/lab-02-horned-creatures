import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {
        return (
            <label>
                
                <select onChange={this.props.handleChange}>

                    <option value="">All</option>
                </select>
            </label>
        )
    }
}
