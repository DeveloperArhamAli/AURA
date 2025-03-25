import { CheckCircle, Camera, Image, Users, MapPin, ArrowRight, CalendarDays, Building, UsersRound } from "lucide-react"
import { Button, ServiceCard } from "../../components/index.js"
import { Helmet } from "react-helmet"

export default function PhotographyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Photography Services - Aura Enterprises</title>
        <meta name="description" content="Capture life’s most precious moments with Aura Enterprises’ professional photography services. From wedding and event photography to portraits and real estate photography, we deliver high-quality, stunning visuals that tell your story. Book your session today and let us turn moments into memories" />
        <meta name="keywords" content="portrait photography services, wedding photography, landscape photography, event photography, real estate photography, photography studio, family photography" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative bg-black py-20 px-8">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block rounded-full bg-gold/20 px-4 py-1.5 text-sm font-medium text-gold mb-6">
              Photography
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Professional <span className="text-gold">Photography</span> Services
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Capture your brand's essence with stunning, high-quality photography that tells your story and connects
              with your audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/contact" className="inline-flex h-12 items-center justify-center rounded-md bg-gold hover:bg-gold/90 px-8 py-3 text-lg font-medium text-black" children="Get Started" />
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
      <section className="py-20 bg-white px-8">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block rounded-full bg-gold/20 px-4 py-1.5 text-sm font-medium text-gold mb-6">
                Our Approach
              </div>
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
                <img src="/placeholder.svg?height=600&width=800" alt="Photography" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-black px-8">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-block rounded-full bg-gold/20 px-4 py-1.5 text-sm font-medium text-gold mb-6">
              Our Services
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Comprehensive Photography Services</h2>
            <p className="max-w-3xl mx-auto text-white/70">
              We offer a full range of photography services to meet your specific business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <ServiceCard icon={<Image className="h-6 w-6 text-gold" />} heading="Portrait Photography" description="Capture your personality with high-quality portrait photography. Perfect for personal branding, social media, and professional portfolios." />
            
            <ServiceCard icon={<Users className="h-6 w-6 text-gold" />} heading="Wedding Photography" description="Your special day deserves extraordinary photos. Our expert wedding photographers ensure every emotion and detail is preserved forever." />

            <ServiceCard icon={<Camera className="h-6 w-6 text-gold" />} heading="Landscape Photography" description="We bring nature to life with stunning landscape photography. Ideal for travel, tourism, and artistic collections." />

            <ServiceCard icon={<CalendarDays className="h-6 w-6 text-gold" />} heading="Event Photography" description="From corporate events to private parties, we capture every key moment with professionalism and creativity." />

            <ServiceCard icon={<Building className="h-6 w-6 text-gold" />} heading="Real Estate Photography" description="High-quality real estate photography to showcase properties in the best light, perfect for marketing and sales." />

            <ServiceCard icon={<UsersRound className="h-6 w-6 text-gold" />} heading="Family Photography" description="Create lifelong memories with heartwarming family photography that captures love and connection." />

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
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">How We Create Your Photography</h2>
            <p className="max-w-3xl mx-auto text-black/70">
              Our proven photography process ensures we deliver high-quality images that meet your specific needs.
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gold/30 -translate-y-1/2 z-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {/* Step 1 */}
              <div className="bg-white p-6 rounded-xl border border-black/10 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-gold text-black flex items-center justify-center text-xl font-bold mb-6 mx-auto">
                  1
                </div>
                <h3 className="text-xl font-bold text-black mb-3 text-center">Consultation</h3>
                <p className="text-black/70 text-center">
                  We start by understanding your brand, goals, target audience, and specific requirements for your
                  photography project.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white p-6 rounded-xl border border-black/10 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-gold text-black flex items-center justify-center text-xl font-bold mb-6 mx-auto">
                  2
                </div>
                <h3 className="text-xl font-bold text-black mb-3 text-center">Planning & Preparation</h3>
                <p className="text-black/70 text-center">
                  We create a detailed plan for your shoot, including location scouting, styling, and technical
                  requirements.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white p-6 rounded-xl border border-black/10 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-gold text-black flex items-center justify-center text-xl font-bold mb-6 mx-auto">
                  3
                </div>
                <h3 className="text-xl font-bold text-black mb-3 text-center">Photography Session</h3>
                <p className="text-black/70 text-center">
                  Our photographers execute the shoot with attention to detail, ensuring we capture all the necessary
                  images.
                </p>
              </div>

              {/* Step 4 */}
              <div className="bg-white p-6 rounded-xl border border-black/10 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-gold text-black flex items-center justify-center text-xl font-bold mb-6 mx-auto">
                  4
                </div>
                <h3 className="text-xl font-bold text-black mb-3 text-center">Editing & Delivery</h3>
                <p className="text-black/70 text-center">
                  We carefully select and edit the best images, then deliver them in your preferred format and
                  resolution.
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Recent Photography Projects</h2>
            <p className="max-w-3xl mx-auto text-white/70">Take a look at some of our recent photography projects.</p>
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
                    <h3 className="text-xl font-bold text-white mb-2">Product Photography</h3>
                    <p className="text-white/70 mb-4">
                      High-end product photography for a luxury fashion brand's e-commerce website.
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
                    <h3 className="text-xl font-bold text-white mb-2">Corporate Headshots</h3>
                    <p className="text-white/70 mb-4">
                      Professional headshots for a financial services firm's executive team.
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
                    <h3 className="text-xl font-bold text-white mb-2">Event Coverage</h3>
                    <p className="text-white/70 mb-4">
                      Comprehensive photography coverage for a major tech conference.
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
                    <h3 className="text-xl font-bold text-white mb-2">Real Estate</h3>
                    <p className="text-white/70 mb-4">
                      Interior and exterior photography for a luxury real estate development.
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
                    <h3 className="text-xl font-bold text-white mb-2">Food Photography</h3>
                    <p className="text-white/70 mb-4">
                      Appetizing food photography for a restaurant's menu and marketing materials.
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
                    <h3 className="text-xl font-bold text-white mb-2">Lifestyle Campaign</h3>
                    <p className="text-white/70 mb-4">
                      Lifestyle photography for a sportswear brand's marketing campaign.
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
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">What Our Clients Say</h2>
            <p className="max-w-3xl mx-auto text-black/70">
              Don't just take our word for it. Here's what our clients have to say about our photography services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#D4AF37"
                    stroke="#D4AF37"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                ))}
              </div>
              <p className="text-black/70 mb-6">
                "AURA ENTERPRISES delivered exceptional product photography for our e-commerce website. The images are stunning and
                have significantly increased our conversion rates. Their attention to detail and understanding of our
                brand was impressive."
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
                  <h4 className="font-semibold text-black">Jennifer Lee</h4>
                  <p className="text-sm text-black/70">Marketing Director, Fashion Forward</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#D4AF37"
                    stroke="#D4AF37"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                ))}
              </div>
              <p className="text-black/70 mb-6">
                "The corporate headshots AURA ENTERPRISES created for our team are professional, consistent, and perfectly capture
                the personality of each individual. The process was efficient and the results exceeded our
                expectations."
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
                  <h4 className="font-semibold text-black">Michael Thompson</h4>
                  <p className="text-sm text-black/70">HR Director, Global Finance</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#D4AF37"
                    stroke="#D4AF37"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                ))}
              </div>
              <p className="text-black/70 mb-6">
                "AURA ENTERPRISES provided exceptional event photography for our annual conference. They captured all the key
                moments and the energy of the event perfectly. The images have been invaluable for our marketing and
                social media content."
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
                  <h4 className="font-semibold text-black">David Wilson</h4>
                  <p className="text-sm text-black/70">Event Manager, Tech Conferences</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <p className="max-w-3xl mx-auto text-white/70">
              Find answers to common questions about our photography services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {/* FAQ Item 1 */}
              <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">What types of photography do you offer?</h3>
                  <p className="text-white/70">
                    We offer a wide range of photography services, including product photography, corporate headshots,
                    event coverage, real estate photography, lifestyle photography, and food & beverage photography.
                  </p>
                </div>
              </div>

              {/* FAQ Item 2 */}
              <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">How much does a photography session cost?</h3>
                  <p className="text-white/70">
                    The cost of a photography session depends on various factors, including the type of photography,
                    location, duration, and specific requirements. We offer customized quotes based on your needs.
                    Contact us for a free consultation and quote.
                  </p>
                </div>
              </div>

              {/* FAQ Item 3 */}
              <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    How long does it take to receive the final images?
                  </h3>
                  <p className="text-white/70">
                    The turnaround time depends on the scope of the project. Typically, you can expect to receive your
                    edited images within 1-2 weeks after the shoot. For urgent requests, we offer expedited delivery
                    options.
                  </p>
                </div>
              </div>

              {/* FAQ Item 4 */}
              <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Do you provide both digital and printed images?
                  </h3>
                  <p className="text-white/70">
                    Yes, we provide high-resolution digital images as standard with all our photography packages. We
                    also offer professional printing services if you require physical prints, albums, or other printed
                    materials.
                  </p>
                </div>
              </div>

              {/* FAQ Item 5 */}
              <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Do you travel for photography assignments?</h3>
                  <p className="text-white/70">
                    Yes, we are available for photography assignments both locally and internationally. Travel fees may
                    apply depending on the location.
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
              Ready to Capture Your <span className="text-gold">Visual Story</span>?
            </h2>
            <p className="text-black/70 mb-10 text-lg">
              Contact us today to discuss your photography needs and discover how our services can help elevate your
              brand's visual identity.
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

