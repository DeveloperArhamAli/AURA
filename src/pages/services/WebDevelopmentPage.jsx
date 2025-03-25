import { CheckCircle, Code, Server, Layout, Database, Globe, ArrowRight } from 'lucide-react'
import image from "../../assets/office.jpg"
import Person1 from "../../assets/person1.jpeg"
import Person2 from "../../assets/peson2.jpeg"
import Person3 from "../../assets/person3.jpeg"
import { ServiceCard, WorkCard, ProjectShowcaseCard, Testimonial, FaqCard, ContactFooterComponent, Button } from "../../components/index.js"
import { Helmet } from 'react-helmet'

export default function WebDevelopmentPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Web Development - AURA ENTERPRISES</title>
        <meta name='description' content='AURA ENTERPRISES offers custom web development services, delivering SEO-optimized, high-performance websites and scalable web applications. Specializing in WordPress, Shopify, React, and Node.js, we ensure speed, security, and seamless user experience. Get a free consultation today' />
        <meta name='keywords' content='custom web development services, seo-optimized websites, high-performance websites, scalable websites, web applications, business website, e-commerce store, custom web application, speed security and user experience, front-end development, back-end development, optimized for peak performance, mobile-responsive web solutions, fast secure and scalable development, wordpress, shopify, react, nodejs, website maintenance & optimization, web development services in karachi, we help businesses worldwide' />
      </Helmet>
      {/* Hero Section */}
      <section className="relative bg-black py-20 px-8">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block rounded-full bg-gold/20 px-4 py-1.5 text-sm font-medium text-gold mb-6">
              Web Development
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Custom <span className="text-gold">Web Solutions</span> For Your Business
            </h1>
            <p className="text-xl text-white/70 mb-8">
              We create stunning, high-performance websites and web applications tailored to your specific business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/contact" className="inline-flex h-12 items-center justify-center rounded-md bg-gold hover:bg-gold/90 px-8 py-3 text-lg font-medium text-black" children="Get Started" />
              <a href="#portfolio" className="inline-flex h-12 items-center justify-center rounded-md border border-gold text-gold hover:bg-gold/10 px-8 py-3 text-lg font-medium" >View Portfolio</a>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-8 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block rounded-full bg-gold/20 px-4 py-1.5 text-sm font-medium text-gold mb-6">
                Our Approach
              </div>
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
                  src={image}
                  alt="Web Development" 
                  className="w-full h-auto"
                />
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Comprehensive Web Development Services
            </h2>
            <p className="max-w-3xl mx-auto text-white/70">
              We offer a full range of web development services to meet your specific business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">

            <ServiceCard icon={<Layout className="h-6 w-6 text-gold" />} heading="Website Design & Development" description="Custom website design and development tailored to your brand identity and business goals. We create responsive websites that look great on all devices." features={["Corporate websites", "Landing page", "Portfolio websites"]} />

            <ServiceCard icon={<Database className="h-6 w-6 text-gold" />} heading="E-Commerce Development" description="Powerful e-commerce solutions that help you sell products or services online. We build secure, user-friendly online stores that drive conversions." features={["Custom online stores", "Payment gateway integration", "Inventory management"]} />
            
            <ServiceCard icon={<Code className="h-6 w-6 text-gold" />} heading="Web Application Development" description="Custom web applications designed to solve specific business challenges. We build scalable, secure, and user-friendly web applications." features={["CRM systems", "Project management tools", "Custom business applications"]} />
            
            <ServiceCard icon={<Server className="h-6 w-6 text-gold" />} heading="CMS Development" description="Content management system development that makes it easy for you to update and manage your website content without technical knowledge." features={["WordPress development", "Custom CMS solutions", "CMS migration"]} />
            
            <ServiceCard icon={<Globe className="h-6 w-6 text-gold" />} heading="Website Maintenance" description="Ongoing website maintenance and support to ensure your website remains secure, up-to-date, and performing optimally." features={["Regular updates and backups", "Security monitoring", "Performance optimization"]} />
            
            <ServiceCard icon={<ArrowRight className="h-6 w-6 text-gold" />} heading="Website Redesign" description="Transform your outdated website into a modern, high-performing digital asset that reflects your brand and meets your business goals." features={["UX/UI improvements", "Performance optimization", "Content migration"]} /> 
            
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
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              How We Build Your Website
            </h2>
            <p className="max-w-3xl mx-auto text-black/70">
              Our proven development process ensures we deliver high-quality websites that meet your specific needs.
            </p>
          </div>
          
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gold/30 -translate-y-1/2 z-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 px-8">

              <WorkCard variant='second' step={1} heading="Discovery" description="We start by understanding your business, goals, target audience, and requirements to lay a solid foundation for your project." />

              <WorkCard variant='second' step={2} heading="Planning & Design" description="We create wireframes and design mockups for your approval, ensuring the final product aligns with your brand and vision." />
              
              <WorkCard variant='second' step={3} heading="Development" description="Our developers bring the designs to life, coding your website with clean, efficient, and maintainable code." />
              
              <WorkCard variant='second' step={4} heading="Testing & Launch" description="We thoroughly test your website across devices and browsers before launching it to ensure everything works perfectly." />
              
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Recent Web Development Projects
            </h2>
            <p className="max-w-3xl mx-auto text-white/70">
              Take a look at some of our recent web development projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">

            <ProjectShowcaseCard image={image} heading="E-Commerce Website" description="A custom e-commerce solution for a fashion retailer with advanced filtering and payment options." linkText="Visit Project" to="#" />
            
            <ProjectShowcaseCard image={image} heading="Corporate Website" description="A modern, responsive website for a financial services company with custom animations." linkText="Visit Project" to="#" />
            
            <ProjectShowcaseCard image={image} heading="Web Application" description="A custom project management tool with real-time collaboration features." linkText="Visit Project" to="#" />

            <ProjectShowcaseCard image={image} heading="E-Commerce Website" description="A custom e-commerce solution for a fashion retailer with advanced filtering and payment options." linkText="Visit Project" to="#" />
            
            <ProjectShowcaseCard image={image} heading="Corporate Website" description="A modern, responsive website for a financial services company with custom animations." linkText="Visit Project" to="#" />
            
            <ProjectShowcaseCard image={image} heading="Web Application" description="A custom project management tool with real-time collaboration features." to="#" linkText="Visit Project" />
            
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-8 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-block rounded-full bg-gold/20 px-4 py-1.5 text-sm font-medium text-gold mb-6">
              Testimonials
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              What Our Clients Say
            </h2>
            <p className="max-w-3xl mx-auto text-black/70">
              Don't just take our word for it. Here's what our clients have to say about our web development services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="max-w-3xl mx-auto text-white/70">
              Find answers to common questions about our web development services.
            </p>
          </div>
          
          <div className="px-8">
            <div className="space-y-6">

              <FaqCard question="How long does it take to build a website?" answer="The timeline for website development varies depending on the complexity and scope of the project. A basic website typically takes 2-4 weeks, while more complex projects can take 8-12 weeks or more. We'll provide you with a detailed timeline during the initial consultation." />
              
              <FaqCard question="How much does a website cost?" answer="The cost of a website depends on various factors, including the complexity, features, and functionality required. We offer customized solutions tailored to your specific needs and budget. Contact us for a free quote based on your project requirements." />
              
              <FaqCard question="Do you offer website maintenance services?" answer="Yes, we offer ongoing website maintenance and support services to ensure your website remains secure, up-to-date, and performing optimally. Our maintenance packages include regular updates, security monitoring, backups, and technical support." />
              
              <FaqCard question="What technologies do you use for web development?" answer="We use a variety of modern technologies and frameworks depending on the specific requirements of your project. Our tech stack includes HTML5, CSS3, JavaScript, React, Next.js, Node.js, WordPress, and more. We choose the most appropriate technologies for each project to ensure optimal performance and scalability." />
              
              <FaqCard question="Will my website be mobile-friendly?" answer="All websites we develop are fully responsive and optimized for all devices, including smartphones, tablets, and desktop computers. We ensure your website provides an excellent user experience regardless of the device being used." />

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
