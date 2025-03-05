function ServiceCard({
    heading,
    description,
    image,
    bgColor,
    className,
}) {
    return (
        <div className={`flex p-8 min-h-screen ${bgColor} ${className}`}>
            <div className="w-1/3">
                <img src="https://images.pexels.com/photos/28643822/pexels-photo-28643822/free-photo-of-urban-architectural-scene-with-dramatic-shadows.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className="w-full" alt="" />
            </div>
            <div className="flex flex-col">
                <h1 className="text-4xl">{heading}</h1>
                <p className="text-lg">{description}</p>
            </div>
        </div>
    )
}
export default ServiceCard