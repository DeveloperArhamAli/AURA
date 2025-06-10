import { CheckCircle } from 'lucide-react'
import assignmentsCoverImage from "../../assets/images/assignments-images/assignments-coverImage.jpg"
import {
  Button, 
  ContactFooterComponent, 
  FaqCard, 
  GoldTextOverlay, 
  ProjectShowcaseCard, 
  ServiceCard, 
  SiteDetails, 
  Testimonial, 
  WorkCard,
  Header
} from "../../components/index.js"

import {
  assignmentsPageServices,
  assignmentsPageProcess,
  assignmentsPageProjects,
  assignmentsPageTestimonials,
  assignmentsPageFAQS
} from "../../data"

export default function AssignmentsPage() {
  return (
    <div className="flex min-h-screen flex-col">

      <SiteDetails
        title="Professional Assignment Writing Services"
        keywords="assignment writing services, essay writing help, research paper assistance, plagiarism-free assignments, coursework help, dissertation writing services, case study assistance, lab report writing, powerpoint presentation services, homework help"
        description="Struggling with your assignments? AURA ENTERPRISES provides expert assignment writing help for students across all academic levels. Get plagiarism-free, well-researched, and deadline-driven assignments tailored to your requirements."
      />

      <Header
        overlayText="Academic Assistance"
        normalText="Professional"
        coloredText="Assignment Writing Services"
        description="Struggling with your assignments? Get plagiarism-free, well-researched, and deadline-driven assignments tailored to your requirements."
      />
      
      <section className="py-20 bg-white px-8">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <GoldTextOverlay heading="Why Choose Us" />
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
            </div>
            
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gold/20 rounded-lg"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gold/20 rounded-lg"></div>
              <div className="relative z-10 rounded-lg overflow-hidden border-2 border-gold/30">
                <img 
                  src={assignmentsCoverImage} 
                  alt="Student studying" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black px-8">
        <div className="container">
          <div className="text-center mb-16">
            <GoldTextOverlay heading="Our Services" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Comprehensive Assignment Writing Services
            </h2>
            <p className="max-w-3xl mx-auto text-white/70">
              We provide expert academic assistance across all subjects and levels
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {assignmentsPageServices.map((service) => (
              <ServiceCard
                key={service.heading}
                {...service}
              />
            ))}

          </div>
        </div>
      </section>

      <section className="py-20 bg-white px-8">
        <div className="container">
          <div className="text-center mb-16">
            <GoldTextOverlay heading="Our Process" />
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

              {assignmentsPageProcess.map((step) => (
                <WorkCard  
                  key={step.step} 
                  variant='second'
                  {...step}
                />
              ))}

            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black px-8">
        <div className="container">
          <div className="text-center mb-16">
            <GoldTextOverlay heading="Success Stories" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              See Our Results
            </h2>
            <p className="max-w-3xl mx-auto text-white/70">
              Real examples of how we've helped students achieve academic success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {assignmentsPageProjects.map((project) => (
              <ProjectShowcaseCard
                key={project.heading}
                {...project}
              />
            ))}

          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 bg-white px-8">
        <div className="container">
          <div className="text-center mb-16">
            <GoldTextOverlay heading="Testimonials" />
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              What Our Clients Say
            </h2>
            <p className="max-w-3xl mx-auto text-black/70">
              Hear from students who've achieved academic success with our help
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {assignmentsPageTestimonials.map((testimonial) => (
              <Testimonial
                key={testimonial.name}
                {...testimonial}
              />
            ))}

          </div>
        </div>
      </section>

      <section className="py-20 bg-black px-8">
        <div className="container">
          <div className="text-center mb-16">
            <GoldTextOverlay heading="FAQ" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="max-w-3xl mx-auto text-white/70">
              Answers to common questions about our assignment writing services
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">

              {assignmentsPageFAQS.map((faq) => (
                <FaqCard
                  key={faq.question}
                  {...faq}
                />
              ))}

            </div>
          </div>
        </div>
      </section>

      <ContactFooterComponent
        startingText="Get Expert "
        coloredText="Assignment Help "
        endingText="Today!"
        description="Contact us now and achieve academic success with high-quality, custom-written assignments!"
        button={<Button to="/contact" className="inline-flex h-12 items-center justify-center rounded-md bg-gold hover:bg-gold/90 px-8 py-3 text-lg font-medium text-black" children="Get Started" />}
      />
        
    </div>
  )
}