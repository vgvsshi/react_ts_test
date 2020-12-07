import React, { useRef } from 'react'

interface TodoFormProps {
	onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
	// const [title, setTitle] = useState<string>('')
	const ref = useRef<HTMLInputElement>(null)

	// const changeHandtler = (e: React.ChangeEvent<HTMLInputElement>) => {
	// 	setTitle(e.target.value)
	// }

	const onKeyPressHandler = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') {
			props.onAdd(ref.current!.value)
			ref.current!.value = ''
			// console.log(title)
			// setTitle('')
		}
	}

	return (
		<div className="input-field mdt2">
			<input
				ref={ref}
				// value={title} 
				// onChange={changeHandtler} 
				onKeyPress={onKeyPressHandler}
				placeholder='Введите названия дела'
				type="text"
				id="title" />
			<label htmlFor="title" className='active'>
				Введите названия дела
				</label>
		</div>
	)
}