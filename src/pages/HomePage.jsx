import Button from "../components/Button"
import Card from "../components/Card"
import image from "../assets/react.svg"

function HomePage() {
    return (
        <div className="min-h-screen">
            <div className="flex w-full">
                <div className="flex flex-col mt-52 w-2/3 px-20 gap-5">
                    <h1 className="text-5xl">AURA ENTERPRISES</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores recusandae et, ipsa quas numquam consequuntur dignissimos nemo id autem vero eos tempora accusamus fuga quo sit tempore ipsum porro dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque incidunt amet dignissimos tenetur ipsa est, numquam veniam voluptate consequuntur tempora, itaque inventore vero, quam rerum non veritatis eligendi labore sapiente.</p>

                    <div className="mt-3">
                        <Button children="Contact Us" to="/contact" className="border px-3 py-2 rounded" />
                    </div>

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