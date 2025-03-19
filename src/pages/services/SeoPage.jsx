import { CheckCircle, Search, TrendingUp, Code, Settings, ArrowRight, FileText } from "lucide-react"

export default function SeoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-black py-20">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block rounded-full bg-gold/20 px-4 py-1.5 text-sm font-medium text-gold mb-6">
              SEO
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Dominate Search Results with Our <span className="text-gold">SEO</span> Services
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Improve your website's visibility, drive organic traffic, and achieve sustainable growth with our expert
              SEO solutions.
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
                View Case Studies
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
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Data-Driven SEO Strategies</h2>
              <p className="text-black/70 mb-6">
                At AURA ENTERPRISES, we believe that effective SEO is about more than just keywords—it's about understanding your
                audience, analyzing data, and implementing strategies that drive sustainable results. Our team of SEO
                experts combines technical expertise with creative thinking to deliver customized solutions that improve
                your website's visibility, attract organic traffic, and achieve your business goals.
              </p>
              <p className="text-black/70 mb-8">
                Whether you need help with keyword research, on-page optimization, link building, or content marketing,
                we have the skills and experience to bring your vision to life. We focus on creating data-driven
                strategies that are tailored to your specific industry, target audience, and business objectives.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-gold shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-black">Data-Driven Strategies</h3>
                    <p className="text-black/70">SEO based on analytics and insights</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-gold shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-black">Technical Expertise</h3>
                    <p className="text-black/70">Professional SEO techniques and tools</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-gold shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-black">Transparent Reporting</h3>
                    <p className="text-black/70">Clear and concise progress reports</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-gold shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-black">Sustainable Results</h3>
                    <p className="text-black/70">Long-term SEO success and growth</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gold/20 rounded-lg"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gold/20 rounded-lg"></div>
              <div className="relative z-10 rounded-lg overflow-hidden border-2 border-gold/30">
                <img src="/placeholder.svg?height=600&width=800" alt="SEO" className="w-full h-auto" />
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Comprehensive SEO Services</h2>
            <p className="max-w-3xl mx-auto text-white/70">
              We offer a full range of SEO services to meet your specific business needs and help you achieve your
              online marketing goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-xl p-8">
              <div className="rounded-full bg-gold/10 p-3 w-fit mb-6">
                <Search className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Keyword Research</h3>
              <p className="text-white/70 mb-6">
                In-depth keyword research to identify the most relevant and high-traffic keywords for your business.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Keyword analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Competitor analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Keyword mapping</span>
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-xl p-8">
              <div className="rounded-full bg-gold/10 p-3 w-fit mb-6">
                <Code className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">On-Page Optimization</h3>
              <p className="text-white/70 mb-6">
                Comprehensive on-page optimization to improve your website's search engine rankings and user experience.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Title tag optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Meta description optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Header tag optimization</span>
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-xl p-8">
              <div className="rounded-full bg-gold/10 p-3 w-fit mb-6">
                <TrendingUp className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Link Building</h3>
              <p className="text-white/70 mb-6">
                Strategic link building campaigns to increase your website's authority and improve search engine
                rankings.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Guest posting</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Directory submissions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Link outreach</span>
                </li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-xl p-8">
              <div className="rounded-full bg-gold/10 p-3 w-fit mb-6">
                <FileText className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Content Marketing</h3>
              <p className="text-white/70 mb-6">
                High-quality content creation and promotion to attract and engage your target audience.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Blog posts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Articles</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Infographics</span>
                </li>
              </ul>
            </div>

            {/* Service 5 */}
            <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-xl p-8">
              <div className="rounded-full bg-gold/10 p-3 w-fit mb-6">
                <Settings className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Technical SEO</h3>
              <p className="text-white/70 mb-6">
                Technical website optimization to improve crawlability, site speed, and mobile-friendliness.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Site speed optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Mobile optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Schema markup</span>
                </li>
              </ul>
            </div>

            {/* Service 6 */}
            <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-xl p-8">
              <div className="rounded-full bg-gold/10 p-3 w-fit mb-6">
                <ArrowRight className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">SEO Audits & Consulting</h3>
              <p className="text-white/70 mb-6">
                Comprehensive SEO audits and consulting services to identify areas for improvement and develop effective
                strategies.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Website analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Strategy development</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Ongoing support</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">How We Improve Your SEO</h2>
            <p className="max-w-3xl mx-auto text-black/70">
              Our proven SEO process ensures we deliver high-quality results that meet your specific business needs.
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
                <h3 className="text-xl font-bold text-black mb-3 text-center">Discovery</h3>
                <p className="text-black/70 text-center">
                  We start by understanding your business, goals, target audience, and specific requirements for your
                  SEO project.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white p-6 rounded-xl border border-black/10 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-gold text-black flex items-center justify-center text-xl font-bold mb-6 mx-auto">
                  2
                </div>
                <h3 className="text-xl font-bold text-black mb-3 text-center">Analysis & Planning</h3>
                <p className="text-black/70 text-center">
                  We conduct a comprehensive website analysis and develop a customized SEO strategy tailored to your
                  specific needs.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white p-6 rounded-xl border border-black/10 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-gold text-black flex items-center justify-center text-xl font-bold mb-6 mx-auto">
                  3
                </div>
                <h3 className="text-xl font-bold text-black mb-3 text-center">Implementation</h3>
                <p className="text-black/70 text-center">
                  Our SEO experts implement the agreed-upon strategies, optimizing your website and content for search
                  engines.
                </p>
              </div>

              {/* Step 4 */}
              <div className="bg-white p-6 rounded-xl border border-black/10 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-gold text-black flex items-center justify-center text-xl font-bold mb-6 mx-auto">
                  4
                </div>
                <h3 className="text-xl font-bold text-black mb-3 text-center">Monitoring & Reporting</h3>
                <p className="text-black/70 text-center">
                  We continuously monitor your website's performance and provide you with regular reports on our
                  progress and results.
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
              Case Studies
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Recent SEO Success Stories</h2>
            <p className="max-w-3xl mx-auto text-white/70">
              Take a look at some of our recent SEO projects and see how we've helped our clients achieve their online
              marketing goals.
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
                    <h3 className="text-xl font-bold text-white mb-2">E-Commerce Website</h3>
                    <p className="text-white/70 mb-4">
                      Increased organic traffic by 200% and sales by 150% for a fashion retailer.
                    </p>
                    <a href="#" className="inline-flex items-center text-gold font-medium">
                      View Case Study <ArrowRight className="ml-1 h-4 w-4" />
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
                    <h3 className="text-xl font-bold text-white mb-2">Corporate Website</h3>
                    <p className="text-white/70 mb-4">
                      Improved search engine rankings and brand visibility for a financial services company.
                    </p>
                    <a href="#" className="inline-flex items-center text-gold font-medium">
                      View Case Study <ArrowRight className="ml-1 h-4 w-4" />
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
                    <h3 className="text-xl font-bold text-white mb-2">Local Business</h3>
                    <p className="text-white/70 mb-4">
                      Increased local search visibility and customer inquiries for a restaurant chain.
                    </p>
                    <a href="#" className="inline-flex items-center text-gold font-medium">
                      View Case Study <ArrowRight className="ml-1 h-4 w-4" />
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
              View All Case Studies
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
              Don't just take our word for it. Here's what our clients have to say about our SEO services.
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
                "AURA ENTERPRISES's SEO services have transformed our online presence. Our website now ranks higher in search
                results, and we've seen a significant increase in organic traffic and leads."
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
                "Working with AURA ENTERPRISES on our SEO strategy has been a game-changer for our business. Their team is
                knowledgeable, responsive, and always delivers results. Our online sales have increased significantly
                since we implemented their recommendations."
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
                "AURA ENTERPRISES's SEO consulting services have been invaluable for our company. Their team provided us with a
                clear and actionable strategy that has helped us improve our search engine rankings and attract more
                customers to our website."
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <p className="max-w-3xl mx-auto text-white/70">Find answers to common questions about our SEO services.</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {/* FAQ Item 1 */}
              <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">What is SEO and why is it important?</h3>
                  <p className="text-white/70">
                    SEO (Search Engine Optimization) is the process of optimizing your website to rank higher in search
                    engine results pages (SERPs). It's important because it helps you attract more organic traffic,
                    increase brand visibility, and generate leads.
                  </p>
                </div>
              </div>

              {/* FAQ Item 2 */}
              <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    How long does it take to see results from SEO?
                  </h3>
                  <p className="text-white/70">
                    The timeline for seeing results from SEO varies depending on various factors, including the
                    competitiveness of your industry, the current state of your website, and the strategies implemented.
                    It typically takes 3-6 months to see significant improvements in search engine rankings and organic
                    traffic.
                  </p>
                </div>
              </div>

              {/* FAQ Item 3 */}
              <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">What is included in your SEO services?</h3>
                  <p className="text-white/70">
                    Our SEO services include keyword research, on-page optimization, link building, content marketing,
                    technical SEO, and ongoing monitoring and reporting.
                  </p>
                </div>
              </div>

              {/* FAQ Item 4 */}
              <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    How do you measure the success of your SEO campaigns?
                  </h3>
                  <p className="text-white/70">
                    We measure the success of our SEO campaigns by tracking key metrics such as search engine rankings,
                    organic traffic, website conversions, and return on investment (ROI).
                  </p>
                </div>
              </div>

              {/* FAQ Item 5 */}
              <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">What is your approach to link building?</h3>
                  <p className="text-white/70">
                    We use a variety of ethical and effective link building strategies to increase your website's
                    authority and improve search engine rankings. Our approach includes guest posting, directory
                    submissions, and link outreach.
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
              Ready to <span className="text-gold">Dominate Search Results</span>?
            </h2>
            <p className="text-black/70 mb-10 text-lg">
              Contact us today to discuss your SEO needs and discover how our services can help your business grow in
              the digital landscape.
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

