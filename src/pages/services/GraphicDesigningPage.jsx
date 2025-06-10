import { CheckCircle } from "lucide-react"
import graphicDesigningCoverImage from "../../assets/images/graphic-designing-images/graphic-designing-coverImage.jpg"
import {
  Button, 
  ServiceCard, 
  Testimonial, 
  WorkCard, 
  ProjectShowcaseCard, 
  FaqCard, 
  ContactFooterComponent, 
  GoldTextOverlay, 
  SiteDetails,
  Header
} from "../../components/index.js"

import {
  graphicDesigningPageServices,
  graphicDesigningPageProcess,
  graphicDesigningPageProjects,
  graphicDesignPageTestimonials,
  graphicDesigningPageFAQS
} from "../../data"

export default function GraphicDesigningPage() {
  return (
    <div className="flex min-h-screen flex-col">

      <SiteDetails
        title="Graphic Designing"
        keywords="graphic design services, custom logo design, branding services, creative graphic, corporate branding solution, professional graphic design, business branding, brand identity design, logo and branding solutions, high-quality graphic design"
        description="Boost your brand with Aura Enterprises! Our expert graphic design services include custom logos, branding, marketing materials, and eye-catching visuals. Stand out with professional designs that captivate your audience and drive business success. Contact us today!"
      />

      <Header
        overlayText="Graphic Design"
        normalText="Creative"
        coloredText="Graphic Design Solutions"
        description="Elevate your brand with stunning visuals that communicate your message effectively and leave a lasting impression."
      />

      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mx-8">
            <div>
              <GoldTextOverlay heading="Our Approach" />
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Strategic Design That Drives Results</h2>
              <p className="text-black/70 mb-6">
                At Nexus, we believe that great design is more than just aesthetics—it's about creating visual solutions
                that communicate your message effectively and drive business results. Our team of experienced designers
                combines creativity with strategic thinking to deliver designs that stand out and make an impact.
              </p>
              <p className="text-black/70 mb-8">
                Whether you need a complete brand identity, marketing materials, digital assets, or packaging design, we
                have the expertise to bring your vision to life. We focus on understanding your brand, target audience,
                and business goals to create designs that resonate with your customers and support your objectives.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-gold shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-black">Strategic Approach</h3>
                    <p className="text-black/70">Design aligned with business goals</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-gold shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-black">Creative Excellence</h3>
                    <p className="text-black/70">Innovative and distinctive designs</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-gold shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-black">Brand Consistency</h3>
                    <p className="text-black/70">Cohesive visual identity across all touchpoints</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-gold shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-black">Attention to Detail</h3>
                    <p className="text-black/70">Meticulous craftsmanship in every project</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gold/20 rounded-lg"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gold/20 rounded-lg"></div>
              <div className="relative z-10 rounded-lg overflow-hidden border-2 border-gold/30">
                <img src={graphicDesigningCoverImage} alt="Graphic Design" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="container">
          <div className="text-center mb-16">
            <GoldTextOverlay heading="Our Services" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Comprehensive Graphic Design Services</h2>
            <p className="max-w-3xl mx-auto text-white/70">
              We offer a full range of graphic design services to meet your specific business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-8">

            {graphicDesigningPageServices.map((service, index) => (
              <ServiceCard
                key={index}
                heading={service.heading}
                description={service.description}
                icon={service.icon}
              />
            ))}

          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <GoldTextOverlay heading="Our Process" />
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">How We Create Your Designs</h2>
            <p className="max-w-3xl mx-auto text-black/70">
              Our proven design process ensures we deliver high-quality designs that meet your specific needs.
            </p>
          </div>

          <div className="relative mx-8">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gold/30 -translate-y-1/2 z-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">

              {graphicDesigningPageProcess.map((process) => (
                <WorkCard
                  variant="second"
                  key={process.step}
                  {...process}
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Recent Design Projects</h2>
            <p className="max-w-3xl mx-auto text-white/70">
              Take a look at some of our recent graphic design projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-8">

            {graphicDesigningPageProjects.map((project) => (
              <ProjectShowcaseCard
                key={project.heading}
                {...project} />
            ))}

          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <GoldTextOverlay heading="Testimonials" />
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">What Our Clients Say</h2>
            <p className="max-w-3xl mx-auto text-black/70">
              Don't just take our word for it. Here's what our clients have to say about our graphic design services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-8">

            {graphicDesignPageTestimonials.map((testimonial) => (
              <Testimonial
                key={testimonial.name}
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <p className="max-w-3xl mx-auto text-white/70">
              Find answers to common questions about our graphic design services.
            </p>
          </div>

          <div className="max-w-3xl mx-8">
            <div className="space-y-6">

              {graphicDesigningPageFAQS.map((faq) => (
                <FaqCard
                  key={faq.question}
                  {...faq}
                />
              ))}

            </div>
          </div>
        </div>
      </section>

      <ContactFooterComponent 
        startingText="Ready to Elevate Your "
        coloredText="Visual Identity"
        endingText="?"
        description="Contact us today to discuss your graphic design project and discover how our services can help your business stand out."
        button={<Button to="/contact" className="inline-flex h-12 items-center justify-center rounded-md bg-gold hover:bg-gold/90 px-8 py-3 text-lg font-medium text-black" children="Get Started" />}
      />

    </div>
  )
}