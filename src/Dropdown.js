import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {
        return (
            <label>
                
                <select onChange={this.props.handleSelection}>

                    <option value="">All</option>

                    {this.props.options.map(optionString =>
                        <option value={optionString}>
                            {optionString}
                            </option>
                        )}
                        
                </select>
            </label>
        )
    }
}
