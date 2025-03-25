import { CheckCircle, Video, Film, Edit, ArrowRight } from 'lucide-react'
import image from "../../assets/office.jpg"
import Person1 from "../../assets/person1.jpeg"
import Person2 from "../../assets/peson2.jpeg"
import Person3 from "../../assets/person3.jpeg"
import { Button, ContactFooterComponent, FaqCard, ProjectShowcaseCard, ServiceCard, Testimonial, WorkCard } from "../../components/index.js"
import { Helmet } from 'react-helmet'

export default function VideoEditingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Video Editing - Aura Enterprises</title>
        <meta name='keywords' content='video editing, software, music video, after effects,	videography, video production, video production services,	video company, videography company' />
        <meta name='description' content='Enhance your content with Aura Enterprises’ professional video editing services. From cinematic wedding films to dynamic social media content, we craft visually stunning videos that engage and captivate. Get seamless transitions, color grading, and expert editing tailored to your needs. Elevate your videos today.' />
      </Helmet>
      {/* Hero Section */}
      <section className="relative bg-black py-20 px-8">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block rounded-full bg-gold/20 px-4 py-1.5 text-sm font-medium text-gold mb-6">
              Video Editing
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Professional <span className="text-gold">Video Editing</span> Services
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Transform your raw footage into compelling, professional videos that captivate your audience and elevate your brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/contact" className="inline-flex h-12 items-center justify-center rounded-md bg-gold hover:bg-gold/90 px-8 py-3 text-lg font-medium text-black" children="Get Started"/>
              <a href="#portfolio" className="inline-flex h-12 items-center justify-center rounded-md border border-gold text-gold hover:bg-gold/10 px-8 py-3 text-lg font-medium">View Portfolio</a>
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
                  src={image}
                  alt="Video Editing" 
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
              Comprehensive Video Editing Services
            </h2>
            <p className="max-w-3xl mx-auto text-white/70">
              We offer a full range of video editing services to meet your specific needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 pr-0">

            <ServiceCard icon={<Film className="h-6 w-6 text-gold" />} heading="Professional Video Editing" description="Our expert editors use industry-leading software to craft seamless and engaging videos that captivate your audience." />
            
            <ServiceCard icon={<Video className="h-6 w-6 text-gold" />} heading="Custom Animations" description="Enhance your videos with tailor-made animations that add a unique flair and effectively convey your message." />
            
            <ServiceCard icon={<Edit className="h-6 w-6 text-gold" />} heading="Color Grading" description="Achieve the perfect mood and tone with our precise color grading services, ensuring visual consistency across all scenes."  />
            
            <ServiceCard icon={<Film className="h-6 w-6 text-gold" />} heading="Sound Design" description="From background scores to sound effects, we ensure your video's audio is crisp, clear, and immersive." />
            
            <ServiceCard icon={<Video className="h-6 w-6 text-gold" />} heading="Motion Graphics" description="Incorporate dynamic motion graphics to make your content more engaging and visually appealing." />
            
            <ServiceCard icon={<ArrowRight className="h-6 w-6 text-gold" />} heading="Consultation Services" description="Not sure where to start? Our team offers professional consultation to guide your project from concept to completion." />

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
              How We Create Your Videos
            </h2>
            <p className="max-w-3xl mx-auto text-black/70">
              Our proven video editing process ensures we deliver high-quality videos that meet your specific needs.
            </p>
          </div>
          
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gold/30 -translate-y-1/2 z-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 px-8 pr-0">

              <WorkCard variant='second' step={1} heading="Consultation" description="We start by understanding your vision, goals, target audience, and specific requirements for your video project." />
              
              <WorkCard variant='second' step={2} heading="Planning & Storyboarding" description="We create a detailed plan and storyboard for your video, outlining the structure, flow, and key elements." />
              
              <WorkCard variant='second' step={3} heading="Editing & Post-Production" description="Our editors bring your video to life, applying professional editing techniques, color grading, sound design, and visual effects." />
              
              <WorkCard variant='second' step={4} heading="Review & Delivery" description="We provide you with a draft for review, make any necessary revisions, and deliver the final video in your preferred format." />
              
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
              Recent Video Projects
            </h2>
            <p className="max-w-3xl mx-auto text-white/70">
              Explore some of our latest work that showcases our expertise and creativity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 pr-0">

            <ProjectShowcaseCard image={image} heading="Corporate Brand Video" description="A corporate brand video for a technology company showcasing their products and services." linkText="Watch Video" to="#" />
            
            <ProjectShowcaseCard image={image} heading="Product Launch Video" description="A dynamic product launch video highlighting key features and benefits." linkText="Watch Video" to="#" />
            
            <ProjectShowcaseCard image={image} heading="Social Media Campaign" description="A series of engaging social media videos for a marketing campaign." linkText="Watch Video" to="#" />

            <ProjectShowcaseCard image={image} heading="Corporate Brand Video" description="A corporate brand video for a technology company showcasing their products and services." linkText="Watch Video" to="#" />
            
            <ProjectShowcaseCard image={image} heading="Product Launch Video" description="A dynamic product launch video highlighting key features and benefits." linkText="Watch Video" to="#" />
            
            <ProjectShowcaseCard image={image} heading="Social Media Campaign" description="A series of engaging social media videos for a marketing campaign." linkText="Watch Video" to="#" />
            
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
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              What Our Clients Say
            </h2>
            <p className="max-w-3xl mx-auto text-black/70">
              Don't just take our word for it. Here's what our clients have to say about our video editing services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <Testimonial stars={5} description="Working with AURA ENTERPRISES has been a game-changer for our business. Their web development team created a stunning website that perfectly represents our brand and has significantly increased our online conversions."name="Sarah Johnson" designation="CEO, TechInnovate" image={Person1} />

            <Testimonial stars={5} description="The digital marketing strategy developed by AURA ENTERPRISES helped us reach our target audience effectively. We've seen a 200% increase in organic traffic and a significant boost in lead generation." name="Michael Chen" designation="Marketing Director, GrowthHub" image={Person2} />

            <Testimonial stars={5} description="AURA ENTERPRISES delivered an exceptional mobile app that exceeded our expectations. Their attention to detail and commitment to quality is impressive. We highly recommend their services." name="Emily Rodriguez" designation="Product Manager, AppSolutions" image={Person3} />
            
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
              Find answers to common questions about our video editing services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto px-8 pr-0">
            <div className="space-y-6">

              <FaqCard question="How long does it take to edit a video?" answer="The timeline for video editing depends on the complexity and length of the project. A simple 1-2 minute video typically takes 3-5 business days, while more complex projects can take 1-2 weeks or more. We'll provide you with a detailed timeline during the initial consultation." />
              
              <FaqCard question="What formats do you deliver videos in?" answer="We can deliver videos in various formats depending on your needs, including MP4, MOV, AVI, and more. We also optimize videos for different platforms such as YouTube, Instagram, Facebook, and TikTok, ensuring they meet the specific requirements of each platform." />
              
              <FaqCard question="Do you provide revisions?" answer="Yes, we include up to two rounds of revisions in our standard packages to ensure you're completely satisfied with the final product. Additional revisions can be accommodated at an extra cost." />
              
              <FaqCard question="What if I don't have high-quality footage?" answer="While high-quality footage is ideal, our skilled editors can work with various quality levels of footage. We use advanced techniques to enhance and optimize your existing footage. We can also supplement with stock footage, animations, or graphics if needed." />
              
              <FaqCard question="Do you provide video filming services as well?" answer="Yes, we offer comprehensive video production services, including filming. Our team can handle the entire process from concept development to filming and editing, providing you with a complete end-to-end solution." />

            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
