import ServiceCard from "../components/ServiceCard"

function ServicesPage() {
    return (
        <div className="min-h-screen pt-20">
            <h1 className="text-3xl text-center py-3">Empowering Your Brand with Digital Excellence</h1>
            <div className="mt-6">

                <ServiceCard heading="Website Creation: Turning Ideas into Reality" description="Your website is the digital face of your business, and we make sure it leaves a lasting impression. Our expert developers create responsive, user-friendly, and visually appealing websites that reflect your brand's identity and engage your audience. Whether you need an eCommerce store, a portfolio site, or a corporate platform, we build seamless web experiences that drive results." bgColor="bg-yellow-600/25" />

                <ServiceCard heading="Graphic Designing: Visuals that Speak for Your Brand" description="Strong visuals are key to effective branding. Our graphic design services cover everything from logos and branding materials to social media graphics and marketing collateral. We bring your vision to life with eye-catching designs that resonate with your audience and create a powerful brand presence." bgColor="bg-blue-600/25" imagePosition="right" />

                <ServiceCard heading="SEO: Boosting Your Online Visibility" description="Having a website is not enough; it needs to be seen. Our SEO experts optimize your site to rank higher on search engines, helping you attract organic traffic and grow your business. From keyword research to on-page and off-page optimization, we implement proven strategies to enhance your online presence and increase conversions." bgColor="bg-green-600/25" />

                <ServiceCard heading="Photography: Capturing Moments with Perfection" description="A picture is worth a thousand words, and we ensure every image tells your story. Our professional photography services cover product photography, corporate events, portraits, and more. Whether for marketing campaigns or personal branding, we capture high-quality visuals that enhance your brand’s image." bgColor="bg-red-600/25" imagePosition="right" />

                <ServiceCard heading="Video Editing: Bringing Stories to Life" description="Video content is one of the most powerful tools in digital marketing. Our skilled editors transform raw footage into compelling videos with seamless transitions, effects, and engaging storytelling. From promotional videos to social media content, we craft high-quality visuals that leave a lasting impact on your audience." bgColor="bg-amber-600/25" />

            </div>
        </div>
    )
}
export default ServicesPage