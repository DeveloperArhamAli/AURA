import { ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"

function Card({
    icon,
    name,
    description,
    to,
    className,
    ...props
}) {
    return (
        <div className="group rounded-xl border border-black/10 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-gold/50">
            <div className="mb-4 rounded-full bg-gold/10 p-3 w-fit">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-black mb-2">{name}</h3>
            <p className="text-black/70 mb-4">{description}</p>
            <Link to={to} className="inline-flex items-center text-gold font-medium">
                Learn more <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
        </div>
    )
}
export default Card