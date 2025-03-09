import Button from "../components/Button"
import Card from "../components/Card"
import AffordablePricing from "../assets/affordable-pricing.webp"
import CustomerSatisfaction from "../assets/customer-satisfaction.png"
import HighQualityWork from "../assets/high-quality.png"
import TimelyDelivery from "../assets/timely-delivery.png"

function HomePage() {
    return (
        <div className="min-h-screen">
            <div className="flex flex-col items-center justify-center px-20 min-h-screen text-center">
                <h1 className="text-8xl">AURA ENTERPRISES</h1>
                <p className="text-xl mt-2">We specialize in crafting cutting-edge digital solutions that help businesses thrive in the online world.</p>
                <p className="text-xl">We are committed to delivering excellence in every service we provide.</p>
                <p className="text-xl">Let’s collaborate and elevate your brand to new heights! 🚀</p>

            </div>
            <div className="mt-8">
                <h1 className="text-2xl text-center ">We provide the best services in the town.</h1>
                <div className="grid grid-cols-4 px-6 gap-6 my-6">
                    <Card image={HighQualityWork} name="High Quality Work" />
                    <Card image={TimelyDelivery} name="Timely Delivery" />
                    <Card image={AffordablePricing} name="Affordable Pricing" />
                    <Card image={CustomerSatisfaction} name="Customer Satisfiaction" />
                </div>
            </div>
        </div>
    )
}
export default HomePage