import { useState } from "react"
import Input from "./Input"
import { useForm } from "react-hook-form"
import Button from "./Button"
import { useRef } from "react"
import emailjs from '@emailjs/browser';

function ContactForm() {
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [disabled, setDisabled] = useState(false)
    const form = useRef();

    const contact = (e) => {
        setError("")
        setSuccess("")
        const button = document.getElementById("sendMessageButton")
        setDisabled(true)
        button.innerHTML = "Sending..."
        try {
            emailjs
                .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
                    publicKey: import.meta.env.VITE_PUBLIC_KEY,
                })
                .then(() => {
                    setSuccess("Message Sent Successfully")
                    form.current.reset()
                    setDisabled(false)
                    button.innerHTML = "Send Message"
                }
        );
        } catch (error) {
            setError(error.message)
            form.current.reset();
            setDisabled(false)
            button.innerHTML = "Send Message"
        }
    };
    
return (
    <div className="bg-white rounded-xl border border-black/10 p-8 text-black">
        <h2 className="text-2xl font-bold text-black mb-6">Send Us a Message</h2>
        {error && <p className="text-red-600 mb-2 text-center">{error}</p>}
        {success && <p className="text-green-600 mb-2 text-center">{success}</p>}
        <form onSubmit={handleSubmit(contact)} ref={form}>
            <div className="mb-6">
                <Input label="Name" type="text" placeholder="John Doe" {...register("name", {
                    required: true
                    })} />
            </div>

            <div className="mb-6">
                <Input label="Email" type="email" placeholder="john.doe@example.com" {...register("email", {
                    required: true,
                    validate: {matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||setError("Email address must be a valid address"),
                    }
                })} />
            </div>

            <div className="mb-6">
                <Input label="Phone Number" type="number" placeholder="03XX XXXXXXX" {...register("phoneNumber", {
                    required: true
                })} />
            </div>

            <div className="mb-6">
                <Input label="Service Interested In" type="text" placeholder="Graphic Designing" {...register("service", {
                    required: true
                })} />
            </div>

            <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-black/70 mb-2">Message</label>
                <textarea id="message" rows="5" className="w-full px-4 py-3 rounded-md border border-black/20 focus:outline-none focus:ring-2 focus:ring-gold/50" placeholder="Tell us about your project or inquiry..." {...register("message", {
                    required: true
                })} />
            </div>

            <Button children="Send Message" className="w-full py-3 px-4 bg-gold hover:bg-gold/90 text-black text-center rounded-md font-medium border-none" type="submit" id="sendMessageButton" disabled={disabled} />
        </form>
    </div>
)
}
export default ContactForm