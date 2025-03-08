import { Link } from "react-router-dom"

function AboutPage() {
    return (
        <div className="pt-20 py-8 min-h-screen flex">
            <div className="w-2/3 px-12">
                <h1 className="text-3xl font-bold">About Us</h1>

                <h1 className="text-2xl mt-3">Who We Are</h1>   
                <p className="mt-2">Welcome to AURA ENTERPRISES, your one-stop destination for premium digital solutions. We are a team of passionate creatives, developers, and strategists dedicated to helping businesses establish a strong online presence. Whether it’s designing stunning websites, crafting engaging visuals, optimizing for search engines, or producing high-quality media, we bring innovation and expertise to every project.</p>

                <h1 className="text-2xl mt-3">Our Mission</h1>
                <p className="mt-2">Our mission is to empower businesses and individuals by providing high-quality digital services that enhance their brand identity and online success. We believe in creating designs that inspire, websites that engage, and strategies that drive measurable results.</p>

                <h1 className="text-2xl mt-3">What We Do</h1>
                <p className="mt-2">We specialize in:</p>
                <p><span className="font-bold">✅ Website Creation</span> – Responsive, modern, and user-friendly websites tailored to your needs.</p>
                <p><span className="font-bold">✅ Graphic Designing</span> – Stunning visuals, branding materials, and social media graphics.</p>
                <p><span className="font-bold">✅ SEO</span> – Search engine optimization to boost your website’s ranking and visibility.</p>
                <p><span className="font-bold">✅ Photography</span> – High-quality images for marketing, branding, and content creation.</p>
                <p><span className="font-bold">✅ Video Editing</span> – Professional video editing to enhance your brand’s storytelling.</p>

                <h1 className="text-2xl mt-3">Why Choose Us?</h1>
                <p className="mt-2"><span className="font-bold">✔ Creativity & Innovation</span> – We push creative boundaries to deliver unique designs.</p>
                <p><span className="font-bold">✔ Customer-Centric Approach</span> – Your vision is our priority, and we bring it to life.</p>
                <p><span className="font-bold">✔ Expert Team</span> – Skilled professionals with years of experience in digital solutions.</p>
                <p><span className="font-bold">✔ Affordable & Efficient</span> – High-quality services at competitive prices, delivered on time.</p>

                <h1 className="text-2xl mt-3">Join Us on Our Journey</h1>
                <p className="mt-2">At AURA ENTERPRISES, we don’t just provide services—we build lasting relationships. Whether you’re a startup, a growing business, or an established brand, we’re here to help you succeed in the digital world. Let’s work together to create something amazing!</p>

                <h1 className="text-2xl mt-3">📩 Get in Touch</h1>
                <p className="mt-2">Have a project in mind? Let’s bring your ideas to life! <Link to="/contact" className="text-[#FFD700]">Contact us</Link> today and take your brand to the next level.</p>
            </div> 
            <div className="w-1/3">
                <img src="https://images.pexels.com/photos/29782661/pexels-photo-29782661/free-photo-of-beautiful-kyoto-yasaka-pagoda-in-historic-district.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className="h-screen" />
            </div>
        </div>
    )
}
export default AboutPage