import GoldTextOverlay from "./GoldTextOverlay"

function Header({
    overlayText = "",
    normalText = "",
    coloredText = "",
    description = "",
}) {
    return (
        <section className="relative bg-black py-20">
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
            <div className="container relative z-10 px-8">
                <div className="max-w-3xl">
                    <GoldTextOverlay heading={overlayText} />
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                    {normalText} <span className="text-gold">{coloredText}</span>
                    </h1>
                    <p className="text-xl text-white/70 mb-8">{description}</p>
                </div>
            </div>
        </section>
    )
}
export default Header