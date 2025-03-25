import { CheckCircle } from "lucide-react"

function ServiceCard({
    icon,
    heading,
    description,
    features = [],
}) {
    return (
        <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-xl p-8">
            <div className="rounded-full bg-gold/10 p-3 w-fit mb-6">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{heading}</h3>
            <p className="text-white/70">{description}</p>
            <ul className="space-y-2">
                {features.map((feature) => (
                    <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                        <span className="text-white/70">{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ServiceCard