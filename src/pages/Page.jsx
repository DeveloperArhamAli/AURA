// import { ChevronRight, Globe, Code, BarChart, Megaphone, CheckCircle, Star } from "lucide-react"
import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gold/20 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            {/* <Globe className="h-6 w-6 text-gold" /> */}
            <span className="text-xl font-bold text-white">NEXUS</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link to="#services" className="text-sm font-medium text-white hover:text-gold transition-colors">
              Services
            </Link>
            <Link to="#about" className="text-sm font-medium text-white hover:text-gold transition-colors">
              About
            </Link>
            <Link to="#testimonials" className="text-sm font-medium text-white hover:text-gold transition-colors">
              Testimonials
            </Link>
            <Link to="#contact" className="text-sm font-medium text-white hover:text-gold transition-colors">
              Contact
            </Link>
          </nav>
          <button className="bg-gold hover:bg-gold/90 text-black">Get Started</button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-black py-20 md:py-32">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
          <div className="container relative z-10 flex flex-col items-center text-center">
            <div className="inline-block rounded-full bg-gold/20 px-4 py-1.5 text-sm font-medium text-gold mb-6">
              Premium Digital Services
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
              Elevate Your <span className="text-gold">Digital Presence</span>
            </h1>
            <p className="max-w-[600px] text-lg text-white/70 mb-10">
              We provide comprehensive digital solutions to help your business thrive in the online world. From web
              development to digital marketing, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gold hover:bg-gold/90 text-black px-8 py-6">Explore Services</button>
              <button variant="outline" className="border-gold text-gold hover:bg-gold/10 px-8 py-6">
                Contact Us
              </button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Our Premium Services</h2>
              <p className="max-w-[600px] mx-auto text-black/70">
                We offer a wide range of digital services to help your business grow and succeed in the digital
                landscape.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="group rounded-xl border border-black/10 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-gold/50">
                <div className="mb-4 rounded-full bg-gold/10 p-3 w-fit">
                  {/* <Globe className="h-6 w-6 text-gold" /> */}
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Web Development</h3>
                <p className="text-black/70 mb-4">
                  Custom websites and web applications built with the latest technologies to deliver exceptional user
                  experiences.
                </p>
                <Link to="#" className="inline-flex items-center text-gold font-medium">
                   Learn more {/* <ChevronRight className="ml-1 h-4 w-4" /> */}
                </Link>
              </div>

              {/* Service 2 */}
              <div className="group rounded-xl border border-black/10 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-gold/50">
                <div className="mb-4 rounded-full bg-gold/10 p-3 w-fit">
                  {/* <Code className="h-6 w-6 text-gold" /> */}
                </div>
                <h3 className="text-xl font-bold text-black mb-2">App Development</h3>
                <p className="text-black/70 mb-4">
                  Native and cross-platform mobile applications designed to engage users and drive business growth.
                </p>
                <Link to="#" className="inline-flex items-center text-gold font-medium">
                  Learn more {/* <ChevronRight className="ml-1 h-4 w-4" /> */}
                </Link>
              </div>

              {/* Service 3 */}
              <div className="group rounded-xl border border-black/10 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-gold/50">
                <div className="mb-4 rounded-full bg-gold/10 p-3 w-fit">
                  {/* <BarChart className="h-6 w-6 text-gold" /> */}
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Data Analytics</h3>
                <p className="text-black/70 mb-4">
                  Comprehensive data analysis and visualization to help you make informed business decisions.
                </p>
                <Link to="#" className="inline-flex items-center text-gold font-medium">
                  Learn more 
                  {/* <ChevronRight className="ml-1 h-4 w-4" /> */}
                </Link>
              </div>

              {/* Service 4 */}
              <div className="group rounded-xl border border-black/10 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-gold/50">
                <div className="mb-4 rounded-full bg-gold/10 p-3 w-fit">
                  {/* <Megaphone className="h-6 w-6 text-gold" /> */}
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Digital Marketing</h3>
                <p className="text-black/70 mb-4">
                  Strategic marketing campaigns to increase your online visibility and drive targeted traffic to your
                  business.
                </p>
                <Link to="#" className="inline-flex items-center text-gold font-medium">
                  Learn more 
                  {/* <ChevronRight className="ml-1 h-4 w-4" /> */}
                </Link>
              </div>

              {/* Service 5 */}
              <div className="group rounded-xl border border-black/10 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-gold/50">
                <div className="mb-4 rounded-full bg-gold/10 p-3 w-fit">
                  {/* <CheckCircle className="h-6 w-6 text-gold" /> */}
                </div>
                <h3 className="text-xl font-bold text-black mb-2">SEO Optimization</h3>
                <p className="text-black/70 mb-4">
                  Improve your search engine rankings and drive organic traffic to your website with our SEO services.
                </p>
                <Link to="#" className="inline-flex items-center text-gold font-medium">
                  Learn more 
                  {/* <ChevronRight className="ml-1 h-4 w-4" /> */}
                </Link>
              </div>

              {/* Service 6 */}
              <div className="group rounded-xl border border-black/10 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-gold/50">
                <div className="mb-4 rounded-full bg-gold/10 p-3 w-fit">
                  {/* <Star className="h-6 w-6 text-gold" /> */}
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Brand Strategy</h3>
                <p className="text-black/70 mb-4">
                  Develop a strong brand identity and strategy to differentiate your business in a competitive market.
                </p>
                <Link to="#" className="inline-flex items-center text-gold font-medium">
                  Learn more 
                  {/* <ChevronRight className="ml-1 h-4 w-4" /> */}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-black">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block rounded-full bg-gold/20 px-4 py-1.5 text-sm font-medium text-gold mb-6">
                  Why Choose Us
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  We Deliver <span className="text-gold">Excellence</span> in Every Project
                </h2>
                <p className="text-white/70 mb-8">
                  With years of experience in the digital industry, we have helped numerous businesses achieve their
                  goals and establish a strong online presence. Our team of experts is dedicated to delivering
                  high-quality solutions tailored to your specific needs.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    {/* <CheckCircle className="h-6 w-6 text-gold shrink-0 mt-0.5" /> */}
                    <div>
                      <h3 className="text-lg font-semibold text-white">Expert Team</h3>
                      <p className="text-white/70">
                        Our team consists of highly skilled professionals with extensive experience in their respective
                        fields.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    {/* <CheckCircle className="h-6 w-6 text-gold shrink-0 mt-0.5" /> */}
                    <div>
                      <h3 className="text-lg font-semibold text-white">Tailored Solutions</h3>
                      <p className="text-white/70">
                        We create customized solutions that align with your business goals and requirements.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    {/* <CheckCircle className="h-6 w-6 text-gold shrink-0 mt-0.5" /> */}
                    <div>
                      <h3 className="text-lg font-semibold text-white">Timely Delivery</h3>
                      <p className="text-white/70">
                        We value your time and ensure that all projects are delivered within the agreed timeframe.
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
                    alt="Our team at work"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">What Our Clients Say</h2>
              <p className="max-w-[600px] mx-auto text-black/70">
                Don't just take our word for it. Here's what our clients have to say about our services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    // <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                    <div>star</div>
                  ))}
                </div>
                <p className="text-black/70 mb-6">
                  "Working with Nexus has been a game-changer for our business. Their web development team created a
                  stunning website that perfectly represents our brand and has significantly increased our online
                  conversions."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-black/10 overflow-hidden">
                    <img
                      src="/placeholder.svg?height=100&width=100"
                      alt="Client"
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Sarah Johnson</h4>
                    <p className="text-sm text-black/70">CEO, TechInnovate</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    // <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                    <div>star</div>
                  ))}
                </div>
                <p className="text-black/70 mb-6">
                  "The digital marketing strategy developed by Nexus helped us reach our target audience effectively.
                  We've seen a 200% increase in organic traffic and a significant boost in lead generation."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-black/10 overflow-hidden">
                    <img
                      src="/placeholder.svg?height=100&width=100"
                      alt="Client"
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Michael Chen</h4>
                    <p className="text-sm text-black/70">Marketing Director, GrowthHub</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    // <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                    <div>star</div>
                  ))}
                </div>
                <p className="text-black/70 mb-6">
                  "Nexus delivered an exceptional mobile app that exceeded our expectations. Their attention to detail
                  and commitment to quality is impressive. We highly recommend their services."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-black/10 overflow-hidden">
                    <img
                      src="/placeholder.svg?height=100&width=100"
                      alt="Client"
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Emily Rodriguez</h4>
                    <p className="text-sm text-black/70">Product Manager, AppSolutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 bg-black">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to <span className="text-gold">Transform</span> Your Digital Presence?
              </h2>
              <p className="text-white/70 mb-10 text-lg">
                Contact us today to discuss your project and discover how our services can help your business grow in
                the digital landscape.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-gold hover:bg-gold/90 text-black px-8 py-6 text-lg">Get Started</button>
                <button variant="outline" className="border-gold text-gold hover:bg-gold/10 px-8 py-6 text-lg">
                  Schedule a Consultation
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-gold/20 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                {/* <Globe className="h-6 w-6 text-gold" /> */}
                <span className="text-xl font-bold text-white">NEXUS</span>
              </div>
              <p className="text-white/70 mb-6">
                Premium digital services to help your business thrive in the online world.
              </p>
              <div className="flex gap-4">
                <Link
                  to="#"
                  className="h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center text-gold hover:bg-gold/20 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
                <Link
                  to="#"
                  className="h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center text-gold hover:bg-gold/20 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Link>
                <Link
                  to="#"
                  className="h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center text-gold hover:bg-gold/20 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </Link>
                <Link
                  to="#"
                  className="h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center text-gold hover:bg-gold/20 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="#" className="text-white/70 hover:text-gold transition-colors">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-white/70 hover:text-gold transition-colors">
                    App Development
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-white/70 hover:text-gold transition-colors">
                    Data Analytics
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-white/70 hover:text-gold transition-colors">
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-white/70 hover:text-gold transition-colors">
                    SEO Optimization
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-white/70 hover:text-gold transition-colors">
                    Brand Strategy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="#" className="text-white/70 hover:text-gold transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-white/70 hover:text-gold transition-colors">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-white/70 hover:text-gold transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-white/70 hover:text-gold transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-white/70 hover:text-gold transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gold mt-1"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span className="text-white/70">+1 (123) 456-7890</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gold mt-1"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span className="text-white/70">info@nexusagency.com</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gold mt-1"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span className="text-white/70">
                    123 Business Avenue, Suite 500
                    <br />
                    New York, NY 10001
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gold/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 text-sm">© {new Date().getFullYear()} Nexus Agency. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link to="#" className="text-white/50 text-sm hover:text-gold transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-white/50 text-sm hover:text-gold transition-colors">
                Terms of Service
              </Link>
              <Link to="#" className="text-white/50 text-sm hover:text-gold transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home