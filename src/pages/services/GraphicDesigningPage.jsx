import { CheckCircle, Palette, Image, Layout, PenTool, ArrowRight } from 'lucide-react'

export default function GraphicDesigningPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-black py-20">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block rounded-full bg-gold/20 px-4 py-1.5 text-sm font-medium text-gold mb-6">
              Graphic Design
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Creative <span className="text-gold">Graphic Design</span> Solutions
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Elevate your brand with stunning visuals that communicate your message effectively and leave a lasting impression.
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
                Strategic Design That Drives Results
              </h2>
              <p className="text-black/70 mb-6">
                At AURA ENTERPRISES, we believe that great design is more than just aesthetics—it's about creating visual solutions that communicate your message effectively and drive business results. Our team of experienced designers combines creativity with strategic thinking to deliver designs that stand out and make an impact.
              </p>
              <p className="text-black/70 mb-8">
                Whether you need a complete brand identity, marketing materials, digital assets, or packaging design, we have the expertise to bring your vision to life. We focus on understanding your brand, target audience, and business goals to create designs that resonate with your customers and support your objectives.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-gold shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-black">Strategic Approach</h3>
                    <p className="text-black/70">
                      Design aligned with business goals
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-gold shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-black">Creative Excellence</h3>
                    <p className="text-black/70">
                      Innovative and distinctive designs
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-gold shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-black">Brand Consistency</h3>
                    <p className="text-black/70">
                      Cohesive visual identity across all touchpoints
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-gold shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-black">Attention to Detail</h3>
                    <p className="text-black/70">
                      Meticulous craftsmanship in every project
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
                  alt="Graphic Design" 
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
              Comprehensive Graphic Design Services
            </h2>
            <p className="max-w-3xl mx-auto text-white/70">
              We offer a full range of graphic design services to meet your specific business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-xl p-8">
              <div className="rounded-full bg-gold/10 p-3 w-fit mb-6">
                <Palette className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Brand Identity Design</h3>
              <p className="text-white/70 mb-6">
                Comprehensive brand identity design that communicates your brand's personality, values, and unique selling proposition.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Logo design</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Brand guidelines</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Visual identity systems</span>
                </li>
              </ul>
            </div>
            
            {/* Service 2 */}
            <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-xl p-8">
              <div className="rounded-full bg-gold/10 p-3 w-fit mb-6">
                <Layout className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Marketing & Advertising</h3>
              <p className="text-white/70 mb-6">
                Eye-catching marketing and advertising materials that drive engagement and conversions for your campaigns.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Social media graphics</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Digital ads</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Print advertisements</span>
                </li>
              </ul>
            </div>
            
            {/* Service 3 */}
            <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-xl p-8">
              <div className="rounded-full bg-gold/10 p-3 w-fit mb-6">
                <Image className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Print Design</h3>
              <p className="text-white/70 mb-6">
                Professional print design that effectively communicates your message and reinforces your brand identity.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Brochures & flyers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Business cards</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Catalogs & magazines</span>
                </li>
              </ul>
            </div>
            
            {/* Service 4 */}
            <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-xl p-8">
              <div className="rounded-full bg-gold/10 p-3 w-fit mb-6">
                <PenTool className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Packaging Design</h3>
              <p className="text-white/70 mb-6">
                Distinctive packaging design that stands out on shelves and enhances the customer experience with your product.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Product packaging</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Label design</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Box & container design</span>
                </li>
              </ul>
            </div>
            
            {/* Service 5 */}
            <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-xl p-8">
              <div className="rounded-full bg-gold/10 p-3 w-fit mb-6">
                <Layout className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Digital Design</h3>
              <p className="text-white/70 mb-6">
                Engaging digital designs that enhance user experience and drive engagement across digital platforms.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Website graphics</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Email templates</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">UI elements</span>
                </li>
              </ul>
            </div>
            
            {/* Service 6 */}
            <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-xl p-8">
              <div className="rounded-full bg-gold/10 p-3 w-fit mb-6">
                <ArrowRight className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Illustration & Infographics</h3>
              <p className="text-white/70 mb-6">
                Custom illustrations and infographics that simplify complex information and enhance visual storytelling.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Custom illustrations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Data visualization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Explanatory graphics</span>
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
              How We Create Your Designs
            </h2>
            <p className="max-w-3xl mx-auto text-black/70">
              Our proven design process ensures we deliver high-quality designs that meet your specific needs.
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
                  We start by understanding your brand, goals, target audience, and specific requirements for your design project.
                </p>
              </div>
              
              {/* Step 2 */}
              <div className="bg-white p-6 rounded-xl border border-black/10 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-gold text-black flex items-center justify-center text-xl font-bold mb-6 mx-auto">2</div>
                <h3 className="text-xl font-bold text-black mb-3 text-center">Concept Development</h3>
                <p className="text-black/70 text-center">
                  We create initial design concepts based on our research and your requirements for your review and feedback.
                </p>
              </div>
              
              {/* Step 3 */}
              <div className="bg-white p-6 rounded-xl border border-black/10 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-gold text-black flex items-center justify-center text-xl font-bold mb-6 mx-auto">3</div>
                <h3 className="text-xl font-bold text-black mb-3 text-center">Refinement</h3>
                <p className="text-black/70 text-center">
                  Based on your feedback, we refine the selected concept, perfecting every detail to ensure it meets your expectations.
                </p>
              </div>
              
              {/* Step 4 */}
              <div className="bg-white p-6 rounded-xl border border-black/10 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-gold text-black flex items-center justify-center text-xl font-bold mb-6 mx-auto">4</div>
                <h3 className="text-xl font-bold text-black mb-3 text-center">Finalization & Delivery</h3>
                <p className="text-black/70 text-center">
                  We finalize the design and deliver all necessary files in the formats required for your specific use cases.
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
              Recent Design Projects
            </h2>
            <p className="max-w-3xl mx-auto text-white/70">
              Take a look at some of our recent graphic design projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="group overflow-hidden rounded-xl">
              <div className="relative overflow-hidden">
                <img 
                  src="/placeholder.svg?height=400&width=600" 
                  alt="Project" 
                  className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">Brand Identity</h3>
                    <p className="text-white/70 mb-4">
                      Complete brand identity design for a tech startup, including logo, color palette, and brand guidelines.
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
                  className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">Packaging Design</h3>
                    <p className="text-white/70 mb-4">
                      Distinctive packaging design for a premium skincare product line that stands out on shelves.
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
                  className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">Marketing Campaign</h3>
                    <p className="text-white/70 mb-4">
                      Comprehensive visual assets for a multi-channel marketing campaign for a fashion brand.
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
                  className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">Annual Report</h3>
                    <p className="text-white/70 mb-4">
                      Visually engaging annual report design that effectively communicates company performance and achievements.
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
                  className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">Social Media Graphics</h3>
                    <p className="text-white/70 mb-4">
                      Cohesive set of social media graphics for a restaurant chain's promotional campaign.
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
                  className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">Infographic Series</h3>
                    <p className="text-white/70 mb-4">
                      Series of informative and visually appealing infographics for a healthcare organization.
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
              Don't just take our word for it. Here's what our clients have to say about our graphic design services.
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
                "AURA ENTERPRISES created a stunning brand identity for our company that perfectly captures our values and vision. Their attention to detail and creative approach exceeded our expectations. We've received countless compliments on our new branding."
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
                  <h4 className="font-semibold text-black">Robert Chen</h4>
                  <p className="text-sm text-black/70">CEO, Innovate Solutions</p>
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
                "The packaging design AURA ENTERPRISES created for our product line has significantly increased our shelf presence and sales. Their strategic approach to design, combined with their creativity, delivered results that far exceeded our expectations."
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
                  <h4 className="font-semibold text-black">Amanda Johnson</h4>
                  <p className="text-sm text-black/70">Marketing Director, Pure Beauty</p>
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
                "Working with AURA ENTERPRISES on our marketing materials has been a game-changer for our business. Their designs are not only visually stunning but also strategically aligned with our business goals. The engagement on our campaigns has increased dramatically."
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
                  <h4 className="font-semibold text-black">Michael Rodriguez</h4>
                  <p className="text-sm text-black/70">CMO, Global Retail</p>
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
              Find answers to common questions about our graphic design services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {/* FAQ Item 1 */}
              <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">What is your design process like?</h3>
                  <p className="text-white/70">
                    Our design process typically includes discovery, concept development, refinement, and finalization. We start by understanding your brand, goals, and requirements, then create initial concepts for your review. Based on your feedback, we refine the selected concept and finalize the design for delivery.
                  </p>
                </div>
              </div>
              
              {/* FAQ Item 2 */}
              <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">How long does a graphic design project take?</h3>
                  <p className="text-white/70">
                    The timeline for a graphic design project depends on its complexity and scope. A logo design typically takes 2-3 weeks, while a complete brand identity can take 4-6 weeks. We'll provide you with a detailed timeline during the initial consultation based on your specific project requirements.
                  </p>
                </div>
              </div>
              
              {/* FAQ Item 3 */}
              <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">What file formats will I receive?</h3>
                  <p className="text-white/70">
                    We provide all necessary file formats for your specific use cases. This typically includes high-resolution print files (PDF, TIFF, EPS), web-optimized files (PNG, JPG, SVG), and editable source files (AI, PSD). We ensure you have everything you need for both digital and print applications.
                  </p>
                </div>
              </div>
              
              {/* FAQ Item 4 */}
              <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Do you offer revisions?</h3>
                  <p className="text-white/70">
                    Yes, we include up to three rounds of revisions in our standard packages to ensure you're completely satisfied with the final design. Additional revisions can be accommodated at an extra cost if needed.
                  </p>
                </div>
              </div>
              
              {/* FAQ Item 5 */}
              <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Who owns the rights to the designs?</h3>
                  <p className="text-white/70">
                    Upon full payment, you own the rights to the final designs we create for you. We may showcase the work in our portfolio, but you have full commercial rights to use the designs as needed for your business.
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
              Ready to Elevate Your <span className="text-gold">Visual Identity</span>?
            </h2>
            <p className="text-black/70 mb-10 text-lg">
              Contact us today to discuss your graphic design project and discover how our services can help your business stand out.
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
