import { useState } from 'react'
import Gallery from './components/Gallery'

import data from './data.json'

function App() {
	const [selectedImage, setSelectedImage] = useState(null)

	return (
		<div>
			<Gallery data={data} onSelectImage={setSelectedImage} />
		</div>
	)
}

export default App
