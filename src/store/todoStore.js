// ACTIONS

function addTodo(todo) {
    return {
        type: 'ADD_TODO',
        payload: todo,
    }
}

// REDUCERS

function todoStore(state = { todoList: [] }, action) {
    switch(action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todoList: state.todoList.concat({
                    text: action.payload,
                    timestamp: Date.now(),
                })
            }
    }
}