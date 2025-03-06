function ServiceCard({
    heading,
    description,
    image,
    bgColor,
    className,
    imagePosition = "left",
}) {
    return (
        <>
        {imagePosition === "left" ? (
            <div className={`flex gap-7 p-8 mb-5 ${bgColor} ${className}`}>
                <div className="w-1/4">
                    <img src="https://images.pexels.com/photos/28643822/pexels-photo-28643822/free-photo-of-urban-architectural-scene-with-dramatic-shadows.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className="w-full" alt="" />
                </div>
                <div className="flex flex-col w-3/3 justify-center">
                    <h1 className="text-4xl">{heading}</h1>
                    <p className="text-lg mt-2">{description}</p>
                </div>
            </div>
        ) : (
            <div className={`flex gap-7 p-8 mb-5 ${bgColor} ${className}`}>
                <div className="flex flex-col w-3/3 justify-center">
                    <h1 className="text-4xl">{heading}</h1>
                    <p className="text-lg mt-2">{description}</p>
                </div>
                <div className="w-1/4">
                    <img src="https://images.pexels.com/photos/28643822/pexels-photo-28643822/free-photo-of-urban-architectural-scene-with-dramatic-shadows.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className="w-full" alt="" />
                </div>
            </div>
        )}
        </>
    )
}
export default ServiceCard