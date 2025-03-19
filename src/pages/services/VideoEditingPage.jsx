import { CheckCircle, Video, Film, Play, Edit, ArrowRight } from 'lucide-react'

export default function VideoEditingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-black py-20">
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
                Cinematic Video Editing Solutions
              </h2>
              <p className="text-black/70 mb-6">
                At AURA ENTERPRISES, we specialize in professional video editing services that transform raw footage into compelling, polished videos. Our team of experienced editors combines technical expertise with creative vision to deliver high-quality videos that engage your audience and achieve your goals.
              </p>
              <p className="text-black/70 mb-8">
                Whether you need corporate videos, social media content, promotional videos, or event coverage, we have the skills and experience to bring your vision to life. We focus on storytelling, pacing, and visual aesthetics to create videos that leave a lasting impression.
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
                  src="/placeholder.svg?height=600&width=800" 
                  alt="Video Editing" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gold/80 flex items-center justify-center cursor-pointer">
                    <Play className="h-8 w-8 text-black" fill="black" />
                  </div>
                </div>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-xl p-8">
              <div className="rounded-full bg-gold/10 p-3 w-fit mb-6">
                <Film className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Corporate Videos</h3>
              <p className="text-white/70 mb-6">
                Professional corporate videos that communicate your brand message effectively and engage your target audience.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Company profiles</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Product demonstrations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Training videos</span>
                </li>
              </ul>
            </div>
            
            {/* Service 2 */}
            <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-xl p-8">
              <div className="rounded-full bg-gold/10 p-3 w-fit mb-6">
                <Video className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Social Media Videos</h3>
              <p className="text-white/70 mb-6">
                Engaging, platform-specific videos optimized for social media to increase engagement and reach.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Instagram Reels & Stories</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">TikTok videos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">YouTube content</span>
                </li>
              </ul>
            </div>
            
            {/* Service 3 */}
            <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-xl p-8">
              <div className="rounded-full bg-gold/10 p-3 w-fit mb-6">
                <Edit className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Commercial & Promotional</h3>
              <p className="text-white/70 mb-6">
                Compelling commercials and promotional videos that showcase your products or services and drive conversions.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">TV commercials</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Web advertisements</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Product launches</span>
                </li>
              </ul>
            </div>
            
            {/* Service 4 */}
            <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-xl p-8">
              <div className="rounded-full bg-gold/10 p-3 w-fit mb-6">
                <Film className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Event Coverage</h3>
              <p className="text-white/70 mb-6">
                Professional event video editing that captures the essence and highlights of your corporate or personal events.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Conferences & seminars</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Corporate events</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Weddings & celebrations</span>
                </li>
              </ul>
            </div>
            
            {/* Service 5 */}
            <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-xl p-8">
              <div className="rounded-full bg-gold/10 p-3 w-fit mb-6">
                <Video className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Educational Content</h3>
              <p className="text-white/70 mb-6">
                Engaging educational and instructional videos that effectively communicate complex information.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Tutorial videos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">E-learning content</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Explainer videos</span>
                </li>
              </ul>
            </div>
            
            {/* Service 6 */}
            <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-xl p-8">
              <div className="rounded-full bg-gold/10 p-3 w-fit mb-6">
                <ArrowRight className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Post-Production Services</h3>
              <p className="text-white/70 mb-6">
                Comprehensive post-production services to enhance and finalize your video content.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Color grading & correction</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Sound design & mixing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">Motion graphics & VFX</span>
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
              How We Create Your Videos
            </h2>
            <p className="max-w-3xl mx-auto text-black/70">
              Our proven video editing process ensures we deliver high-quality videos that meet your specific needs.
            </p>
          </div>
          
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gold/30 -translate-y-1/2 z-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {/* Step 1 */}
              <div className="bg-white p-6 rounded-xl border border-black/10 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-gold text-black flex items-center justify-center text-xl font-bold mb-6 mx-auto">1</div>
                <h3 className="text-xl font-bold text-black mb-3 text-center">Consultation</h3>
                <p className="text-black/70 text-center">
                  We start by understanding your vision, goals, target audience, and specific requirements for your video project.
                </p>
              </div>
              
              {/* Step 2 */}
              <div className="bg-white p-6 rounded-xl border border-black/10 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-gold text-black flex items-center justify-center text-xl font-bold mb-6 mx-auto">2</div>
                <h3 className="text-xl font-bold text-black mb-3 text-center">Planning & Storyboarding</h3>
                <p className="text-black/70 text-center">
                  We create a detailed plan and storyboard for your video, outlining the structure, flow, and key elements.
                </p>
              </div>
              
              {/* Step 3 */}
              <div className="bg-white p-6 rounded-xl border border-black/10 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-gold text-black flex items-center justify-center text-xl font-bold mb-6 mx-auto">3</div>
                <h3 className="text-xl font-bold text-black mb-3 text-center">Editing & Post-Production</h3>
                <p className="text-black/70 text-center">
                  Our editors bring your video to life, applying professional editing techniques, color grading, sound design, and visual effects.
                </p>
              </div>
              
              {/* Step 4 */}
              <div className="bg-white p-6 rounded-xl border border-black/10 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-gold text-black flex items-center justify-center text-xl font-bold mb-6 mx-auto">4</div>
                <h3 className="text-xl font-bold text-black mb-3 text-center">Review & Delivery</h3>
                <p className="text-black/70 text-center">
                  We provide you with a draft for review, make any necessary revisions, and deliver the final video in your preferred format.
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
              Recent Video Projects
            </h2>
            <p className="max-w-3xl mx-auto text-white/70">
              Take a look at some of our recent video editing projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="group overflow-hidden rounded-xl">
              <div className="relative overflow-hidden">
                <img 
                  src="/placeholder.svg?height=400&width=600" 
                  alt="Project" 
                  className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">Corporate Brand Video</h3>
                    <p className="text-white/70 mb-4">
                      A corporate brand video for a technology company showcasing their products and services.
                    </p>
                    <a href="#" className="inline-flex items-center text-gold font-medium">
                      Watch Video <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gold/80 flex items-center justify-center cursor-pointer">
                    <Play className="h-8 w-8 text-black" fill="black" />
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
                  className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">Product Launch Video</h3>
                    <p className="text-white/70 mb-4">
                      A dynamic product launch video highlighting key features and benefits.
                    </p>
                    <a href="#" className="inline-flex items-center text-gold font-medium">
                      Watch Video <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gold/80 flex items-center justify-center cursor-pointer">
                    <Play className="h-8 w-8 text-black" fill="black" />
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
                  className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">Social Media Campaign</h3>
                    <p className="text-white/70 mb-4">
                      A series of engaging social media videos for a marketing campaign.
                    </p>
                    <a href="#" className="inline-flex items-center text-gold font-medium">
                      Watch Video <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gold/80 flex items-center justify-center cursor-pointer">
                    <Play className="h-8 w-8 text-black" fill="black" />
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
                  className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">Event Highlight Reel</h3>
                    <p className="text-white/70 mb-4">
                      A highlight reel capturing the key moments of a corporate conference.
                    </p>
                    <a href="#" className="inline-flex items-center text-gold font-medium">
                      Watch Video <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gold/80 flex items-center justify-center cursor-pointer">
                    <Play className="h-8 w-8 text-black" fill="black" />
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
                  className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">Explainer Video</h3>
                    <p className="text-white/70 mb-4">
                      An animated explainer video simplifying complex concepts for a tech company.
                    </p>
                    <a href="#" className="inline-flex items-center text-gold font-medium">
                      Watch Video <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gold/80 flex items-center justify-center cursor-pointer">
                    <Play className="h-8 w-8 text-black" fill="black" />
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
                  className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">Training Video Series</h3>
                    <p className="text-white/70 mb-4">
                      A series of training videos for employee onboarding and development.
                    </p>
                    <a href="#" className="inline-flex items-center text-gold font-medium">
                      Watch Video <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gold/80 flex items-center justify-center cursor-pointer">
                    <Play className="h-8 w-8 text-black" fill="black" />
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
              Don't just take our word for it. Here's what our clients have to say about our video editing services.
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
                "AURA ENTERPRISES delivered an exceptional corporate video that perfectly captured our brand essence. Their attention to detail and creative approach transformed our raw footage into a compelling story that resonated with our audience."
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
                  <h4 className="font-semibold text-black">Sarah Thompson</h4>
                  <p className="text-sm text-black/70">Marketing Director, TechInnovate</p>
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
                "The social media videos created by AURA ENTERPRISES have significantly increased our engagement and reach. Their team understood our brand voice and created content that resonated with our target audience. Highly recommended!"
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
                  <h4 className="font-semibold text-black">David Rodriguez</h4>
                  <p className="text-sm text-black/70">Social Media Manager, Brand Forward</p>
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
                "AURA ENTERPRISES created an amazing highlight video for our annual conference. They captured all the key moments and created a compelling narrative that showcased the event perfectly. Their team was professional and delivered on time."
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
                  <p className="text-sm text-black/70">Event Manager, Global Conferences</p>
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
              Find answers to common questions about our video editing services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {/* FAQ Item 1 */}
              <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">How long does it take to edit a video?</h3>
                  <p className="text-white/70">
                    The timeline for video editing depends on the complexity and length of the project. A simple 1-2 minute video typically takes 3-5 business days, while more complex projects can take 1-2 weeks or more. We'll provide you with a detailed timeline during the initial consultation.
                  </p>
                </div>
              </div>
              
              {/* FAQ Item 2 */}
              <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">What formats do you deliver videos in?</h3>
                  <p className="text-white/70">
                    We can deliver videos in various formats depending on your needs, including MP4, MOV, AVI, and more. We also optimize videos for different platforms such as YouTube, Instagram, Facebook, and TikTok, ensuring they meet the specific requirements of each platform.
                  </p>
                </div>
              </div>
              
              {/* FAQ Item 3 */}
              <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Do you provide revisions?</h3>
                  <p className="text-white/70">
                    Yes, we include up to two rounds of revisions in our standard packages to ensure you're completely satisfied with the final product. Additional revisions can be accommodated at an extra cost.
                  </p>
                </div>
              </div>
              
              {/* FAQ Item 4 */}
              <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">What if I don't have high-quality footage?</h3>
                  <p className="text-white/70">
                    While high-quality footage is ideal, our skilled editors can work with various quality levels of footage. We use advanced techniques to enhance and optimize your existing footage. We can also supplement with stock footage, animations, or graphics if needed.
                  </p>
                </div>
              </div>
              
              {/* FAQ Item 5 */}
              <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Do you provide video filming services as well?</h3>
                  <p className="text-white/70">
                    Yes, we offer comprehensive video production services, including filming. Our team can handle the entire process from concept development to filming and editing, providing you with a complete end-to-end solution.
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
              Ready to Create <span className="text-gold">Compelling Videos</span>?
            </h2>
            <p className="text-black/70 mb-10 text-lg">
              Contact us today to discuss your video project and discover how our video editing services can help your business communicate effectively.
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
