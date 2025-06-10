import { CheckCircle } from "lucide-react"
import Button from "./Button"

function PricingCard({
    name,
    description,
    price,
    features = [],
    isPro = false,
    isPriceCustom = false,
}) {
    return (
        <div className="border border-black/20 rounded-xl overflow-hidden relative">
            {isPro && (
                <div className="absolute top-0 inset-x-0 bg-gold text-black text-center py-1 font-medium text-sm">Most Popular</div>
            )}
            <div className={`p-8 ${isPro && "pt-12"}`}>
                <h3 className="text-xl font-bold text-black mb-2">{name}</h3>
                <p className="text-black/70 mb-6">{description}</p>
                <div className="flex items-end gap-1 mb-6">
                    {!isPriceCustom ? (
                        <>
                            <span className="text-4xl font-bold text-black">${price}</span>
                            <span className="text-black/70 mb-1">/project</span>
                        </>
                    ) : (<span className="text-4xl font-bold text-black">{price}</span>)}
                </div>
                <ul className="space-y-3 mb-8">
                    {features.map((feature, index) => (
                        <li className="flex items-start gap-2" key={index}>
                            <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                            <span className="text-black/70">{feature}</span>
                        </li>
                    ))}
                </ul>
                <Button to="/contact" className={`block w-full py-3 px-4 text-center rounded-md font-medium ${isPro ? "bg-gold hover:bg-gold/90 text-black" : "bg-black hover:bg-black/90 text-white"}`} children={!isPriceCustom ? "Get Started" : "Contact Us"} />
            </div>
        </div>
    )
}
export default PricingCard