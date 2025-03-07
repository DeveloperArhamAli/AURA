import ContactForm from "../components/ContactForm"
import reactSvg from "../assets/react.svg"

function ContactPage() {
    return (
        <div className="py-32 flex flex-col items-center">
            <h1 className="text-3xl text-center font-bold mb-3">Get In Touch</h1>
            <ContactForm />
            <p className="mt-8">or</p>
            <div className="flex mt-8 gap-5">
                <div className="flex flex-col justify-center gap-2 border-2 border-black rounded-md px-4 py-2">
                    <img src={reactSvg} alt="" />
                    <h1>Instagram</h1>
                </div>
                <div className="flex flex-col justify-center gap-2 border-2 border-black rounded-md px-4 py-2">
                    <img src={reactSvg} alt="" />
                    <h1>Instagram</h1>
                </div>
                <div className="flex flex-col justify-center gap-2 border-2 border-black rounded-md px-4 py-2">
                    <img src={reactSvg} alt="" />
                    <h1>Instagram</h1>
                </div>
                <div className="flex flex-col justify-center gap-2 border-2 border-black rounded-md px-4 py-2">
                    <img src={reactSvg} alt="" />
                    <h1>Instagram</h1>
                </div>
                <div className="flex flex-col justify-center gap-2 border-2 border-black rounded-md px-4 py-2">
                    <img src={reactSvg} alt="" />
                    <h1>Instagram</h1>
                </div>
                <div className="flex flex-col justify-center gap-2 border-2 border-black rounded-md px-4 py-2">
                    <img src={reactSvg} alt="" />
                    <h1>Instagram</h1>
                </div>
                <div className="flex flex-col justify-center gap-2 border-2 border-black rounded-md px-4 py-2">
                    <img src={reactSvg} alt="" />
                    <h1>Instagram</h1>
                </div>
            </div>
        </div>
    )
}
export default ContactPage