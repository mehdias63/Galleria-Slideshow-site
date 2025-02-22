function Gallery({ data, onSelectImage }) {
	return (
		<div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 p-4 space-y-4">
			{data.map((item, index) => (
				<div
					key={index}
					className="break-inside-avoid cursor-pointer"
					onClick={() => onSelectImage(item)}
				>
					<img
						src={item.images.thumbnail}
						alt={item.name}
						className="w-full h-auto rounded-lg shadow-md"
					/>
				</div>
			))}
		</div>
	)
}

export default Gallery
