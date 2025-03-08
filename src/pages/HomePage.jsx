import Button from "../components/Button"
import Card from "../components/Card"
import image from "../assets/react.svg"

function HomePage() {
    return (
        <div className="min-h-screen">
            <div className="flex w-full">
                <div className="flex flex-col mt-52 w-2/3 px-20 gap-5">
                    <h1 className="text-5xl">AURA ENTERPRISES</h1>
                    <p>At AURA ENTERPRISES, we specialize in crafting cutting-edge digital solutions that help businesses thrive in the online world. From stunning websites to captivating visuals, we bring creativity and technical expertise together to create a lasting impact. Our team is dedicated to delivering high-quality services tailored to your unique needs, ensuring that your brand stands out in today’s competitive landscape.</p>
                    <p>At AURA ENTERPRISES, we are committed to delivering excellence in every service we provide. Let’s collaborate and elevate your brand to new heights! 🚀</p>

                </div>
                <div className="w-1/3">
                    <img src="https://images.pexels.com/photos/29782661/pexels-photo-29782661/free-photo-of-beautiful-kyoto-yasaka-pagoda-in-historic-district.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className="h-screen" />
                </div>
            </div>
            <div className="mt-8">
                <h1 className="text-2xl text-center ">We provide the best services in the town.</h1>
                <div className="grid grid-cols-4 px-6 gap-6 my-6">
                    <Card image={image} name="Timely Delivery" />
                    <Card image={image} name="Timely Delivery" />
                    <Card image={image} name="Timely Delivery" />
                    <Card image={image} name="Timely Delivery" />
                </div>
            </div>
        </div>
    )
}
export default HomePage