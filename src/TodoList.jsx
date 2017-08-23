import React from 'react'

export default function TodoList({ todos }) {
    return (
        <ul>
            {
                todos.map(todo => (
                    <li key={ todo.timestamp }>
                        { todo.text }
                    </li>
                ))
            }
        </ul>
    )
} 