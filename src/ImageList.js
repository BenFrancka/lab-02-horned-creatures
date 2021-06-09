import React, { Component } from 'react'
import ImageItem from './ImageItem';

export default class ImageList extends Component {
    render() {
        return (
            <div className= "creature-display">
                {this.props.list.map(item => 
                    <ImageItem 
                    url= {item.url}
                    title= {item.title}
                    keyword= {item.title}
                    description= {item.description}
                    horns={item.horns}
                    />
                    )}
            </div>
        )
    }
}
