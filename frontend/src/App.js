import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home'

function App() {
	return (
		<>
			<Router>
				<div className='bg-sky-900 text-amber-500'>
					<Routes>
						<Route path='/' element={<HomePage />} />
					</Routes>
				</div>
			</Router>
		</>
	)
}

export default App
