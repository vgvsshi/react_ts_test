import React, { useState, useEffect } from 'react'
import { TodoForm } from '../components/todo-form'
import { TodoList } from '../components/todo-list'
import { ITodo } from '../interfaces'

export const TodosPage: React.FC = () => {
	const [todos, setTodos] = useState<ITodo[]>([])

	useEffect(() => {
		const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
		setTodos(saved)
	}, [])

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos))
	}, [todos])

	const addHandler = (title: string) => {
		const newTodo: ITodo = {
			title: title,
			id: Date.now(),
			complited: false
		}
		// setTodos([newTodo, ...todos])
		setTodos(prev => [newTodo, ...prev])
	}

	const toggleHandler = (id: number) => {
		setTodos(prev => prev.map(todo => {
			if (todo.id === id) {
				todo.complited = !todo.complited
			}
			return todo
		}))
	}

	const removeHandler = (id: number) => {
		const shouldRemove = window.confirm('Вы уверены что хотите удалить элемент?')
		if (shouldRemove) {
			setTodos(prev => prev.filter(todo => todo.id !== id))
		}
	}

	return (
		<>
			<TodoForm onAdd={addHandler} />
			<TodoList todos={todos} onRemove={removeHandler} onToggle={toggleHandler} />
		</>
	)
}