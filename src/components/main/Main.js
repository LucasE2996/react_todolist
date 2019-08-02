import React from 'react';
import './Main.css';
import TodoItem from '../todo_item/TodoItem';
import todoList from '../../data';

class Main extends React.Component {

    constructor() {
        super();
        this.state = {
            todos: todoList,
        }
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    render() {
        const todoComponents = this.state.todos.map((todo) => <TodoItem key={todo.id} data={todo} eventHandler={() => this.handleOnChange(todo.id)}/>)

        return (
            <main>
                {todoComponents}
            </main>
        );
    }

    handleOnChange(id) {
        this.setState((prevState) => {
            const updatedTodos = prevState.todos.map((todo) => {
                if (todo.id === id) {
                    todo.checked = !todo.checked;
                };
                return todo;
            });

            return {
                todos: updatedTodos,
            };
        });
    }
}

export default Main;