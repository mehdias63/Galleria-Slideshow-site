import { useState } from 'react'
import Gallery from './components/Gallery'
import ImageDetails from './components/ImageDetails'
import data from './data.json'

function App() {
	const [selectedImage, setSelectedImage] = useState(null)

	return (
		<div className="max-h-[100rem]">
			{selectedImage ? (
				<ImageDetails
					image={selectedImage}
					onBack={() => setSelectedImage(null)}
					data={data}
				/>
			) : (
				<Gallery data={data} onSelectImage={setSelectedImage} />
			)}
		</div>
	)
}

export default App
