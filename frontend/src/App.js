import { useEffect, useState } from 'react'

function App() {
	const [data, setData] = useState(null)

	useEffect(() => {
		fetch('/api')
			.then((res) => res.json())
			.then((data) => setData(data.message))
	}, [])

	return (
		<div className='App'>
			<div className='grid place-items-center h-screen'>
				<p>{!data ? 'Loading...' : data}</p>
			</div>
		</div>
	)
}

export default App
