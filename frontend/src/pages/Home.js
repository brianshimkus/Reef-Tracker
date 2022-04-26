import { useEffect, useState } from 'react'

export default function HomePage() {
	const [data, setData] = useState(null)

	useEffect(() => {
		fetch('/api')
			.then((res) => res.json())
			.then((data) => setData(data.message))
	}, [])

	return (
		<div className='grid place-items-center h-screen'>
			<p>{!data ? 'Loading...' : data}</p>
		</div>
	)
}
