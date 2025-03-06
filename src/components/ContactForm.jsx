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
    <div className="flex items-center justify-center w-full">
        <div className={`mx-auto w-1/3 max-w-lg rounded-xl px-10 py-8 border border-black/10 bg-white`}>
            {error && <p className="text-red-600 mb-2 text-center">{error}</p>}
            {success && <p className="text-green-600 mb-2 text-center">{success}</p>}
            <form onSubmit={handleSubmit(contact)} ref={form}>
                <div className="space-y-5"> 
                    <Input label="Name: " type="text" placeholder="Enter Your Name" {...register("name", {
                        required: true,
                    })}/>
                    <Input label="Email: " placeholder="Enter Your Email" type="email" {...register("email", {
                        required: true,
                        validate: {
                            matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                            "Email address must be a valid address",
                        }
                    })}/>
                    <div className="flex flex-col">
                        <label htmlFor="message" className="mb-2">Message:</label>
                        <textarea name="message" placeholder="Enter Your Message" className="border border-black rounded-md px-3 py-2" rows={6} {...register("message", {
                        required: true,
                    })}></textarea>
                    </div>
                    <Button children="Send Message" className="w-full bg-black text-white py-3 rounded-md hover:bg-white hover:text-black transform duration-300" type="submit" id="sendMessageButton" disabled={disabled} />
                </div>
            </form>
        </div>
    </div>
)
}
export default ContactForm