import { AgencyImage } from "../assets/images/index.js"
import {
  Button,
  ContactFooterComponent,
  GoldTextOverlay,
  ServiceCard,
  Header,
  SiteDetails
} from "../components/index.js"
import { aboutUsPageValues } from "../data"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">

      <SiteDetails
        title="About Us"
      />

      <Header
        overlayText="About Us"
        normalText="We Are"
        coloredText="AURA ENTERPRISES"
        description="A team of digital experts passionate about creating exceptional online experiences that drive business growth."
      />
      
      <section className="py-20 bg-white px-8">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <GoldTextOverlay heading="Our Story" />
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                From Humble Beginnings to Digital Excellence
              </h2>
              <p className="text-black/70 mb-6">
                Founded in 2010, AURA ENTERPRISES began as a small web design studio with a vision to help businesses establish a meaningful online presence. Over the years, we've evolved into a full-service digital agency, expanding our expertise across various digital domains.
              </p>
              <p className="text-black/70 mb-6">
                Our journey has been defined by continuous learning, innovation, and a relentless pursuit of excellence. Today, we're proud to be a trusted digital partner for businesses of all sizes, from startups to established enterprises.
              </p>
              <p className="text-black/70">
                What sets us apart is our holistic approach to digital solutions. We don't just build websites or run marketing campaigns; we create comprehensive digital strategies that align with your business goals and drive measurable results.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gold/20 rounded-lg"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gold/20 rounded-lg"></div>
              <div className="relative z-10 rounded-lg overflow-hidden border-2 border-gold/30">
                <img 
                  src={AgencyImage}
                  alt="Our agency office" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black px-8">
        <div className="container">
          <div className="text-center mb-16">
            <GoldTextOverlay heading="Our Values" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Principles That Guide Our Work
            </h2>
            <p className="max-w-3xl mx-auto text-white/70">
              Our values shape our culture, guide our decisions, and are the foundation of everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {aboutUsPageValues.map((value) => (
              <ServiceCard 
                key={value.heading}
                {...value}
              />
            ))}

          </div>
        </div>
      </section>

      <section className="py-20 bg-white px-8">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-gold mb-2">12+</div>
              <p className="text-black">Years of Experience</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-gold mb-2">250+</div>
              <p className="text-black">Projects Completed</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-gold mb-2">120+</div>
              <p className="text-black">Happy Clients</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-gold mb-2">15</div>
              <p className="text-black">Industry Awards</p>
            </div>
          </div>
        </div>
      </section>

      <ContactFooterComponent 
        startingText="Ready to Work With Us?" 
        description="Let's discuss how we can help your business achieve its digital goals." button={<Button to="/contact" className="inline-flex h-12 items-center justify-center rounded-md bg-gold hover:bg-gold/90 px-8 py-3 text-lg font-medium text-black" children="Contact Us" />} 
      />

    </div>
  )
}