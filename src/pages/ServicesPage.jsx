import ServiceCard from "../components/ServiceCard"

function ServicesPage() {
    return (
        <div className="min-h-screen mt-20">
            <h1 className="text-2xl text-center">Our Services</h1>
            <p className="text-center mt-1">We provide multiple services.</p>
            <ServiceCard heading="Website Creation" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio praesentium alias distinctio similique earum doloremque vel blanditiis nulla nam a." />
        </div>
    )
}
export default ServicesPage