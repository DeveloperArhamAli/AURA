import { ChevronRight, Globe, Code, BarChart, Megaphone, CheckCircle, Star } from "lucide-react"
import { Link } from "react-router-dom"
import Button from "../components/Button"
import Card from "../components/Card"
import Testimonial from "../components/Testimonial"

function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-black/75 py-20 md:py-32">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
          <div className="container relative z-10 flex flex-col items-center text-center">
            <div className="inline-block rounded-full bg-gold/20 px-4 py-1.5 text-sm font-medium text-gold mb-6">
              Premium Digital Services
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
              Elevate Your <span className="text-gold">Digital Presence</span>
            </h1>
            <p className="max-w-[600px] text-lg text-white/70 mb-10">
              We provide comprehensive digital solutions to help your business thrive in the online world. From web
              development to digital marketing, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gold hover:bg-gold/90 text-black px-8 py-6" children="Explore Services" />
              <Button className="border-gold text-gold hover:bg-gold/10 px-8 py-6" children="Contact Us" />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-8 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Our Premium Services</h2>
              <p className="max-w-[600px] mx-auto text-black/70">
                We offer a wide range of digital services to help your business grow and succeed in the digital
                landscape.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              <Card icon={<Globe className="h-6 w-6 text-gold" />} name="Web Development" description="Custom websites and web applications built with the latest technologies to deliver exceptional user experiences." />

              <Card icon={<Code className="h-6 w-6 text-gold" />} name="App Development" description="Native and cross-platform mobile applications designed to engage users and drive business growth." />

              <Card icon={<BarChart className="h-6 w-6 text-gold" />} name="Data Analytics" description="Comprehensive data analysis and visualization to help you make informed business decisions." />

              <Card icon={<Megaphone className="h-6 w-6 text-gold" />} name="Digital Marketing" description="Strategic marketing campaigns to increase your online visibility and drive targeted traffic to your business." />

              <Card icon={<CheckCircle className="h-6 w-6 text-gold" />} name="SEO Optimization" description="Improve your search engine rankings and drive organic traffic to your website with our SEO services." />

              <Card icon={<Star className="h-6 w-6 text-gold" />} name="Brand Strategy" description="Develop a strong brand identity and strategy to differentiate your business in a competitive market." />

            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-8 bg-black">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block rounded-full bg-gold/20 px-4 py-1.5 text-sm font-medium text-gold mb-6">
                  Why Choose Us
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  We Deliver <span className="text-gold">Excellence</span> in Every Project
                </h2>
                <p className="text-white/70 mb-8">
                  With years of experience in the digital industry, we have helped numerous businesses achieve their
                  goals and establish a strong online presence. Our team of experts is dedicated to delivering
                  high-quality solutions tailored to your specific needs.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-gold shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-semibold text-white">Expert Team</h3>
                      <p className="text-white/70">
                        Our team consists of highly skilled professionals with extensive experience in their respective
                        fields.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-gold shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-semibold text-white">Tailored Solutions</h3>
                      <p className="text-white/70">
                        We create customized solutions that align with your business goals and requirements.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-gold shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-semibold text-white">Timely Delivery</h3>
                      <p className="text-white/70">
                        We value your time and ensure that all projects are delivered within the agreed timeframe.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-gold/20 rounded-lg"></div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gold/20 rounded-lg"></div>
                <div className="relative z-10 rounded-lg overflow-hidden border-2 border-gold/30">
                  <img
                    src="/placeholder.svg?height=600&width=800"
                    alt="Our team at work"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 px-8 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">What Our Clients Say</h2>
              <p className="max-w-[600px] mx-auto text-black/70">
                Don't just take our word for it. Here's what our clients have to say about our services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              <Testimonial stars={5} description="Working with AURA ENTERPRISES has been a game-changer for our business. Their web development team created a stunning website that perfectly represents our brand and has significantly increased our online conversions."name="Sarah Johnson" designation="CEO, TechInnovate" />

              <Testimonial stars={5} description="The digital marketing strategy developed by AURA ENTERPRISES helped us reach our target audience effectively. We've seen a 200% increase in organic traffic and a significant boost in lead generation." name="Michael Chen" designation="Marketing Director, GrowthHub" />
              
              <Testimonial stars={5} description="AURA ENTERPRISES delivered an exceptional mobile app that exceeded our expectations. Their attention to detail and commitment to quality is impressive. We highly recommend their services." name="Emily Rodriguez" designation="Product Manager, AppSolutions" />

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 bg-black">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to <span className="text-gold">Transform</span> Your Digital Presence?
              </h2>
              <p className="text-white/70 mb-10 text-lg">
                Contact us today to discuss your project and discover how our services can help your business grow in
                the digital landscape.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button to="/contact" className="bg-gold hover:bg-gold/90 text-black px-8 py-6 text-lg rounded-sm">Get Started</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}

export default HomePage