import { CheckCircle, Search, TrendingUp, Code, Settings, ArrowRight, FileText } from "lucide-react"
import { Helmet } from "react-helmet"

export default function SeoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Helmet>
        <meta charSet="utf-8" />
        <title>SEO Services | AURA ENTERPRISES</title>
        <meta name="keywords" content="seo services, search engine optimizations, keyword research tools, on-page seo techniques, link building strategies, content marketing services, technical seo audit, seo consulting, local seo services, seo audit checklist" />
        <meta name="description" content="Boost your website's search rankings with AURA ENTERPRISES' expert SEO services. We specialize in keyword research, on-page SEO, link building, technical SEO, and content marketing to drive organic traffic and business growth. Get data-driven strategies for long-term success." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative bg-black py-20 px-8">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block rounded-full bg-gold/20 px-4 py-1.5 text-sm font-medium text-gold mb-6">
              SEO
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Dominate Search Results with Our <span className="text-gold">Expert SEO</span> Services
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Improve your website's visibility, drive organic traffic, and achieve sustainable growth with our data-driven SEO strategies tailored for long-term success.
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
      <section className="py-20 bg-white px-8">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block rounded-full bg-gold/20 px-4 py-1.5 text-sm font-medium text-gold mb-6">
                Our Approach
              </div>
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
                <img src="/placeholder.svg?height=600&width=800" alt="SEO" className="w-full h-auto" />
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Comprehensive SEO Solutions</h2>
            <p className="max-w-3xl mx-auto text-white/70">
              We offer a comprehensive range of SEO solutions to help your business grow online.
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
                Find high-impact keywords to drive relevant traffic.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Keyword analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Competitor research</span>
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
                Optimize your website for better rankings & user experience.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Title & meta tags</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Header & content optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Internal linking strategy</span>
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
                Build high-quality backlinks to boost domain authority.
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
                Create & promote SEO-friendly content that engages.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Blog posts & articles</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Infographics & guides</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Viral content strategies</span>
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
                Enhance your website performance & indexability.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Site speed optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Mobile & schema optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Crawlability & indexing fixes</span>
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
                Get an in-depth SEO strategy tailored to your business.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Website analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">SEO roadmap & strategy</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Ongoing consultation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white px-8">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-block rounded-full bg-gold/20 px-4 py-1.5 text-sm font-medium text-gold mb-6">
              Our Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">How We Improve Your SEO</h2>
            <p className="max-w-3xl mx-auto text-black/70">
              We follow a proven 4-step process to drive success.
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
                  We analyze your business goals, industry, and competitors.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white p-6 rounded-xl border border-black/10 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-gold text-black flex items-center justify-center text-xl font-bold mb-6 mx-auto">
                  2
                </div>
                <h3 className="text-xl font-bold text-black mb-3 text-center">Planning & Strategy</h3>
                <p className="text-black/70 text-center">
                  We create a custom SEO roadmap based on data-driven insights.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white p-6 rounded-xl border border-black/10 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-gold text-black flex items-center justify-center text-xl font-bold mb-6 mx-auto">
                  3
                </div>
                <h3 className="text-xl font-bold text-black mb-3 text-center">Implementation</h3>
                <p className="text-black/70 text-center">
                  Our team optimizes your website and builds authority through content & backlinks.
                </p>
              </div>

              {/* Step 4 */}
              <div className="bg-white p-6 rounded-xl border border-black/10 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-gold text-black flex items-center justify-center text-xl font-bold mb-6 mx-auto">
                  4
                </div>
                <h3 className="text-xl font-bold text-black mb-3 text-center">Monitoring & Reporting</h3>
                <p className="text-black/70 text-center">
                  We track performance and refine strategies for continued growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-black px-8">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-block rounded-full bg-gold/20 px-4 py-1.5 text-sm font-medium text-gold mb-6">
              Case Studies
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Recent SEO Success Stories</h2>
            <p className="max-w-3xl mx-auto text-white/70">
              See how we've helped businesses grow with our SEO expertise.
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
                    <h3 className="text-xl font-bold text-white mb-2">E-Commerce Growth</h3>
                    <p className="text-white/70 mb-2">
                      <span className="text-gold">+200% organic traffic | +150% online sales</span>
                    </p>
                    <p className="text-white/70 mb-4">
                      Industry: Fashion Retail
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
                    <h3 className="text-xl font-bold text-white mb-2">Corporate SEO Boost</h3>
                    <p className="text-white/70 mb-2">
                      <span className="text-gold">Higher search rankings | Brand awareness growth</span>
                    </p>
                    <p className="text-white/70 mb-4">
                      Industry: Financial Services
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
                    <h3 className="text-xl font-bold text-white mb-2">Local Business Visibility</h3>
                    <p className="text-white/70 mb-2">
                      <span className="text-gold">Increased local search rankings | More customer inquiries</span>
                    </p>
                    <p className="text-white/70 mb-4">
                      Industry: Restaurant Chain
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
      <section className="py-20 bg-white px-8">
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
                "AURA ENTERPRISES transformed our online presence. Our rankings improved, and organic traffic skyrocketed!"
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
                "Working with AURA ENTERPRISES was a game-changer. Our online sales increased significantly!"
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
                "Their SEO consulting services provided us with a clear strategy that improved our rankings!"
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
      <section className="py-20 bg-black px-8">
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
                    SEO (Search Engine Optimization) helps your website rank higher on Google, driving organic traffic and business growth.
                  </p>
                </div>
              </div>

              {/* FAQ Item 2 */}
              <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    How long does SEO take to show results?
                  </h3>
                  <p className="text-white/70">
                    SEO typically takes 3-6 months to see measurable improvements, depending on industry competition and website status.
                  </p>
                </div>
              </div>

              {/* FAQ Item 3 */}
              <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">What's included in your SEO services?</h3>
                  <p className="text-white/70">
                    We offer keyword research, on-page SEO, link building, content marketing, technical SEO, and ongoing reporting.
                  </p>
                </div>
              </div>

              {/* FAQ Item 4 */}
              <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    How do you measure SEO success?
                  </h3>
                  <p className="text-white/70">
                    We track rankings, traffic, conversions, and ROI to ensure growth.
                  </p>
                </div>
              </div>

              {/* FAQ Item 5 */}
              <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">What's your approach to link building?</h3>
                  <p className="text-white/70">
                    We focus on white-hat strategies like guest posting, directory submissions, and outreach for high-quality backlinks.
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
              Ready to <span className="text-gold">Dominate Google Rankings</span>?
            </h2>
            <p className="text-black/70 mb-10 text-lg">
              Contact us today and start growing your business with expert SEO strategies.
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