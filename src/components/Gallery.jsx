function Gallery({ data, onSelectImage }) {
	return (
		<div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-x-6 p-4 space-y-8 ">
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
