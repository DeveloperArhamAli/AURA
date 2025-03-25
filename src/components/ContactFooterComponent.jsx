import Button from "./Button"

function ContactFooterComponent({
    startingText,
    coloredText,
    endingText,
    description,
    button,
}) {
    return (
        <section id="contact" className="py-20 bg-black">
            <div className="container">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        {startingText} <span className="text-gold">{coloredText}</span> {endingText}
                    </h2>
                    <p className="text-white/70 mb-4 text-lg px-18">{description}</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        {button}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ContactFooterComponent