import { forwardRef, useId } from "react"

const Input = forwardRef(function Input({
    label,
    type = "text",
    className = "",
    placeHolder,
    ...props
}, ref) {
    const id = useId()

    return (
        <div>
            {label && (
                <label htmlFor={id} className="block text-sm font-medium text-black/70 mb-2">{label}</label>
            )}
        <input
            type={type}
            id={id}
            className={`w-full px-4 py-3 rounded-md border border-black/20 focus:outline-none focus:ring-2 focus:ring-gold/50 ${className}`}
            ref={ref}
            placeholder={placeHolder}
            {...props}
        />
        </div>
    )
})

export default Input