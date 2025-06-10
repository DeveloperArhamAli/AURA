import { CheckCircle } from 'lucide-react'
import videoEditingCoverImage from "../../assets/images/video-images/video-editing-coverImage.jpg"
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
  videoEditingPageServices,
  videoEditingPageProcess,
  videoEditingPageProjects,
  videoEditingPageTestimonials,
  videoEditingPageFAQS
} from "../../data"

export default function VideoEditingPage() {
  return (
    <div className="flex min-h-screen flex-col">

      <SiteDetails
        title="Video Editing"
        keywords="video editing, software, music video, after effects,	videography, video production, video production services,	video company, videography company"
        description="Enhance your content with Aura Enterprises’ professional video editing services. From cinematic wedding films to dynamic social media content, we craft visually stunning videos that engage and captivate. Get seamless transitions, color grading, and expert editing tailored to your needs. Elevate your videos today."
      />

      <Header
        overlayText="Video Editing"
        normalText="Professional"
        coloredText="Video Editing"
        description="Transform your raw footage into compelling, professional videos that captivate your audience and elevate your brand."
      />

      <section className="py-20 bg-white px-8">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <GoldTextOverlay heading="Our Approach" />
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Transform Your Vision into Reality
              </h2>
              <p className="text-black/70 mb-6">
                At Aura Enterprises, we specialize in delivering top-notch video editing services that bring your ideas to life. Whether it's a promotional video, a music video, or a corporate presentation, our team ensures exceptional quality and creativity.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-gold shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-black">Creative Storytelling</h3>
                    <p className="text-black/70">
                      Compelling narratives that engage
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-gold shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-black">Technical Excellence</h3>
                    <p className="text-black/70">
                      Professional-grade editing techniques
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-gold shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-black">Quick Turnaround</h3>
                    <p className="text-black/70">
                      Efficient delivery without compromising quality
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-gold shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-black">Brand Consistency</h3>
                    <p className="text-black/70">
                      Videos aligned with your brand identity
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
                  src={videoEditingCoverImage}
                  alt="Video Editing" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="container">
          <div className="text-center mb-16">
            <GoldTextOverlay heading="Our Services" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{videoEditingPageServices.heading}</h2>
            <p className="max-w-3xl mx-auto text-white/70">{videoEditingPageServices.description}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 pr-0">

            {videoEditingPageServices.services.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
              />
            ))}

          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <GoldTextOverlay heading="Our Process" />
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              {videoEditingPageProcess.heading}
            </h2>
            <p className="max-w-3xl mx-auto text-black/70">
              {videoEditingPageProcess.description}
            </p>
          </div>
          
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gold/30 -translate-y-1/2 z-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 px-8 pr-0">

              {videoEditingPageProcess.process.map((process, index) => (
                <WorkCard
                  key={index}
                  variant='second'
                  {...process}
                />
              ))}
              
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-black">
        <div className="container">
          <div className="text-center mb-16">
            <GoldTextOverlay heading="Our Work" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {videoEditingPageProjects.heading}
            </h2>
            <p className="max-w-3xl mx-auto text-white/70">
              {videoEditingPageProjects.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 pr-0">

            {videoEditingPageProjects.projects.map((project, index) => (
              <ProjectShowcaseCard
                key={index}
                {...project}
              />
            ))}
            
          </div>
        </div>
      </section>

      <section className="py-20 bg-white px-8">
        <div className="container">
          <div className="text-center mb-16">
            <GoldTextOverlay heading="Testimonials" />
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              {videoEditingPageTestimonials.heading}
            </h2>
            <p className="max-w-3xl mx-auto text-black/70">
              {videoEditingPageTestimonials.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
          {videoEditingPageTestimonials.testimonials.map((testimonial, index) => (
              <Testimonial
                key={index}
                {...testimonial}
              />
            ))}
            
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="container">
          <div className="text-center mb-16">
            <GoldTextOverlay heading="FAQ" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="max-w-3xl mx-auto text-white/70">
              Find answers to common questions about our video editing services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto px-8 pr-0">
            <div className="space-y-6">

              {videoEditingPageFAQS.map((faq, index) => (
                <FaqCard
                  key={index}
                  {...faq}
                />
              ))}

            </div>
          </div>
        </div>
      </section>

      <ContactFooterComponent
        startingText="Ready to Create"
        coloredText="Compelling Videos"
        endingText="?"
        description="Contact us today to discuss your video project and discover how our video editing services can help your business communicate effectively."
        button={<Button to="/contact" className="inline-flex h-12 items-center justify-center rounded-md bg-gold hover:bg-gold/90 px-8 py-3 text-lg font-medium text-black">Get Started</Button>} 
      />
      
    </div>
  )
}
