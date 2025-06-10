import { CheckCircle } from "lucide-react"
import seoCoverImage from "../../assets/images/seo-images/seo-coverImage.jpg"
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
} from "../../components/index"

import {
  seoPageServices,
  seoPageProcess,
  seoPageProjects,
  seoPageTestimonials,
  seoPageFAQS
} from "../../data"

export default function SeoPage() {
  return (
    <div className="flex min-h-screen flex-col">

      <SiteDetails
        title="SEO Services"
        keywords="seo services, search engine optimizations, keyword research tools, on-page seo techniques, link building strategies, content marketing services, technical seo audit, seo consulting, local seo services, seo audit checklist"
        description="Boost your website's search rankings with AURA ENTERPRISES' expert SEO services. We specialize in keyword research, on-page SEO, link building, technical SEO, and content marketing to drive organic traffic and business growth. Get data-driven strategies for long-term success."
      />

      <Header
        overlayText="SEO"
        normalText="Dominate Search Results with Our"
        coloredText="Expert SEO Services"
        description="Improve your website's visibility, drive organic traffic, and achieve sustainable growth with our data-driven SEO strategies tailored for long-term success."
      />
      
      <section className="py-20 bg-white px-8">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <GoldTextOverlay heading="Our Approach" />
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Data-Driven SEO Strategies</h2>
              <p className="text-black/70 mb-6">
                At AURA ENTERPRISES, we believe that SEO is more than just keywords—it's about understanding your audience, analyzing data, and implementing strategies that drive real business growth. Our expert team combines technical expertise with creative innovation to deliver customized SEO solutions that improve your website's rankings and attract high-quality traffic.
              </p>
              <p className="text-black/70 mb-8">
                Whether you need help with keyword research, on-page optimization, link building, or content marketing, we have the expertise to make it happen. Our strategies are tailored to your industry, audience, and business goals for maximum impact.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-gold shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-black">Data-Driven Strategies</h3>
                    <p className="text-black/70">SEO based on deep analytics & insights</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-gold shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-black">Technical Expertise</h3>
                    <p className="text-black/70">Cutting-edge SEO tools & best practices</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-gold shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-black">Transparent Reporting</h3>
                    <p className="text-black/70">Clear, trackable SEO progress</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-gold shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-black">Sustainable Growth</h3>
                    <p className="text-black/70">Long-term results without shortcuts</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gold/20 rounded-lg"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gold/20 rounded-lg"></div>
              <div className="relative z-10 rounded-lg overflow-hidden border-2 border-gold/30">
                <img src={seoCoverImage} alt="SEO" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black px-8">
        <div className="container">
          <div className="text-center mb-16">
            <GoldTextOverlay heading="Our Services" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Comprehensive SEO Solutions</h2>
            <p className="max-w-3xl mx-auto text-white/70">
              We offer a comprehensive range of SEO solutions to help your business grow online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {seoPageServices.map((service) => (
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
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">How We Improve Your SEO</h2>
            <p className="max-w-3xl mx-auto text-black/70">
              We follow a proven 4-step process to drive success.
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gold/30 -translate-y-1/2 z-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">

              {seoPageProcess.map((step) => (
                <WorkCard
                  key={step.step}
                  variant="second"
                  {...step}
                />
              ))}

            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-black px-8">
        <div className="container">
          <div className="text-center mb-16">
            <GoldTextOverlay heading="Case Studies" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Recent SEO Success Stories</h2>
            <p className="max-w-3xl mx-auto text-white/70">
              See how we've helped businesses grow with our SEO expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {seoPageProjects.map((project) => (
              <ProjectShowcaseCard
                key={project.title}
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
              Don't just take our word for it. Here's what our clients have to say about our SEO services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {seoPageTestimonials.map((testimonial) => (
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
            <p className="max-w-3xl mx-auto text-white/70">Find answers to common questions about our SEO services.</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">

              {seoPageFAQS.map((faq) => (
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
        startingText="Ready to "
        coloredText="Dominate Google Rankings"
        endingText="?"
        description="Contact us today and start growing your business with expert SEO strategies."
        button={<Button to="/contact" className="inline-flex h-12 items-center justify-center rounded-md bg-gold hover:bg-gold/90 px-8 py-3 text-lg font-medium text-black" children="Get Started" />}
      />

    </div>
  )
}