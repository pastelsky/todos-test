import React from 'react'

export default class TodoInput extends React.Component {
    state = {
        currentTodo: '',
    }

    handleChange = (e) => {
        this.setState({ currentTodo: e.target.value })
    }

    handleSubmit = () => {
        const { onAddTodo } = this.props
        onAddTodo(this.state.currentTodo)
    }
    
    render() {
        return (
        <div>
            <input type="text" onChange={ this.handleChange }/>
            <button onClick={ this.handleSubmit }>
                Add todo
            </button>
        </div>
        )
    }
}