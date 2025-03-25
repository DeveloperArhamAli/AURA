import { CheckCircle, ArrowRight, Globe, Code, BarChart, Megaphone, Star, Layers } from 'lucide-react'
import { Link } from 'react-router-dom'
import { WorkCard } from "../components/index.js"
import { Helmet } from 'react-helmet'

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Services | AURA ENTERPRISES</title>
        <meta name='keywords' content='digital marketing services, web development company, seo services, graphic design services, website optimization, e-commerce development, content marketing agency, social media management, branding services, professional video editing' />
        <meta name='description' content='AURA ENTERPRISES offers expert web development, SEO, graphic design, and digital marketing services. Boost your online presence with professional solutions tailored to your business needs.' />
      </Helmet>
      {/* Hero Section */}
      <section className="relative bg-black py-20">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
        <div className="container relative z-10 px-8">
          <div className="max-w-3xl">
            <div className="inline-block rounded-full bg-gold/20 px-4 py-1.5 text-sm font-medium text-gold mb-6">
              Our Services
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Comprehensive <span className="text-gold">Digital Solutions</span>
            </h1>
            <p className="text-xl text-white/70 mb-8">
              From web development to digital marketing, we offer a full range of services to help your business thrive online.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white px-8">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-block rounded-full bg-gold/20 px-4 py-1.5 text-sm font-medium text-gold mb-6">
              What We Offer
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Our Premium Services
            </h2>
            <p className="max-w-3xl mx-auto text-black/70">
              We provide end-to-end digital solutions tailored to your specific business needs and goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group rounded-xl border border-black/10 bg-white p-8 shadow-sm transition-all hover:shadow-md hover:border-gold/50">
              <div className="mb-6 rounded-full bg-gold/10 p-3 w-fit">
                <Globe className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Web Development</h3>
              <p className="text-black/70 mb-6">
                Custom websites and web applications built with the latest technologies to deliver exceptional user experiences.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-black/70">Responsive website design</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-black/70">E-commerce solutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-black/70">Content management systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-black/70">Web application development</span>
                </li>
              </ul>
              <a href="#web-development" className="inline-flex items-center text-gold font-medium">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
            
            {/* Service 2 */}
            <div className="group rounded-xl border border-black/10 bg-white p-8 shadow-sm transition-all hover:shadow-md hover:border-gold/50">
              <div className="mb-6 rounded-full bg-gold/10 p-3 w-fit">
                <Code className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">App Development</h3>
              <p className="text-black/70 mb-6">
                Native and cross-platform mobile applications designed to engage users and drive business growth.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-black/70">iOS app development</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-black/70">Android app development</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-black/70">Cross-platform solutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-black/70">App maintenance and updates</span>
                </li>
              </ul>
              <a href="#app-development" className="inline-flex items-center text-gold font-medium">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
            
            {/* Service 3 */}
            <div className="group rounded-xl border border-black/10 bg-white p-8 shadow-sm transition-all hover:shadow-md hover:border-gold/50">
              <div className="mb-6 rounded-full bg-gold/10 p-3 w-fit">
                <BarChart className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Data Analytics</h3>
              <p className="text-black/70 mb-6">
                Comprehensive data analysis and visualization to help you make informed business decisions.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-black/70">Business intelligence</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-black/70">Data visualization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-black/70">Performance tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-black/70">Insights and reporting</span>
                </li>
              </ul>
              <a href="#data-analytics" className="inline-flex items-center text-gold font-medium">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
            
            {/* Service 4 */}
            <div className="group rounded-xl border border-black/10 bg-white p-8 shadow-sm transition-all hover:shadow-md hover:border-gold/50">
              <div className="mb-6 rounded-full bg-gold/10 p-3 w-fit">
                <Megaphone className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Digital Marketing</h3>
              <p className="text-black/70 mb-6">
                Strategic marketing campaigns to increase your online visibility and drive targeted traffic to your business.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-black/70">Search engine marketing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-black/70">Social media marketing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-black/70">Email marketing campaigns</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-black/70">Content marketing</span>
                </li>
              </ul>
              <a href="#digital-marketing" className="inline-flex items-center text-gold font-medium">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
            
            {/* Service 5 */}
            <div className="group rounded-xl border border-black/10 bg-white p-8 shadow-sm transition-all hover:shadow-md hover:border-gold/50">
              <div className="mb-6 rounded-full bg-gold/10 p-3 w-fit">
                <Star className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">SEO Optimization</h3>
              <p className="text-black/70 mb-6">
                Improve your search engine rankings and drive organic traffic to your website with our SEO services.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-black/70">Keyword research and analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-black/70">On-page SEO optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-black/70">Link building strategies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-black/70">SEO audits and reporting</span>
                </li>
              </ul>
              <a href="#seo-optimization" className="inline-flex items-center text-gold font-medium">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
            
            {/* Service 6 */}
            <div className="group rounded-xl border border-black/10 bg-white p-8 shadow-sm transition-all hover:shadow-md hover:border-gold/50">
              <div className="mb-6 rounded-full bg-gold/10 p-3 w-fit">
                <Layers className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Brand Strategy</h3>
              <p className="text-black/70 mb-6">
                Develop a strong brand identity and strategy to differentiate your business in a competitive market.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-black/70">Brand identity development</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-black/70">Brand messaging and positioning</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-black/70">Visual identity design</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-black/70">Brand guidelines creation</span>
                </li>
              </ul>
              <a href="#brand-strategy" className="inline-flex items-center text-gold font-medium">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-black px-8">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-block rounded-full bg-gold/20 px-4 py-1.5 text-sm font-medium text-gold mb-6">
              Our Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              How We Work
            </h2>
            <p className="max-w-3xl mx-auto text-white/70">
              Our proven methodology ensures we deliver high-quality solutions that meet your specific needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            <WorkCard step={1} heading="Discovery" description="We start by understanding your business, goals, target audience, and requirements to lay a solid foundation for your project." />

            <WorkCard step={2} heading="Strategy" description="Based on our findings, we develop a comprehensive strategy and roadmap tailored to your specific needs and objectives." />
            
            <WorkCard step={3} heading="Implementation" description="Our team executes the strategy, developing and implementing solutions with regular updates and feedback." />
            
            <WorkCard step={4} heading="Optimization" description="We continuously monitor, analyze, and optimize your digital assets to ensure they deliver the best possible results." />

          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-white px-8">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-block rounded-full bg-gold/20 px-4 py-1.5 text-sm font-medium text-gold mb-6">
              Case Studies
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Our Success Stories
            </h2>
            <p className="max-w-3xl mx-auto text-black/70">
              See how we've helped businesses like yours achieve their digital goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <div className="group overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm transition-all hover:shadow-md hover:border-gold/50">
              <div className="relative overflow-hidden">
                <img 
                  src="/placeholder.svg?height=400&width=600" 
                  alt="Case Study" 
                  className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <div className="inline-block rounded-full bg-gold/10 px-3 py-1 text-xs font-medium text-gold mb-4">
                  Web Development
                </div>
                <h3 className="text-xl font-bold text-black mb-2">E-commerce Redesign</h3>
                <p className="text-black/70 mb-4">
                  Increased conversions by 150% through a complete redesign and optimization of an e-commerce platform.
                </p>
                <a href="#" className="inline-flex items-center text-gold font-medium">
                  View case study <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
            
            {/* Case Study 2 */}
            <div className="group overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm transition-all hover:shadow-md hover:border-gold/50">
              <div className="relative overflow-hidden">
                <img 
                  src="/placeholder.svg?height=400&width=600" 
                  alt="Case Study" 
                  className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <div className="inline-block rounded-full bg-gold/10 px-3 py-1 text-xs font-medium text-gold mb-4">
                  Digital Marketing
                </div>
                <h3 className="text-xl font-bold text-black mb-2">SEO & Content Strategy</h3>
                <p className="text-black/70 mb-4">
                  Achieved a 200% increase in organic traffic through a comprehensive SEO and content marketing strategy.
                </p>
                <a href="#" className="inline-flex items-center text-gold font-medium">
                  View case study <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
            
            {/* Case Study 3 */}
            <div className="group overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm transition-all hover:shadow-md hover:border-gold/50">
              <div className="relative overflow-hidden">
                <img 
                  src="/placeholder.svg?height=400&width=600" 
                  alt="Case Study" 
                  className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <div className="inline-block rounded-full bg-gold/10 px-3 py-1 text-xs font-medium text-gold mb-4">
                  App Development
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Mobile App Launch</h3>
                <p className="text-black/70 mb-4">
                  Developed and launched a successful mobile app with over 100,000 downloads in the first month.
                </p>
                <a href="#" className="inline-flex items-center text-gold font-medium">
                  View case study <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-black px-8">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-block rounded-full bg-gold/20 px-4 py-1.5 text-sm font-medium text-gold mb-6">
              Pricing
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Flexible Pricing Plans
            </h2>
            <p className="max-w-3xl mx-auto text-white/70">
              Choose the plan that best fits your business needs and budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-white rounded-xl overflow-hidden">
              <div className="p-8">
                <h3 className="text-xl font-bold text-black mb-2">Basic</h3>
                <p className="text-black/70 mb-6">Perfect for small businesses</p>
                <div className="flex items-end gap-1 mb-6">
                  <span className="text-4xl font-bold text-black">$999</span>
                  <span className="text-black/70 mb-1">/project</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-black/70">Basic website design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-black/70">Mobile responsive</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-black/70">Content management system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-black/70">Basic SEO setup</span>
                  </li>
                </ul>
                <a 
                  href="/contact" 
                  className="block w-full py-3 px-4 bg-black hover:bg-black/90 text-white text-center rounded-md font-medium"
                >
                  Get Started
                </a>
              </div>
            </div>
            
            {/* Pro Plan */}
            <div className="bg-white rounded-xl overflow-hidden relative">
              <div className="absolute top-0 inset-x-0 bg-gold text-black text-center py-1 font-medium text-sm">
                Most Popular
              </div>
              <div className="p-8 pt-12">
                <h3 className="text-xl font-bold text-black mb-2">Professional</h3>
                <p className="text-black/70 mb-6">Ideal for growing businesses</p>
                <div className="flex items-end gap-1 mb-6">
                  <span className="text-4xl font-bold text-black">$2,499</span>
                  <span className="text-black/70 mb-1">/project</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-black/70">Advanced website design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-black/70">E-commerce functionality</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-black/70">SEO optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-black/70">Social media integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-black/70">Content creation (5 pages)</span>
                  </li>
                </ul>
                <a 
                  href="/contact" 
                  className="block w-full py-3 px-4 bg-gold hover:bg-gold/90 text-black text-center rounded-md font-medium"
                >
                  Get Started
                </a>
              </div>
            </div>
            
            {/* Enterprise Plan */}
            <div className="bg-white rounded-xl overflow-hidden">
              <div className="p-8">
                <h3 className="text-xl font-bold text-black mb-2">Enterprise</h3>
                <p className="text-black/70 mb-6">For large organizations</p>
                <div className="flex items-end gap-1 mb-6">
                  <span className="text-4xl font-bold text-black">Custom</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-black/70">Custom web development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-black/70">Advanced e-commerce solutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-black/70">Comprehensive digital strategy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-black/70">Dedicated account manager</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-black/70">Priority support</span>
                  </li>
                </ul>
                <a 
                  href="/contact" 
                  className="block w-full py-3 px-4 bg-black hover:bg-black/90 text-white text-center rounded-md font-medium"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white px-8">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-block rounded-full bg-gold/20 px-4 py-1.5 text-sm font-medium text-gold mb-6">
              FAQ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Frequently Asked Questions
            </h2>
            <p className="max-w-3xl mx-auto text-black/70">
              Find answers to common questions about our services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {/* FAQ Item 1 */}
              <div className="border border-black/10 rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-black mb-2">How long does it take to complete a website?</h3>
                  <p className="text-black/70">
                    The timeline for website development varies depending on the complexity and scope of the project. A basic website typically takes 2-4 weeks, while more complex projects can take 8-12 weeks or more. We'll provide you with a detailed timeline during the initial consultation.
                  </p>
                </div>
              </div>
              
              {/* FAQ Item 2 */}
              <div className="border border-black/10 rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-black mb-2">Do you offer maintenance services after the project is completed?</h3>
                  <p className="text-black/70">
                    Yes, we offer ongoing maintenance and support services to ensure your website or application continues to perform optimally. We have various maintenance packages available to suit different needs and budgets.
                  </p>
                </div>
              </div>
              
              {/* FAQ Item 3 */}
              <div className="border border-black/10 rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-black mb-2">How do you measure the success of digital marketing campaigns?</h3>
                  <p className="text-black/70">
                    We use various metrics to measure the success of digital marketing campaigns, including website traffic, conversion rates, engagement rates, click-through rates, and return on investment (ROI). We provide regular reports and analytics to track performance and make data-driven adjustments.
                  </p>
                </div>
              </div>
              
              {/* FAQ Item 4 */}
              <div className="border border-black/10 rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-black mb-2">What platforms do you develop mobile apps for?</h3>
                  <p className="text-black/70">
                    We develop mobile applications for both iOS and Android platforms. We also offer cross-platform development solutions using frameworks like React Native and Flutter, which allow for a single codebase to be deployed on multiple platforms.
                  </p>
                </div>
              </div>
              
              {/* FAQ Item 5 */}
              <div className="border border-black/10 rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-black mb-2">Do you offer custom solutions or only pre-built templates?</h3>
                  <p className="text-black/70">
                    We primarily focus on custom solutions tailored to your specific business needs and goals. While we may use frameworks and libraries to accelerate development, each project is designed and developed uniquely for each client to ensure it aligns with their brand identity and requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Elevate Your <span className="text-gold">Digital Presence</span>?
            </h2>
            <p className="text-white/70 mb-10 text-lg">
              Contact us today to discuss your project and discover how our services can help your business grow in the digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact" 
                className="inline-flex h-12 items-center justify-center rounded-md bg-gold hover:bg-gold/90 px-8 py-3 text-lg font-medium text-black"
              >
                Get Started
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex h-12 items-center justify-center rounded-md border border-gold text-gold hover:bg-gold/10 px-8 py-3 text-lg font-medium"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
