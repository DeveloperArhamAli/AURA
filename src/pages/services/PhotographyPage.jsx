import { CheckCircle } from "lucide-react"
import photographyCoverImage from "../../assets/images/photography-images/photography-coverImage.jpg"
import {
  Button, 
  ContactFooterComponent, 
  FaqCard, 
  GoldTextOverlay, 
  ProjectShowcaseCard, 
  ServiceCard, 
  SiteDetails, 
  Testimonial, 
  WorkCard,
  Header
} from "../../components/index.js"

import {
  photographyPageServices,
  photographyPageProcess,
  photographyPageProjects,
  photographyPageTestimonials,
  photographyPageFAQS,
} from "../../data"

export default function PhotographyPage() {
  return (
    <div className="flex min-h-screen flex-col">

      <SiteDetails
        title="Photography Services"
        keywords="portrait photography services, wedding photography, landscape photography, event photography, real estate photography, photography studio, family photography"
        description="Capture life’s most precious moments with Aura Enterprises’ professional photography services. From wedding and event photography to portraits and real estate photography, we deliver high-quality, stunning visuals that tell your story. Book your session today and let us turn moments into memories"
      />

      <Header
        overlayText="Photography"
        normalText="Professional"
        coloredText="Photography Services"
        description="Capture your brand's essence with stunning, high-quality photography that tells your story and connects with your audience."
      />

      <section className="py-20 bg-white px-8">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <GoldTextOverlay heading="Our Approach" />
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Capture Timeless Moments with Perfection</h2>
              <p className="text-black/70 mb-6">
                At Aura Enterprises, we specialize in professional photography services that bring your memories to life. From stunning portraits to breathtaking wedding shots, we ensure every moment is preserved beautifully. Let us turn your vision into reality.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-gold shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-black">Technical Excellence</h3>
                    <p className="text-black/70">Professional equipment and expertise</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-gold shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-black">Creative Vision</h3>
                    <p className="text-black/70">Unique perspective and artistic approach</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-gold shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-black">Attention to Detail</h3>
                    <p className="text-black/70">Meticulous focus on every element</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-gold shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-black">Brand Alignment</h3>
                    <p className="text-black/70">Images that reflect your brand identity</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gold/20 rounded-lg"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gold/20 rounded-lg"></div>
              <div className="relative z-10 rounded-lg overflow-hidden border-2 border-gold/30">
                <img src={photographyCoverImage} alt="Photography" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black px-8">
        <div className="container">
          <div className="text-center mb-16">
            <GoldTextOverlay heading="Our Services" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Comprehensive Photography Services</h2>
            <p className="max-w-3xl mx-auto text-white/70">
              We offer a full range of photography services to meet your specific business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {photographyPageServices.map((service) => (
              <ServiceCard
                key={service.heading}
                {...service}
              />
            ))}

          </div>
        </div>
      </section>

      <section className="py-20 bg-white px-8">
        <div className="container">
          <div className="text-center mb-16">
            <GoldTextOverlay heading="Our Process" />
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">How We Create Your Photography</h2>
            <p className="max-w-3xl mx-auto text-black/70">
              Our proven photography process ensures we deliver high-quality images that meet your specific needs.
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gold/30 -translate-y-1/2 z-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">

              {photographyPageProcess.map((step) => (
                <WorkCard
                  key={step.step}
                  variant="second"
                  {...step} />
              ))}

            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-black px-8">
        <div className="container">
          <div className="text-center mb-16">
            <GoldTextOverlay heading="Our Work" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Recent Photography Projects</h2>
            <p className="max-w-3xl mx-auto text-white/70">Take a look at some of our recent photography projects.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {photographyPageProjects.map((project) => (
              <ProjectShowcaseCard
                key={project.heading}
                {...project}
              />
            ))}

          </div>
        </div>
      </section>

      <section className="py-20 bg-white px-8">
        <div className="container">
          <div className="text-center mb-16">
            <GoldTextOverlay heading="Testimonials" />
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">What Our Clients Say</h2>
            <p className="max-w-3xl mx-auto text-black/70">
              Don't just take our word for it. Here's what our clients have to say about our photography services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {photographyPageTestimonials.map((testimonial) => (
              <Testimonial
                key={testimonial.name}
                {...testimonial}
              />
            ))}

          </div>
        </div>
      </section>

      <section className="py-20 bg-black px-8">
        <div className="container">
          <div className="text-center mb-16">
            <GoldTextOverlay heading="FAQ" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <p className="max-w-3xl mx-auto text-white/70">
              Find answers to common questions about our photography services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">

              {photographyPageFAQS.map((faq) => (
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
        startingText="Ready to Capture Your "
        coloredText="Visual Story"
        endingText="?"
        description="Contact us today to discuss your photography needs and discover how our services can help elevate your brand's visual identity."
        button={<Button to="/contact" className="inline-flex h-12 items-center justify-center rounded-md bg-gold hover:bg-gold/90 px-8 py-3 text-lg font-medium text-black" children="Get Started" />}
      />

    </div>
  )
}

