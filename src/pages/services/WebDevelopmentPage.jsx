import { CheckCircle, Code, Server, Layout, Database, Globe, ArrowRight } from 'lucide-react'

export default function WebDevelopmentPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-black py-20">
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
              <a 
                href="/contact" 
                className="inline-flex h-12 items-center justify-center rounded-md bg-gold hover:bg-gold/90 px-8 py-3 text-lg font-medium text-black"
              >
                Get Started
              </a>
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
                  src="/placeholder.svg?height=600&width=800" 
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-xl p-8">
              <div className="rounded-full bg-gold/10 p-3 w-fit mb-6">
                <Layout className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Website Design & Development</h3>
              <p className="text-white/70 mb-6">
                Custom website design and development tailored to your brand identity and business goals. We create responsive websites that look great on all devices.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Corporate websites</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Landing pages</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Portfolio websites</span>
                </li>
              </ul>
            </div>
            
            {/* Service 2 */}
            <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-xl p-8">
              <div className="rounded-full bg-gold/10 p-3 w-fit mb-6">
                <Database className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">E-Commerce Development</h3>
              <p className="text-white/70 mb-6">
                Powerful e-commerce solutions that help you sell products or services online. We build secure, user-friendly online stores that drive conversions.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Custom online stores</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Payment gateway integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Inventory management</span>
                </li>
              </ul>
            </div>
            
            {/* Service 3 */}
            <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-xl p-8">
              <div className="rounded-full bg-gold/10 p-3 w-fit mb-6">
                <Code className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Web Application Development</h3>
              <p className="text-white/70 mb-6">
                Custom web applications designed to solve specific business challenges. We build scalable, secure, and user-friendly web applications.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">CRM systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Project management tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Custom business applications</span>
                </li>
              </ul>
            </div>
            
            {/* Service 4 */}
            <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-xl p-8">
              <div className="rounded-full bg-gold/10 p-3 w-fit mb-6">
                <Server className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">CMS Development</h3>
              <p className="text-white/70 mb-6">
                Content management system development that makes it easy for you to update and manage your website content without technical knowledge.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">WordPress development</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Custom CMS solutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">CMS migration</span>
                </li>
              </ul>
            </div>
            
            {/* Service 5 */}
            <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-xl p-8">
              <div className="rounded-full bg-gold/10 p-3 w-fit mb-6">
                <Globe className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Website Maintenance</h3>
              <p className="text-white/70 mb-6">
                Ongoing website maintenance and support to ensure your website remains secure, up-to-date, and performing optimally.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Regular updates and backups</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Security monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Performance optimization</span>
                </li>
              </ul>
            </div>
            
            {/* Service 6 */}
            <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-xl p-8">
              <div className="rounded-full bg-gold/10 p-3 w-fit mb-6">
                <ArrowRight className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Website Redesign</h3>
              <p className="text-white/70 mb-6">
                Transform your outdated website into a modern, high-performing digital asset that reflects your brand and meets your business goals.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">UX/UI improvements</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Performance optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Content migration</span>
                </li>
              </ul>
            </div>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {/* Step 1 */}
              <div className="bg-white p-6 rounded-xl border border-black/10 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-gold text-black flex items-center justify-center text-xl font-bold mb-6 mx-auto">1</div>
                <h3 className="text-xl font-bold text-black mb-3 text-center">Discovery</h3>
                <p className="text-black/70 text-center">
                  We start by understanding your business, goals, target audience, and requirements to lay a solid foundation for your project.
                </p>
              </div>
              
              {/* Step 2 */}
              <div className="bg-white p-6 rounded-xl border border-black/10 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-gold text-black flex items-center justify-center text-xl font-bold mb-6 mx-auto">2</div>
                <h3 className="text-xl font-bold text-black mb-3 text-center">Planning & Design</h3>
                <p className="text-black/70 text-center">
                  We create wireframes and design mockups for your approval, ensuring the final product aligns with your brand and vision.
                </p>
              </div>
              
              {/* Step 3 */}
              <div className="bg-white p-6 rounded-xl border border-black/10 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-gold text-black flex items-center justify-center text-xl font-bold mb-6 mx-auto">3</div>
                <h3 className="text-xl font-bold text-black mb-3 text-center">Development</h3>
                <p className="text-black/70 text-center">
                  Our developers bring the designs to life, coding your website with clean, efficient, and maintainable code.
                </p>
              </div>
              
              {/* Step 4 */}
              <div className="bg-white p-6 rounded-xl border border-black/10 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-gold text-black flex items-center justify-center text-xl font-bold mb-6 mx-auto">4</div>
                <h3 className="text-xl font-bold text-black mb-3 text-center">Testing & Launch</h3>
                <p className="text-black/70 text-center">
                  We thoroughly test your website across devices and browsers before launching it to ensure everything works perfectly.
                </p>
              </div>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="group overflow-hidden rounded-xl">
              <div className="relative overflow-hidden">
                <img 
                  src="/placeholder.svg?height=400&width=600" 
                  alt="Project" 
                  className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">E-Commerce Website</h3>
                    <p className="text-white/70 mb-4">
                      A custom e-commerce solution for a fashion retailer with advanced filtering and payment options.
                    </p>
                    <a href="#" className="inline-flex items-center text-gold font-medium">
                      View Project <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project 2 */}
            <div className="group overflow-hidden rounded-xl">
              <div className="relative overflow-hidden">
                <img 
                  src="/placeholder.svg?height=400&width=600" 
                  alt="Project" 
                  className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">Corporate Website</h3>
                    <p className="text-white/70 mb-4">
                      A modern, responsive website for a financial services company with custom animations.
                    </p>
                    <a href="#" className="inline-flex items-center text-gold font-medium">
                      View Project <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project 3 */}
            <div className="group overflow-hidden rounded-xl">
              <div className="relative overflow-hidden">
                <img 
                  src="/placeholder.svg?height=400&width=600" 
                  alt="Project" 
                  className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">Web Application</h3>
                    <p className="text-white/70 mb-4">
                      A custom project management tool with real-time collaboration features.
                    </p>
                    <a href="#" className="inline-flex items-center text-gold font-medium">
                      View Project <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project 4 */}
            <div className="group overflow-hidden rounded-xl">
              <div className="relative overflow-hidden">
                <img 
                  src="/placeholder.svg?height=400&width=600" 
                  alt="Project" 
                  className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">Educational Platform</h3>
                    <p className="text-white/70 mb-4">
                      An online learning platform with course management and student tracking.
                    </p>
                    <a href="#" className="inline-flex items-center text-gold font-medium">
                      View Project <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project 5 */}
            <div className="group overflow-hidden rounded-xl">
              <div className="relative overflow-hidden">
                <img 
                  src="/placeholder.svg?height=400&width=600" 
                  alt="Project" 
                  className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">Restaurant Website</h3>
                    <p className="text-white/70 mb-4">
                      A visually stunning website with online reservation and menu management.
                    </p>
                    <a href="#" className="inline-flex items-center text-gold font-medium">
                      View Project <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project 6 */}
            <div className="group overflow-hidden rounded-xl">
              <div className="relative overflow-hidden">
                <img 
                  src="/placeholder.svg?height=400&width=600" 
                  alt="Project" 
                  className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">Real Estate Portal</h3>
                    <p className="text-white/70 mb-4">
                      A property listing website with advanced search and filtering options.
                    </p>
                    <a href="#" className="inline-flex items-center text-gold font-medium">
                      View Project <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="#" 
              className="inline-flex h-12 items-center justify-center rounded-md border border-gold text-gold hover:bg-gold/10 px-8 py-3 text-lg font-medium"
            >
              View All Projects
            </a>
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
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              What Our Clients Say
            </h2>
            <p className="max-w-3xl mx-auto text-black/70">
              Don't just take our word for it. Here's what our clients have to say about our web development services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#D4AF37" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                ))}
              </div>
              <p className="text-black/70 mb-6">
                "AURA ENTERPRISES delivered an exceptional website that exceeded our expectations. Their attention to detail and commitment to quality is impressive. The website has significantly improved our online presence and lead generation."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-black/10 overflow-hidden">
                  <img 
                    src="/placeholder.svg?height=100&width=100" 
                    alt="Client" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-black">Michael Johnson</h4>
                  <p className="text-sm text-black/70">CEO, TechInnovate</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#D4AF37" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                ))}
              </div>
              <p className="text-black/70 mb-6">
                "Working with AURA ENTERPRISES on our e-commerce website was a game-changer for our business. The site is not only visually stunning but also performs exceptionally well. Our online sales have increased by 200% since launch."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-black/10 overflow-hidden">
                  <img 
                    src="/placeholder.svg?height=100&width=100" 
                    alt="Client" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-black">Sarah Williams</h4>
                  <p className="text-sm text-black/70">Marketing Director, Fashion Forward</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#D4AF37" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                ))}
              </div>
              <p className="text-black/70 mb-6">
                "The custom web application AURA ENTERPRISES developed for our company has streamlined our operations and improved efficiency by 40%. Their team was professional, responsive, and delivered the project on time and within budget."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-black/10 overflow-hidden">
                  <img 
                    src="/placeholder.svg?height=100&width=100" 
                    alt="Client" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-black">David Chen</h4>
                  <p className="text-sm text-black/70">CTO, Innovate Solutions</p>
                </div>
              </div>
            </div>
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
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {/* FAQ Item 1 */}
              <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">How long does it take to build a website?</h3>
                  <p className="text-white/70">
                    The timeline for website development varies depending on the complexity and scope of the project. A basic website typically takes 2-4 weeks, while more complex projects can take 8-12 weeks or more. We'll provide you with a detailed timeline during the initial consultation.
                  </p>
                </div>
              </div>
              
              {/* FAQ Item 2 */}
              <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">How much does a website cost?</h3>
                  <p className="text-white/70">
                    The cost of a website depends on various factors, including the complexity, features, and functionality required. We offer customized solutions tailored to your specific needs and budget. Contact us for a free quote based on your project requirements.
                  </p>
                </div>
              </div>
              
              {/* FAQ Item 3 */}
              <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Do you offer website maintenance services?</h3>
                  <p className="text-white/70">
                    Yes, we offer ongoing website maintenance and support services to ensure your website remains secure, up-to-date, and performing optimally. Our maintenance packages include regular updates, security monitoring, backups, and technical support.
                  </p>
                </div>
              </div>
              
              {/* FAQ Item 4 */}
              <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">What technologies do you use for web development?</h3>
                  <p className="text-white/70">
                    We use a variety of modern technologies and frameworks depending on the specific requirements of your project. Our tech stack includes HTML5, CSS3, JavaScript, React, Next.js, Node.js, PHP, WordPress, and more. We choose the most appropriate technologies for each project to ensure optimal performance and scalability.
                  </p>
                </div>
              </div>
              
              {/* FAQ Item 5 */}
              <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Will my website be mobile-friendly?</h3>
                  <p className="text-white/70">
                    All websites we develop are fully responsive and optimized for all devices, including smartphones, tablets, and desktop computers. We ensure your website provides an excellent user experience regardless of the device being used.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Ready to Start Your <span className="text-gold">Web Development</span> Project?
            </h2>
            <p className="text-black/70 mb-10 text-lg">
              Contact us today to discuss your project and discover how our web development services can help your business grow in the digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/contact" 
                className="inline-flex h-12 items-center justify-center rounded-md bg-gold hover:bg-gold/90 px-8 py-3 text-lg font-medium text-black"
              >
                Get Started
              </a>
              <a 
                href="/contact" 
                className="inline-flex h-12 items-center justify-center rounded-md border border-gold text-gold hover:bg-gold/10 px-8 py-3 text-lg font-medium"
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
