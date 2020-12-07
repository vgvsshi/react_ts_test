import React from 'react'
import { ITodo } from '../interfaces'

type TodoListProps = {
	todos: ITodo[],
	onToggle(id: number): void
	onRemove(id: number): void
}

export const TodoList: React.FC<TodoListProps> = ({ todos, onRemove, onToggle }) => {

	const removeHandler = (e: React.MouseEvent, id: number) => {
		e.preventDefault()
		onRemove(id)
	}

	if (todos.length === 0) {
		return <p className='center'>Дел пока нет!</p>
	}

	return (
		<ul>
			{todos.map(todo => {
				const classes = ['todo']
				if (todo.complited) {
					classes.push('complited')
				}
				return (
					<li key={todo.id} className={classes.join(' ')}>
						<label>
							<input type='checkbox' checked={todo.complited} onChange={() => { onToggle(todo.id) }} />
							<span>{todo.title}</span>
							<i onClick={(e) => { removeHandler(e, todo.id) }} className='material-icons red-text'>delete</i>
						</label>
					</li>
				)
			})}
		</ul>
	)
}