import React from 'react'
import { useHistory } from 'react-router-dom'

export const AboutUsPage: React.FC = () => {
	const history = useHistory()
	return (
		<>
			<h1>Страница информации</h1>
			<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem nihil dignissimos veniam nemo vero odio. Deserunt esse quo possimus culpa!</p>
			<button onClick={() => { history.push('/') }} className='btn'>Обратно к списку дел</button>
		</>
	)
}