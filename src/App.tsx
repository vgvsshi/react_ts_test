import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Navbar } from './components/navbar'
import { TodosPage } from './pages/todos-page'
import { AboutUsPage } from './pages/about-us-page'

const App: React.FC = () => {

	return (
		<BrowserRouter>
			<Navbar />
			<div className='container'>
				<Switch>
					<Route component={TodosPage} path='/' exact />
					<Route component={AboutUsPage} path='/about' />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
