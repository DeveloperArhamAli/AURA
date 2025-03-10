import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-black py-20">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
        <div className="container relative z-10 px-8">
          <div className="max-w-3xl">
            <div className="inline-block rounded-full bg-gold/20 px-4 py-1.5 text-sm font-medium text-gold mb-6">
              Contact Us
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Get In <span className="text-gold">Touch</span>
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Have a question or ready to start your project? We're here to help. Reach out to us today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white px-8">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-black mb-6">Contact Information</h2>
                <p className="text-black/70 mb-8">
                  Feel free to reach out to us through any of the following channels. We're always ready to assist you
                  with your digital needs.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-gold/10 p-3 w-fit">
                      <Phone className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-black">Phone</h3>
                      <p className="text-black/70">+1 (123) 456-7890</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-gold/10 p-3 w-fit">
                      <Mail className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-black">Email</h3>
                      <p className="text-black/70">info@AURA ENTERPRISESagency.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-gold/10 p-3 w-fit">
                      <MapPin className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-black">Address</h3>
                      <p className="text-black/70">
                        123 Business Avenue, Suite 500
                        <br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-gold/10 p-3 w-fit">
                      <Clock className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-black">Business Hours</h3>
                      <p className="text-black/70">
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-black mb-4">Connect With Us</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center text-gold hover:bg-gold/20 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center text-gold hover:bg-gold/20 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center text-gold hover:bg-gold/20 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center text-gold hover:bg-gold/20 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl border border-black/10 p-8">
              <h2 className="text-2xl font-bold text-black mb-6">Send Us a Message</h2>
              <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-black/70 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 rounded-md border border-black/20 focus:outline-none focus:ring-2 focus:ring-gold/50"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-black/70 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 rounded-md border border-black/20 focus:outline-none focus:ring-2 focus:ring-gold/50"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-black/70 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-md border border-black/20 focus:outline-none focus:ring-2 focus:ring-gold/50"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="phone" className="block text-sm font-medium text-black/70 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-md border border-black/20 focus:outline-none focus:ring-2 focus:ring-gold/50"
                    placeholder="+1 (123) 456-7890"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="service" className="block text-sm font-medium text-black/70 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 rounded-md border border-black/20 focus:outline-none focus:ring-2 focus:ring-gold/50"
                  >
                    <option value="">Select a service</option>
                    <option value="web-development">Web Development</option>
                    <option value="app-development">App Development</option>
                    <option value="data-analytics">Data Analytics</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="seo-optimization">SEO Optimization</option>
                    <option value="brand-strategy">Brand Strategy</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-black/70 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full px-4 py-3 rounded-md border border-black/20 focus:outline-none focus:ring-2 focus:ring-gold/50"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-gold hover:bg-gold/90 text-black text-center rounded-md font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-black px-8">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Location</h2>
            <p className="max-w-2xl mx-auto text-white/70">
              Visit our office to meet our team and discuss your project in person.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden h-[400px] relative">
            <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d598.0469982894678!2d67.11482530381893!3d24.90124132877002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33922488f3725%3A0x3bfde63eb356ebc0!2sMillennium%20Mall!5e0!3m2!1sen!2s!4v1741609792565!5m2!1sen!2s" className="w-full h-full" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Frequently Asked Questions</h2>
            <p className="max-w-3xl mx-auto text-black/70">Find answers to common questions about working with us.</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {/* FAQ Item 1 */}
              <div className="border border-black/10 rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-black mb-2">
                    What information should I prepare before contacting you?
                  </h3>
                  <p className="text-black/70">
                    It's helpful to have a general idea of your project goals, timeline, and budget. Any existing brand
                    guidelines, website content, or specific requirements will also be useful for our initial
                    discussion.
                  </p>
                </div>
              </div>

              {/* FAQ Item 2 */}
              <div className="border border-black/10 rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-black mb-2">
                    How quickly will I receive a response after submitting my inquiry?
                  </h3>
                  <p className="text-black/70">
                    We typically respond to all inquiries within 24 business hours. For urgent matters, we recommend
                    calling our office directly.
                  </p>
                </div>
              </div>

              {/* FAQ Item 3 */}
              <div className="border border-black/10 rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-black mb-2">Do you work with clients internationally?</h3>
                  <p className="text-black/70">
                    Yes, we work with clients globally. Our team is experienced in managing remote projects and can
                    accommodate different time zones for meetings and communications.
                  </p>
                </div>
              </div>

              {/* FAQ Item 4 */}
              <div className="border border-black/10 rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-black mb-2">
                    What happens after I submit my contact form?
                  </h3>
                  <p className="text-black/70">
                    After submitting your contact form, one of our team members will reach out to schedule an initial
                    consultation. During this call, we'll discuss your project in detail, answer any questions, and
                    outline the next steps.
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
              Ready to Start Your <span className="text-gold">Digital Journey</span>?
            </h2>
            <p className="text-white/70 mb-10 text-lg">
              Contact us today and let's discuss how we can help your business thrive in the digital landscape.
            </p>
            <a
              href="#"
              className="inline-flex h-12 items-center justify-center rounded-md bg-gold hover:bg-gold/90 px-8 py-3 text-lg font-medium text-black"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

