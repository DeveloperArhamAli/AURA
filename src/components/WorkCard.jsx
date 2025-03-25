function WorkCard({
    variant = "default",
    step,
    heading,
    description,
}) {
    return (
        <>
            {variant === "default" && (
                <div className="relative">
                    <div className="border border-gold/20 rounded-xl p-8 h-full">
                        <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-gold flex items-center justify-center text-black font-bold">{step}</div>
                        <h3 className="text-xl font-bold text-white mb-4">{heading}</h3>
                        <p className="text-white/70">{description}</p>
                    </div>
                </div>
            )}
            {variant === "second" && (
                <div className="bg-white p-6 rounded-xl border border-black/10 shadow-sm">
                    <div className="w-12 h-12 rounded-full bg-gold text-black flex items-center justify-center text-xl font-bold mb-6 mx-auto">{step}</div>
                    <h3 className="text-xl font-bold text-black mb-3 text-center">{heading}</h3>
                    <p className="text-black/70 text-center">{description}</p>
                </div>
            )}
        </>
    )
}
export default WorkCard