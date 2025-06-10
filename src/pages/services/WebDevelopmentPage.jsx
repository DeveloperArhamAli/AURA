import { CheckCircle } from 'lucide-react'
import websiteCoverImage from "../../assets/images/website-images/website-coverImage.webp"
import {
  ServiceCard, 
  WorkCard, 
  ProjectShowcaseCard, 
  Testimonial, 
  FaqCard, 
  ContactFooterComponent, 
  Button, 
  GoldTextOverlay, 
  SiteDetails,
  Header
} from "../../components/index.js"

import {
  webDevelopmentPageServices,
  webDevelopmentPageProcess,
  webDevelopmentPageProjects,
  webDevelopmentPageTestimonials,
  webDevelopmentPageFAQS
} from "../../data"

export default function WebDevelopmentPage() {
  return (
    <div className="flex min-h-screen flex-col">

      <SiteDetails
        title="Web Development"
        keywords="custom web development services, seo-optimized websites, high-performance websites, scalable websites, web applications, business website, e-commerce store, custom web application, speed security and user experience, front-end development, back-end development, optimized for peak performance, mobile-responsive web solutions, fast secure and scalable development, wordpress, shopify, react, nodejs, website maintenance & optimization, web development services in karachi, we help businesses worldwide"
        description="AURA ENTERPRISES offers custom web development services, delivering SEO-optimized, high-performance websites and scalable web applications. Specializing in WordPress, Shopify, React, and Node.js, we ensure speed, security, and seamless user experience. Get a free consultation today"
      />

      <Header
        overlayText="Web Development"
        normalText="Custom Web Solutions For"
        coloredText="Your Business"
        description="We create stunning, high-performance websites and web applications tailored to your specific business needs."
      />

      <section className="py-20 px-8 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <GoldTextOverlay heading="Our Approach" />
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Modern Web Development Solutions
              </h2>
              <p className="text-black/70 mb-6">
                At AURA ENTERPRISES, we specialize in creating custom web solutions that combine stunning design with powerful functionality. Our team of experienced developers works with the latest technologies to deliver websites and web applications that drive results for your business.
              </p>
              <p className="text-black/70 mb-8">
                Whether you need a simple informational website, a complex e-commerce platform, or a custom web application, we have the expertise to bring your vision to life. We focus on creating responsive, user-friendly, and SEO-optimized websites that provide an exceptional user experience across all devices.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-gold shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-black">Responsive Design</h3>
                    <p className="text-black/70">
                      Optimized for all devices and screen sizes
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-gold shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-black">Performance</h3>
                    <p className="text-black/70">
                      Fast loading speeds and optimized code
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-gold shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-black">SEO-Friendly</h3>
                    <p className="text-black/70">
                      Built with search engines in mind
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-gold shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-black">Scalability</h3>
                    <p className="text-black/70">
                      Solutions that grow with your business
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
                  src={websiteCoverImage}
                  alt="Web Development" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="container">
          <div className="text-center mb-16">
            <GoldTextOverlay heading="Our Services" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{webDevelopmentPageServices.heading}</h2>
            <p className="max-w-3xl mx-auto text-white/70">{webDevelopmentPageServices.description}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">

            {webDevelopmentPageServices.services.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
              />
            ))}
            
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <GoldTextOverlay heading="Our Process" />
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6"> {webDevelopmentPageProcess.heading}</h2>
            <p className="max-w-3xl mx-auto text-black/70">{webDevelopmentPageProcess.description}</p>
          </div>
          
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gold/30 -translate-y-1/2 z-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 px-8">

              {webDevelopmentPageProcess.steps.map((step, index) => (
                <WorkCard
                  variant='second'
                  key={index}
                  {...step}
                />
              ))}
              
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-black">
        <div className="container">
          <div className="text-center mb-16">
            <GoldTextOverlay heading="Our Work" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{webDevelopmentPageProjects.heading}</h2>
            <p className="max-w-3xl mx-auto text-white/70">{webDevelopmentPageProjects.description}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">

            {webDevelopmentPageProjects.projects.map((project, index) => (
              <ProjectShowcaseCard
                key={index}
                {...project}
              />
            ))}
            
          </div>
        </div>
      </section>

      <section className="py-20 px-8 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <GoldTextOverlay heading="Testimonials" />
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">{webDevelopmentPageTestimonials.heading}</h2>
            <p className="max-w-3xl mx-auto text-black/70">{webDevelopmentPageTestimonials.description}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {webDevelopmentPageTestimonials.testimonials.map((testimonial, index) => (
              <Testimonial
                key={index}
                {...testimonial}
              />
            ))}

          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="container">
          <div className="text-center mb-16">
            <GoldTextOverlay heading="FAQ" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{webDevelopmentPageFAQS.heading}</h2>
            <p className="max-w-3xl mx-auto text-white/70">{webDevelopmentPageFAQS.description}</p>
          </div>
          
          <div className="px-8">
            <div className="space-y-6">

              {webDevelopmentPageFAQS.faqs.map((faq, index) => (
                <FaqCard
                  key={index}
                  {...faq}
                />
              ))}

            </div>
          </div>
        </div>
      </section>

      <ContactFooterComponent 
        startingText="Ready to Start Your" 
        coloredText="Web Development" 
        endingText="Project?" 
        description="Contact us today to discuss your project and discover how our web development services can help your business grow in the digital landscape." 
        button={<Button to="/contact" className="inline-flex h-12 items-center justify-center rounded-md bg-gold hover:bg-gold/90 px-8 py-3 text-lg font-medium text-black">Get Started</Button>} 
      />

    </div>
  )
}
