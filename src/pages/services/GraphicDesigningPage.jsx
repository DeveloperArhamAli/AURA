import { CheckCircle, Palette, Image, Layout, PenTool, ArrowRight } from "lucide-react"
import { Helmet } from "react-helmet"
import { Button, ServiceCard, Testimonial, WorkCard, ProjectShowcaseCard, FaqCard, ContactFooterComponent } from "../../components/index.js"
import image from "../../assets/office.jpg"
import Person1 from "../../assets/person1.jpeg"
import Person2 from "../../assets/peson2.jpeg"
import Person3 from "../../assets/person3.jpeg"

export default function GraphicDesigningPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <Helmet>
          <meta charSet="utf-8" />
          <title>Graphic Designing - AURA ENTERPRISES</title>
          <meta name="description" content="Boost your brand with Aura Enterprises! Our expert graphic design services include custom logos, branding, marketing materials, and eye-catching visuals. Stand out with professional designs that captivate your audience and drive business success. Contact us today!" />
          <meta name="keywords" content="graphic design services, custom logo design, branding services, creative graphic, corporate branding solution, professional graphic design, business branding, brand identity design, logo and branding solutions, high-quality graphic design" />
      </Helmet>
      <section className="relative bg-black py-20">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-8">
            <div className="inline-block rounded-full bg-gold/20 px-4 py-1.5 text-sm font-medium text-gold mb-6">
              Graphic Design
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Creative <span className="text-gold">Graphic Design</span> Solutions
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Elevate your brand with stunning visuals that communicate your message effectively and leave a lasting
              impression.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                to="/contact"
                className="inline-flex h-12 items-center justify-center rounded-md bg-gold hover:bg-gold/90 px-8 py-3 text-lg font-medium text-black"
              >
                Get Started
              </Button>
              <a
                href="#portfolio"
                className="inline-flex h-12 items-center justify-center rounded-md border border-gold text-gold hover:bg-gold/10 px-8 py-3 text-lg font-medium"
              >
                View Portfolio
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mx-8">
            <div>
              <div className="inline-block rounded-full bg-gold/20 px-4 py-1.5 text-sm font-medium text-gold mb-6">
                Our Approach
              </div>
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
                <img src={image} alt="Graphic Design" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-black">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-block rounded-full bg-gold/20 px-4 py-1.5 text-sm font-medium text-gold mb-6">
              Our Services
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Comprehensive Graphic Design Services</h2>
            <p className="max-w-3xl mx-auto text-white/70">
              We offer a full range of graphic design services to meet your specific business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-8">

            <ServiceCard icon={<Palette className="h-6 w-6 text-gold" />} heading="Brand Identity Design" description="Comprehensive brand identity design that communicates your brand's personality, values, and unique selling proposition." features={["Logo design", "Brand guidelines", "Visual identity systems"]} />

            <ServiceCard icon={<Layout className="h-6 w-6 text-gold" />} heading="Marketing & Advertising" description="Eye-catching marketing and advertising materials that drive engagement and conversions for your campaigns." features={["Social media graphics", "Digital ads", "Print advertisements"]} />

            <ServiceCard icon={<Image className="h-6 w-6 text-gold" />} heading="Print Design" description="Professional print design that effectively communicates your message and reinforces your brand identity." features={["Brochures & flyers", "Business cards", "Catalogs & magazines"]} />

            <ServiceCard icon={<PenTool className="h-6 w-6 text-gold" />} heading="Packaging Design" description="Distinctive packaging design that stands out on shelves and enhances the customer experience with your product." features={["Product packaging", "Label design", "Box & container design"]} />

            <ServiceCard icon={<Layout className="h-6 w-6 text-gold" />} heading="Digital Design" description="Engaging digital designs that enhance user experience and drive engagement across digital platforms." features={["Website graphics", "Email templates", "UI elements"]} />

            <ServiceCard icon={<ArrowRight className="h-6 w-6 text-gold" />} heading="Illustration & Infographics" description="Custom illustrations and infographics that simplify complex information and enhance visual storytelling." features={["Custom illustrations", "Data visualization", "Explanatory graphics"]} />

          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-block rounded-full bg-gold/20 px-4 py-1.5 text-sm font-medium text-gold mb-6">
              Our Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">How We Create Your Designs</h2>
            <p className="max-w-3xl mx-auto text-black/70">
              Our proven design process ensures we deliver high-quality designs that meet your specific needs.
            </p>
          </div>

          <div className="relative mx-8">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gold/30 -translate-y-1/2 z-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">

              <WorkCard variant="second" step={1} heading="Discovery" description="We start by understanding your brand, goals, target audience, and specific requirements for your design project." />
              
              <WorkCard variant="second" step={2} heading="Concept Development" description="We create initial design concepts based on our research and your requirements for your review and feedback." />

              <WorkCard variant="second" step={3} heading="Refinement" description="Based on your feedback, we refine the selected concept, perfecting every detail to ensure it meets your expectations." />

              <WorkCard variant="second" step={4} heading="Finalization & Delivery" description="We finalize the design and deliver all necessary files in the formats required for your specific use cases." />

            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-black">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-block rounded-full bg-gold/20 px-4 py-1.5 text-sm font-medium text-gold mb-6">
              Our Work
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Recent Design Projects</h2>
            <p className="max-w-3xl mx-auto text-white/70">
              Take a look at some of our recent graphic design projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-8">

            <ProjectShowcaseCard image={image} heading="Brand Identity" description="Complete brand identity design for a tech startup, including logo, color palette, and brand guidelines." linkText="View Project" />

            <ProjectShowcaseCard image={image} heading="Brand Identity" description="Complete brand identity design for a tech startup, including logo, color palette, and brand guidelines." linkText="View Project" />

            <ProjectShowcaseCard image={image} heading="Brand Identity" description="Complete brand identity design for a tech startup, including logo, color palette, and brand guidelines." linkText="View Project" />

            <ProjectShowcaseCard image={image} heading="Brand Identity" description="Complete brand identity design for a tech startup, including logo, color palette, and brand guidelines." linkText="View Project" />

            <ProjectShowcaseCard image={image} heading="Brand Identity" description="Complete brand identity design for a tech startup, including logo, color palette, and brand guidelines." linkText="View Project" />

            <ProjectShowcaseCard image={image} heading="Brand Identity" description="Complete brand identity design for a tech startup, including logo, color palette, and brand guidelines." linkText="View Project" />
            
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-block rounded-full bg-gold/20 px-4 py-1.5 text-sm font-medium text-gold mb-6">
              Testimonials
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">What Our Clients Say</h2>
            <p className="max-w-3xl mx-auto text-black/70">
              Don't just take our word for it. Here's what our clients have to say about our graphic design services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-8">
            
            <Testimonial stars={5} description="Working with AURA ENTERPRISES has been a game-changer for our business. Their web development team created a stunning website that perfectly represents our brand and has significantly increased our online conversions."name="Sarah Johnson" designation="CEO, TechInnovate" image={Person1} />

            <Testimonial stars={5} description="The digital marketing strategy developed by AURA ENTERPRISES helped us reach our target audience effectively. We've seen a 200% increase in organic traffic and a significant boost in lead generation." name="Michael Chen" designation="Marketing Director, GrowthHub" image={Person2} />

            <Testimonial stars={5} description="AURA ENTERPRISES delivered an exceptional mobile app that exceeded our expectations. Their attention to detail and commitment to quality is impressive. We highly recommend their services." name="Emily Rodriguez" designation="Product Manager, AppSolutions" image={Person3} />
            
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-block rounded-full bg-gold/20 px-4 py-1.5 text-sm font-medium text-gold mb-6">
              FAQ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <p className="max-w-3xl mx-auto text-white/70">
              Find answers to common questions about our graphic design services.
            </p>
          </div>

          <div className="max-w-3xl mx-8">
            <div className="space-y-6">

              <FaqCard question="What is your design process like?" answer="Our design process typically includes discovery, concept development, refinement, and finalization. We start by understanding your brand, goals, and requirements, then create initial concepts for your review. Based on your feedback, we refine the selected concept and finalize the design for delivery." />
              
              <FaqCard question="How long does a graphic design project take?" answer="The timeline for a graphic design project depends on its complexity and scope. A logo design typically takes 2-3 weeks, while a complete brand identity can take 4-6 weeks. We'll provide you with a detailed timeline during the initial consultation based on your specific project requirements."  />

              <FaqCard question="What file formats will I receive?" answer="We provide all necessary file formats for your specific use cases. This typically includes high-resolution print files (PDF, TIFF, EPS), web-optimized files (PNG, JPG, SVG), and editable source files (AI, PSD). We ensure you have everything you need for both digital and print applications." />

              <FaqCard question="Do you offer revisions?" answer="Yes, we include up to three rounds of revisions in our standard packages to ensure you're completely satisfied with the final design. Additional revisions can be accommodated at an extra cost if needed." />

              <FaqCard question="Who owns the rights to the designs?" answer="Upon full payment, you own the rights to the final designs we create for you. We may showcase the work in our portfolio, but you have full commercial rights to use the designs as needed for your business." />

            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ContactFooterComponent 
        startingText="Ready to Elevate Your "
        coloredText="Visual Identity"
        endingText="?"
        description="Contact us today to discuss your graphic design project and discover how our services can help your business stand out."
        button={<Button to="/contact" className="inline-flex h-12 items-center justify-center rounded-md bg-gold hover:bg-gold/90 px-8 py-3 text-lg font-medium text-black" children="Get Started" />} />

    </div>
  )
}