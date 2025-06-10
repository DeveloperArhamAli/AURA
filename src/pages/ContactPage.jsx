import { Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import {
  ContactForm, 
  FaqCard, 
  ContactFooterComponent, 
  Button,
  Header,
  SiteDetails
} from "../components/index"

import { contactPageFAQS } from "../data"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">

      <SiteDetails
        title="Contact Us"
      />

      <Header
        overlayText="Contact Us"
        normalText="Get In"
        coloredText="Touch"
        description="Have a question or ready to start your project? We're here to help. Reach out to us today."
      />

      <section className="py-20 bg-white px-8">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
                      <Mail className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-black">Email</h3>
                      <a href="mailto:auraenterprises360@gmail.com" target="_blank"><p className="text-black/70">auraenterprises360@gmail.com</p></a>
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
                    <Facebook />
                  </a>
                  <a
                    href="#"
                    className="h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center text-gold hover:bg-gold/20 transition-colors"
                  >
                    <Twitter />
                  </a>
                  <a
                    href="#"
                    className="h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center text-gold hover:bg-gold/20 transition-colors"
                  >
                    <Instagram />
                  </a>
                  <a
                    href="#"
                    className="h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center text-gold hover:bg-gold/20 transition-colors"
                  >
                    <Linkedin />
                  </a>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

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

      <section className="py-20 bg-black px-8">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-block rounded-full bg-gold/20 px-4 py-1.5 text-sm font-medium text-gold mb-6">
              FAQ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <p className="max-w-3xl mx-auto text-white/70">Find answers to common questions about working with us.</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">

              {contactPageFAQS.map((faq, index) => (
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
        startingText="Ready to Start Your "
        coloredText="Digital Journey"
        endingText="?"
        description="Contact us today and let's discuss how we can help your business thrive in the digital landscape."
        button={<Button to="#" className="inline-flex h-12 items-center justify-center rounded-md bg-gold hover:bg-gold/90 px-8 py-3 text-lg font-medium text-black" children="Schedule a Consultation" />}
      />

    </div>
  )
}

