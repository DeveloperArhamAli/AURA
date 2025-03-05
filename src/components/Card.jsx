function Card({
    name,
    image,
}) {
    return (
        <div className="border p-8 flex flex-col items-center">
            <img src={image} alt="" className="w-1/2" />
            <h1 className="mt-3 text-xl">{name}</h1>
        </div>
    )
}
export default Card