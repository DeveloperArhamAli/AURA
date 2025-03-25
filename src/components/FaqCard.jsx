function FaqCard({
    question,
    answer
}) {
    return (
        <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-lg overflow-hidden">
            <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">{question}</h3>
                <p className="text-white/70">{answer}</p>
            </div>
        </div>
    )
}
export default FaqCard