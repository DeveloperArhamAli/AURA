import { Star } from "lucide-react"

function Testimonial({
    stars = 5,
    description,
    name,
    designation,
    image,
}) {
    return (
        <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="flex gap-1 mb-4">
                {[...Array(stars)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                ))}
            </div>
            <p className="text-black/70 mb-6">
                "{description}"
            </p>
            <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-black/10 overflow-hidden">
                <img
                    src={image}
                    alt="Client"
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                />
                </div>
                <div>
                <h4 className="font-semibold text-black">{name}</h4>
                <p className="text-sm text-black/70">{designation}</p>
                </div>
            </div>
        </div>
    )
}
export default Testimonial