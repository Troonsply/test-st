import {v4} from 'uuid';

export function createTodo(title) {
    if (!title) throw new Error('Failed to create todo not Title');

    return {
        id: v4(),
        title,
        completed: false
    }
}

export async function createTodoOnServer(title) {
    const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos',
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(createTodo(title))
        }
    );
    if (!response.ok) throw new Error('Failed to create todo');

    return await response.json();
}