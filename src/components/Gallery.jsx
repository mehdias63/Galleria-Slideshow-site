function Gallery({ data, onSelectImage }) {
	return (
		<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4 ">
			{data.map((item, index) => (
				<div
					key={index}
					className="cursor-pointer break-inside-avoid"
					onClick={() => onSelectImage(item)}
				>
					<img
						src={item.images.thumbnail}
						alt={item.name}
						className="w-full object-cover rounded-lg shadow-md"
					/>
				</div>
			))}
		</div>
	)
}

export default Gallery
