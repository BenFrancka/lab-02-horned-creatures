import React, { Component } from 'react'

export default class ImageItem extends Component {
    render() {
        return (
            <div className= "creature-box">
                <p>
                    <img src={this.props.url} width= "200" height= "200" alt= "horned animal"/>
                </p>
                <p>
                    {this.props.title}
                </p>
                <p>
                    {this.props.description}
                </p>
                <p>
                    Number of Horns: {this.props.horns}
                </p>
            </div>
        )
    }
}
                    /*url= {item.url}
                    title= {item.title}
                    keyword= {item.title}
                    description= {item.description}
                    horns={item.horns}*/