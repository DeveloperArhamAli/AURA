import { CheckCircle } from "lucide-react"
import { OfficeImage } from "../assets/images/index.js"
import {
  Button,
  Card,
  ContactFooterComponent,
  GoldTextOverlay,
  SiteDetails,
  Testimonial
} from "../components/index.js"

import {
  allServices,
  allTestimonials
} from "../data"

function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">

      <SiteDetails
        title="Home"
        keywords="digital marketing services, web development company, seo services, graphic design services, website optimization, e-commerce development, content marketing agency, social media management, branding services, professional video editing"
        description="AURA ENTERPRISES offers expert web development, SEO, graphic design, and digital marketing services. Boost your online presence with professional solutions tailored to your business needs."
      />

      <main className="flex-1">

        <section className="relative bg-black/75 py-20 md:py-32">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
          <div className="container relative z-10 flex flex-col items-center text-center">
            <GoldTextOverlay heading="Premium Digital Services" />
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
              Elevate Your <span className="text-gold">Digital Presence</span>
            </h1>
            <p className="max-w-[600px] text-lg text-white/70 mb-10">
              We provide comprehensive digital solutions to help your business thrive in the online world. From web
              development to digital marketing, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/services" className="bg-gold hover:bg-gold/90 text-black px-8 py-6" children="Explore Services" />
              <Button to="/contact" className="border-gold text-gold hover:bg-gold/10 px-8 py-6" children="Contact Us" />
            </div>
          </div>
        </section>

        <section id="services" className="py-20 px-8 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">{allServices.heading}</h2>
              <p className="max-w-[600px] mx-auto text-black/70">{allServices.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {allServices.services.map((service) => (
                <Card 
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  {...service} />
              ))}

            </div>
          </div>
        </section>

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
                    src={OfficeImage}
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

        <section id="testimonials" className="py-20 px-8 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">{allTestimonials.heading}</h2>
              <p className="max-w-[600px] mx-auto text-black/70">{allTestimonials.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {allTestimonials.testimonials.map((testimonial) => (
                <Testimonial
                  key={testimonial.name}
                  {...testimonial} />
              ))}

            </div>
          </div>
        </section>

        <ContactFooterComponent
          startingText="Ready to"
          coloredText="Transform"
          endingText="Your Digital Presence?"
          description="Contact us today to discuss your project and discover how our services can help your business grow in the digital landscape."
          button={<Button to="/contact" className="bg-gold hover:bg-gold/90 text-black px-8 py-3 text-lg rounded-sm">Get Started</Button>}
        />

      </main>
    </div>
  )
}

export default HomePage