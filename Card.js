import React from 'react';
import './Card.css'
//create class
class Card extends React.Component {
    render() {
        return ( 
        < div className = 'Card'>
            <h3> {this.props.title}</h3> 
            <p> {this.props.content} </p> 
            <button type = 'button'>Delete</button>
        </div>
        )
    }
}


export default Card