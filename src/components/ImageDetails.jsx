function ImageDetails({ image, onBack }) {
	return (
		<div className="p-4">
			<button onClick={onBack} className="text-blue-500">
				Back to Gallery
			</button>
			<h1 className="text-2xl font-bold mt-4">
				{image.name} ({image.year})
			</h1>
			<h2 className="text-lg text-gray-600 flex items-center">
				<img
					src={image.artist.image}
					alt={image.artist.name}
					className="w-10 h-10 rounded-full mr-2"
				/>
				{image.artist.name}
			</h2>
			<img
				src={image.images.hero.large}
				alt={image.name}
				className="mt-4 w-full max-w-2xl"
			/>
			<p className="mt-4 text-gray-700">{image.description}</p>
			<a
				href={image.source}
				target="_blank"
				rel="noopener noreferrer"
				className="text-blue-500 mt-2 inline-block"
			>
				Learn More
			</a>
		</div>
	)
}

export default ImageDetails
