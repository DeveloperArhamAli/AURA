import { CheckCircle, Globe, Users, Award, Building, Clock } from 'lucide-react'
import AgencyImage from "../assets/agency.jpg"
import Person1 from "../assets/person1.jpeg"
import Person2 from "../assets/peson2.jpeg"
import Person3 from "../assets/person3.jpeg"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-black py-20">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
        <div className="container relative z-10 px-8">
          <div className="max-w-3xl">
            <div className="inline-block rounded-full bg-gold/20 px-4 py-1.5 text-sm font-medium text-gold mb-6">
              About Us
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              We Are <span className="text-gold">AURA ENTERPRISES</span>
            </h1>
            <p className="text-xl text-white/70 mb-8">
              A team of digital experts passionate about creating exceptional online experiences that drive business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white px-8">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block rounded-full bg-gold/20 px-4 py-1.5 text-sm font-medium text-gold mb-6">
                Our Story
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                From Humble Beginnings to Digital Excellence
              </h2>
              <p className="text-black/70 mb-6">
                Founded in 2010, AURA ENTERPRISES began as a small web design studio with a vision to help businesses establish a meaningful online presence. Over the years, we've evolved into a full-service digital agency, expanding our expertise across various digital domains.
              </p>
              <p className="text-black/70 mb-6">
                Our journey has been defined by continuous learning, innovation, and a relentless pursuit of excellence. Today, we're proud to be a trusted digital partner for businesses of all sizes, from startups to established enterprises.
              </p>
              <p className="text-black/70">
                What sets us apart is our holistic approach to digital solutions. We don't just build websites or run marketing campaigns; we create comprehensive digital strategies that align with your business goals and drive measurable results.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gold/20 rounded-lg"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gold/20 rounded-lg"></div>
              <div className="relative z-10 rounded-lg overflow-hidden border-2 border-gold/30">
                <img 
                  src={AgencyImage}
                  alt="Our agency office" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-black px-8">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-block rounded-full bg-gold/20 px-4 py-1.5 text-sm font-medium text-gold mb-6">
              Our Values
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Principles That Guide Our Work
            </h2>
            <p className="max-w-3xl mx-auto text-white/70">
              At AURA ENTERPRISES, our values are the foundation of everything we do. They shape our culture, guide our decisions, and define how we work with our clients and each other.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-xl p-8">
              <div className="rounded-full bg-gold/10 p-3 w-fit mb-6">
                <CheckCircle className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Excellence</h3>
              <p className="text-white/70">
                We are committed to delivering the highest quality in everything we do, from the smallest details to the biggest projects.
              </p>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-xl p-8">
              <div className="rounded-full bg-gold/10 p-3 w-fit mb-6">
                <Users className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Collaboration</h3>
              <p className="text-white/70">
                We believe in the power of teamwork and partnership, working closely with our clients to achieve shared goals.
              </p>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-xl p-8">
              <div className="rounded-full bg-gold/10 p-3 w-fit mb-6">
                <Globe className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
              <p className="text-white/70">
                We embrace change and continuously explore new technologies and approaches to stay ahead in the digital landscape.
              </p>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-xl p-8">
              <div className="rounded-full bg-gold/10 p-3 w-fit mb-6">
                <Award className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Integrity</h3>
              <p className="text-white/70">
                We operate with honesty, transparency, and ethical standards in all our business practices and client relationships.
              </p>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-xl p-8">
              <div className="rounded-full bg-gold/10 p-3 w-fit mb-6">
                <Building className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Accountability</h3>
              <p className="text-white/70">
                We take ownership of our work and are accountable for the results we deliver, ensuring we meet and exceed expectations.
              </p>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-xl p-8">
              <div className="rounded-full bg-gold/10 p-3 w-fit mb-6">
                <Clock className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Adaptability</h3>
              <p className="text-white/70">
                We are flexible and responsive to changing needs, adapting our strategies to ensure the best outcomes for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white px-8">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-block rounded-full bg-gold/20 px-4 py-1.5 text-sm font-medium text-gold mb-6">
              Our Team
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Meet the Experts Behind AURA ENTERPRISES
            </h2>
            <p className="max-w-3xl mx-auto text-black/70">
              Our talented team of digital professionals brings diverse skills and experiences to deliver exceptional results for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img 
                  src={Person1}
                  alt="Team Member" 
                  className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex gap-3">
                    <a href="#" className="h-8 w-8 rounded-full bg-gold/80 flex items-center justify-center text-black hover:bg-gold transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    <a href="#" className="h-8 w-8 rounded-full bg-gold/80 flex items-center justify-center text-black hover:bg-gold transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-black">Michael Chen</h3>
              <p className="text-gold font-medium">CEO & Founder</p>
            </div>
            
            {/* Team Member 2 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img 
                  src={Person2}
                  alt="Team Member" 
                  className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex gap-3">
                    <a href="#" className="h-8 w-8 rounded-full bg-gold/80 flex items-center justify-center text-black hover:bg-gold transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    <a href="#" className="h-8 w-8 rounded-full bg-gold/80 flex items-center justify-center text-black hover:bg-gold transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-black">Sarah Johnson</h3>
              <p className="text-gold font-medium">Creative Director</p>
            </div>
            
            {/* Team Member 3 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img 
                  src={Person3}
                  alt="Team Member" 
                  className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex gap-3">
                    <a href="#" className="h-8 w-8 rounded-full bg-gold/80 flex items-center justify-center text-black hover:bg-gold transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    <a href="#" className="h-8 w-8 rounded-full bg-gold/80 flex items-center justify-center text-black hover:bg-gold transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-black">David Rodriguez</h3>
              <p className="text-gold font-medium">Lead Developer</p>
            </div>
            
            {/* Team Member 4 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img 
                  src={Person1} 
                  alt="Team Member" 
                  className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex gap-3">
                    <a href="#" className="h-8 w-8 rounded-full bg-gold/80 flex items-center justify-center text-black hover:bg-gold transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    <a href="#" className="h-8 w-8 rounded-full bg-gold/80 flex items-center justify-center text-black hover:bg-gold transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-black">Emily Patel</h3>
              <p className="text-gold font-medium">Marketing Strategist</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black px-8">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-gold mb-2">12+</div>
              <p className="text-white">Years of Experience</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-gold mb-2">250+</div>
              <p className="text-white">Projects Completed</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-gold mb-2">120+</div>
              <p className="text-white">Happy Clients</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-gold mb-2">15</div>
              <p className="text-white">Industry Awards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-white px-8">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-block rounded-full bg-gold/20 px-4 py-1.5 text-sm font-medium text-gold mb-6">
              Our Clients
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Trusted by Leading Brands
            </h2>
            <p className="max-w-3xl mx-auto text-black/70">
              We're proud to work with a diverse range of clients across various industries.
            </p>
          </div>
          
          {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex items-center justify-center p-4">
                <img 
                  src="/placeholder-logo.svg" 
                  alt={`Client Logo ${i+1}`} 
                  className="max-h-12 opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>  */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-white/70 mb-10 text-lg">
              Let's discuss how we can help your business achieve its digital goals.
            </p>
            <a 
              href="/contact" 
              className="inline-flex h-12 items-center justify-center rounded-md bg-gold hover:bg-gold/90 px-8 py-3 text-lg font-medium text-black"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}