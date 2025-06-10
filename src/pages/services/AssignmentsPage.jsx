import { CheckCircle, FileText, Edit, BookOpen, Users, ArrowRight } from 'lucide-react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

export default function AssignmentsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Professional Assignment Writing Services | AURA ENTERPRISES</title>
        <meta name='keywords' content='assignment writing services, essay writing help, research paper assistance, plagiarism-free assignments, coursework help, dissertation writing services, case study assistance, lab report writing, powerpoint presentation services, homework help' />
        <meta name='description' content='Struggling with your assignments? AURA ENTERPRISES provides expert assignment writing help for students across all academic levels. Get plagiarism-free, well-researched, and deadline-driven assignments tailored to your requirements.' />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative bg-black py-20 px-8">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block rounded-full bg-gold/20 px-4 py-1.5 text-sm font-medium text-gold mb-6">
              Academic Assistance
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Professional <span className="text-gold">Assignment Writing</span> Services
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Struggling with your assignments? Get plagiarism-free, well-researched, and deadline-driven assignments tailored to your requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="inline-flex h-12 items-center justify-center rounded-md bg-gold hover:bg-gold/90 px-8 py-3 text-lg font-medium text-black"
              >
                Get Started
              </Link>
              <a 
                href="#testimonials" 
                className="inline-flex h-12 items-center justify-center rounded-md border border-gold text-gold hover:bg-gold/10 px-8 py-3 text-lg font-medium"
              >
                Request a Quote
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
                Why Choose Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Expert Assignment Writing Services
              </h2>
              <p className="text-black/70 mb-6">
                Our expert writers ensure high-quality academic solutions tailored to your specific requirements and academic level.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-gold shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-black">Custom-Written</h3>
                    <p className="text-black/70">
                      Tailored to your subject & guidelines
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-gold shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-black">Plagiarism-Free</h3>
                    <p className="text-black/70">
                      100% original work with Turnitin reports
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-gold shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-black">On-Time Delivery</h3>
                    <p className="text-black/70">
                      Never miss a deadline
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-gold shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-black">Expert Writers</h3>
                    <p className="text-black/70">
                      Professionals from top universities
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-gold shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-black">Affordable Pricing</h3>
                    <p className="text-black/70">
                      Student-friendly rates
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-gold shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-black">24/7 Support</h3>
                    <p className="text-black/70">
                      Assistance anytime, anywhere
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link 
                  to="/contact" 
                  className="inline-flex h-12 items-center justify-center rounded-md border border-gold text-gold hover:bg-gold/10 px-8 py-3 text-lg font-medium"
                >
                  Talk to an Expert
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gold/20 rounded-lg"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gold/20 rounded-lg"></div>
              <div className="relative z-10 rounded-lg overflow-hidden border-2 border-gold/30">
                <img 
                  src="/placeholder.svg?height=600&width=800" 
                  alt="Student studying" 
                  className="w-full h-auto"
                />
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Comprehensive Assignment Writing Services
            </h2>
            <p className="max-w-3xl mx-auto text-white/70">
              We provide expert academic assistance across all subjects and levels
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-xl p-8">
              <div className="rounded-full bg-gold/10 p-3 w-fit mb-6">
                <FileText className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Essay Writing Help</h3>
              <p className="text-white/70 mb-6">
                Need a well-structured academic essay? We provide professional writing services for all essay types.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Argumentative essays - Present logical arguments</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Expository essays - Informative & research-backed</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Narrative essays - Engaging storytelling</span>
                </li>
              </ul>
            </div>
            
            {/* Service 2 */}
            <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-xl p-8">
              <div className="rounded-full bg-gold/10 p-3 w-fit mb-6">
                <Edit className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Research Paper Writing</h3>
              <p className="text-white/70 mb-6">
                Get in-depth research papers with proper citations and formatting
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Literature reviews & empirical studies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Accurate citations & formatting (APA, MLA, Harvard)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Data-driven analysis</span>
                </li>
              </ul>
            </div>
            
            {/* Service 3 */}
            <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-xl p-8">
              <div className="rounded-full bg-gold/10 p-3 w-fit mb-6">
                <BookOpen className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Case Study Assistance</h3>
              <p className="text-white/70 mb-6">
                Professional case study analysis for various academic disciplines
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Business, legal & medical case studies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Problem-solving & strategic analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Industry-specific insights</span>
                </li>
              </ul>
            </div>
            
            {/* Service 4 */}
            <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-xl p-8">
              <div className="rounded-full bg-gold/10 p-3 w-fit mb-6">
                <FileText className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Lab Report Writing</h3>
              <p className="text-white/70 mb-6">
                Accurate science lab reports with proper methodology and analysis
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Biology, Chemistry, and Physics experiments</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Proper structure & result interpretation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Graphs, tables & citations included</span>
                </li>
              </ul>
            </div>
            
            {/* Service 5 */}
            <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-xl p-8">
              <div className="rounded-full bg-gold/10 p-3 w-fit mb-6">
                <Edit className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">PowerPoint Presentations</h3>
              <p className="text-white/70 mb-6">
                Professionally designed academic presentations
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Visually engaging & informative</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Use charts, infographics & animations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Follow academic presentation guidelines</span>
                </li>
              </ul>
            </div>
            
            {/* Service 6 */}
            <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-xl p-8">
              <div className="rounded-full bg-gold/10 p-3 w-fit mb-6">
                <ArrowRight className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Coursework & Homework Help</h3>
              <p className="text-white/70 mb-6">
                Comprehensive academic support for all subjects
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Daily assignments & online quizzes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Subject-specific tutoring & assistance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Well-researched coursework solutions</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              How Our Assignment Writing Process Works
            </h2>
            <p className="max-w-3xl mx-auto text-black/70">
              Simple steps to get your custom-written assignment
            </p>
          </div>
          
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gold/30 -translate-y-1/2 z-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {/* Step 1 */}
              <div className="bg-white p-6 rounded-xl border border-black/10 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-gold text-black flex items-center justify-center text-xl font-bold mb-6 mx-auto">1</div>
                <h3 className="text-xl font-bold text-black mb-3 text-center">Submit Requirements</h3>
                <p className="text-black/70 text-center">
                  Tell us your topic, subject, deadline, and formatting style.
                </p>
              </div>
              
              {/* Step 2 */}
              <div className="bg-white p-6 rounded-xl border border-black/10 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-gold text-black flex items-center justify-center text-xl font-bold mb-6 mx-auto">2</div>
                <h3 className="text-xl font-bold text-black mb-3 text-center">Research & Writing</h3>
                <p className="text-black/70 text-center">
                  Our writers conduct thorough research and craft a well-structured assignment.
                </p>
              </div>
              
              {/* Step 3 */}
              <div className="bg-white p-6 rounded-xl border border-black/10 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-gold text-black flex items-center justify-center text-xl font-bold mb-6 mx-auto">3</div>
                <h3 className="text-xl font-bold text-black mb-3 text-center">Editing & Proofreading</h3>
                <p className="text-black/70 text-center">
                  We ensure error-free, plagiarism-free content with expert proofreading.
                </p>
              </div>
              
              {/* Step 4 */}
              <div className="bg-white p-6 rounded-xl border border-black/10 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-gold text-black flex items-center justify-center text-xl font-bold mb-6 mx-auto">4</div>
                <h3 className="text-xl font-bold text-black mb-3 text-center">Delivery & Revisions</h3>
                <p className="text-black/70 text-center">
                  Receive your assignment on time, with unlimited revisions if needed.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/contact" 
              className="inline-flex h-12 items-center justify-center rounded-md bg-gold hover:bg-gold/90 px-8 py-3 text-lg font-medium text-black"
            >
              Order Now
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-black px-8">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-block rounded-full bg-gold/20 px-4 py-1.5 text-sm font-medium text-gold mb-6">
              Success Stories
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              See Our Results
            </h2>
            <p className="max-w-3xl mx-auto text-white/70">
              Real examples of how we've helped students achieve academic success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="group overflow-hidden rounded-xl bg-black/40 backdrop-blur-sm border border-gold/20 p-8">
              <h3 className="text-xl font-bold text-white mb-3">University Research Paper</h3>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0" />
                  <span className="text-white/70">Grade: A+</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0" />
                  <span className="text-white/70">Improved research clarity & analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0" />
                  <span className="text-white/70">Turnaround Time: 48 hours</span>
                </div>
              </div>
              <a href="#" className="inline-flex items-center text-gold font-medium">
                View Case Study <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>

            {/* Project 2 */}
            <div className="group overflow-hidden rounded-xl bg-black/40 backdrop-blur-sm border border-gold/20 p-8">
              <h3 className="text-xl font-bold text-white mb-3">Business Case Study</h3>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0" />
                  <span className="text-white/70">Real-world business analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0" />
                  <span className="text-white/70">High engagement & structured insights</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0" />
                  <span className="text-white/70">Result: 95% score improvement</span>
                </div>
              </div>
              <a href="#" className="inline-flex items-center text-gold font-medium">
                View Case Study <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>

            {/* Project 3 */}
            <div className="group overflow-hidden rounded-xl bg-black/40 backdrop-blur-sm border border-gold/20 p-8">
              <h3 className="text-xl font-bold text-white mb-3">Dissertation Assistance</h3>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0" />
                  <span className="text-white/70">Comprehensive topic research & methodology</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0" />
                  <span className="text-white/70">Accurate citations & formatting</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0" />
                  <span className="text-white/70">Client Satisfaction: 98%</span>
                </div>
              </div>
              <a href="#" className="inline-flex items-center text-gold font-medium">
                View Case Study <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white px-8">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-block rounded-full bg-gold/20 px-4 py-1.5 text-sm font-medium text-gold mb-6">
              Testimonials
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              What Our Clients Say
            </h2>
            <p className="max-w-3xl mx-auto text-black/70">
              Hear from students who've achieved academic success with our help
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#D4AF37" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                ))}
              </div>
              <p className="text-black/70 mb-6 italic">
                "AURA ENTERPRISES provided me with a research paper that scored an A! The content was well-researched and formatted perfectly."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-black/10 overflow-hidden">
                  <img 
                    src="/placeholder.svg?height=100&width=100" 
                    alt="Emily J." 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-black">Emily J.</h4>
                  <p className="text-sm text-black/70">University Student</p>
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
              <p className="text-black/70 mb-6 italic">
                "Their assignment services helped me meet my deadlines while maintaining quality. Highly recommend!"
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-black/10 overflow-hidden">
                  <img 
                    src="/placeholder.svg?height=100&width=100" 
                    alt="David R." 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-black">David R.</h4>
                  <p className="text-sm text-black/70">MBA Student</p>
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
              <p className="text-black/70 mb-6 italic">
                "Exceptional service! My case study was detailed and well-analyzed. Worth every penny!"
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-black/10 overflow-hidden">
                  <img 
                    src="/placeholder.svg?height=100&width=100" 
                    alt="Sarah K." 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-black">Sarah K.</h4>
                  <p className="text-sm text-black/70">Business Student</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a 
              href="#testimonials" 
              className="inline-flex h-12 items-center justify-center rounded-md border border-gold text-gold hover:bg-gold/10 px-8 py-3 text-lg font-medium"
            >
              Read More Reviews
            </a>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="max-w-3xl mx-auto text-white/70">
              Answers to common questions about our assignment writing services
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {/* FAQ Item 1 */}
              <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Is your content plagiarism-free?</h3>
                  <p className="text-white/70">
                    Yes! We provide 100% original assignments with Turnitin reports for verification.
                  </p>
                </div>
              </div>
              
              {/* FAQ Item 2 */}
              <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">How fast can you complete my assignment?</h3>
                  <p className="text-white/70">
                    We offer 24-hour, 48-hour, and 3-day express delivery options.
                  </p>
                </div>
              </div>
              
              {/* FAQ Item 3 */}
              <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Do you provide revisions?</h3>
                  <p className="text-white/70">
                    Yes! We offer free revisions to ensure your satisfaction.
                  </p>
                </div>
              </div>
              
              {/* FAQ Item 4 */}
              <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">What payment methods do you accept?</h3>
                  <p className="text-white/70">
                    We accept PayPal, credit/debit cards, and bank transfers.
                  </p>
                </div>
              </div>
              
              {/* FAQ Item 5 */}
              <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">How do I order?</h3>
                  <p className="text-white/70">
                    Simply fill out our order form and let us handle the rest!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/contact" 
              className="inline-flex h-12 items-center justify-center rounded-md bg-gold hover:bg-gold/90 px-8 py-3 text-lg font-medium text-black"
            >
              Place Your Order
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Get Expert Assignment Help Today!
            </h2>
            <p className="text-black/70 mb-10 text-lg">
              Contact us now and achieve academic success with high-quality, custom-written assignments!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/contact" 
                className="inline-flex h-12 items-center justify-center rounded-md bg-gold hover:bg-gold/90 px-8 py-3 text-lg font-medium text-black"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}