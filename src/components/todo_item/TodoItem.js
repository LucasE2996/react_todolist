import React from 'react';
import './TodoItem.css';

// function based component
/* function TodoItem(props) {
    const text = props.data.text;
    let checked = props.data.checked;

    return (
        <div className="todo-item-box">
            <input type="checkbox" checked={checked} onChange={changeCheck()}/>
            <p style={{textDecoration: checked ? 'none' : 'line-through'}}>{text}</p>
        </div>
    );

    function changeCheck() {
        checked = !checked;
    }
} */

// class based component
class TodoItem extends React.Component {

    render() {
        const text = this.props.data.text;

        return (
            <div className="todo-item-box">
                <input type="checkbox" defaultChecked={this.props.data.checked} onChange={this.props.eventHandler}/>
                <p style={{textDecoration: this.props.data.checked ? 'line-through' : 'none'}}>{text}</p>
            </div>
        )
    }
}

export default TodoItem;