import {
  Button,
  Card,
  ContactFooterComponent,
  FaqCard, 
  GoldTextOverlay, 
  PricingCard, 
  WorkCard,
  Header,
  SiteDetails
} from "../components/index.js"

import {
  allServices,
  servicesPageProcess,
  servicesPagePricing,
  servicesPageFAQS
} from "../data"

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">

      <SiteDetails
        title="Services"
        keywords="digital marketing services, web development company, seo services, graphic design services, website optimization, e-commerce development, content marketing agency, social media management, branding services, professional video editing"
        description="AURA ENTERPRISES offers expert web development, SEO, graphic design, and digital marketing services. Boost your online presence with professional solutions tailored to your business needs."
      />

      <Header
        overlayText="Our Services"
        normalText="Comprehensive"
        coloredText="Digital Solutions"
        description="From web development to digital marketing, we offer a full range of services to help your business thrive online."
      />

      <section className="py-20 bg-white px-8">
        <div className="container">
          <div className="text-center mb-16">
              <GoldTextOverlay heading="What We Offer" />
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">{allServices.heading}</h2>
            <p className="max-w-3xl mx-auto text-black/70">We provide end-to-end digital solutions tailored to your specific business needs and goals.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {allServices.services.map((service) => (
              <Card 
                key={service.name}
                to={`/services/${service.slug}`}
                {...service}
              />
            ))}

          </div>
        </div>
      </section>

      <section className="py-20 bg-black px-8">
        <div className="container">
          <div className="text-center mb-16">
            <GoldTextOverlay heading="Our Process" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{servicesPageProcess.heading}</h2>
            <p className="max-w-3xl mx-auto text-white/70">{servicesPageProcess.description}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {servicesPageProcess.steps.map((step) => (
              <WorkCard
                key={step.step}
                {...step} />
            ))}

          </div>
        </div>
      </section>

      <section className="py-20 bg-white px-8">
        <div className="container">
          <div className="text-center mb-16">
            <GoldTextOverlay heading="Pricing" />
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">{servicesPagePricing.heading}</h2>
            <p className="max-w-3xl mx-auto text-black">{servicesPagePricing.description}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {servicesPagePricing.plans.map((plan, index) => (
              <PricingCard
                key={index}
                {...plan}
              />
            ))}

          </div>
        </div>
      </section>

      <section className="py-20 bg-black px-8">
        <div className="container">
          <div className="text-center mb-16">
            <GoldTextOverlay heading="FAQ" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="max-w-3xl mx-auto text-white/70">
              Find answers to common questions about our services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">

              {servicesPageFAQS.map((faq, index) => (
                <FaqCard
                  key={index}
                  {...faq} />
              ))}

            </div>
          </div>
        </div>
      </section>

      <ContactFooterComponent 
        startingText="Ready to Elevate Your "
        coloredText="Digital Presence"
        endingText="?"
        description="Contact us today to discuss your project and discover how our services can help your business grow in the digital landscape."
        button={<Button to="/contact" className="inline-flex h-12 items-center justify-center rounded-md bg-gold hover:bg-gold/90 px-8 py-3 text-lg font-medium text-black" children="Get Started" />}
      />

    </div>
  )
}
