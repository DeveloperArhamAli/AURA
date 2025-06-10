import { Link } from "react-router-dom"
import { Facebook, Globe, Instagram, Linkedin, Mail, Twitter } from "lucide-react"

function Footer() {
  const services = [
    {
      name: "Web Development",
      slug: "/services/web-development",
    },
    {
      name: "Video Editing",
      slug: "/services/video-editing"
    },
    {
      name: "Graphic Designing",
      slug: "/services/graphic-designing",
    },
    {
      name: "Photography",
      slug: "/services/photography",
    },
    {
      name: "SEO Optimization",
      slug: "/services/seo",
    },
    {
      name: "Assignments",
      slug: "/services/assignments",
    }
  ]

  const company = [
    {
      name: "About Us",
      slug: "/about",
    },
    {
      name: "Services",
      slug: "/services",
    },
    {
      name: "Contact",
      slug: "/contact",
    }
  ]

  return (
    <footer className="bg-black border-t px-8 border-gold/20 pt-12 pb-6">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Globe className="h-6 w-6 text-gold" />
            <span className="text-xl font-bold text-white">AURA ENTERPRISES</span>
          </div>
          <p className="text-white/70 mb-6">
            Premium digital services to help your business thrive in the online world.
          </p>
          <div className="flex gap-4">
            <Link
              to="#"
              className="h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center text-gold hover:bg-gold/20 transition-colors">
              <Facebook />
            </Link>
            <Link
              to="#"
              className="h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center text-gold hover:bg-gold/20 transition-colors">
              <Twitter />
            </Link>
            <Link
              to="#"
              className="h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center text-gold hover:bg-gold/20 transition-colors">
              <Instagram />
            </Link>
            <Link
              to="#"
              className="h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center text-gold hover:bg-gold/20 transition-colors">
              <Linkedin />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
          <ul className="space-y-2">
            {services.map((service) => (
              <div key={service.slug}>
                  <Link to={service.slug} className="text-white/70 hover:text-gold transition-colors">{service.name}</Link>
              </div>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
          <ul className="space-y-2">
            {company.map((company) => (
              <div key={company.slug}>
                <Link to={company.slug} className="text-white/70 hover:text-gold transition-colors">{company.name}</Link>
              </div>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <Mail className="h-5 w-5 text-gold shrink-0 mt-0.5" />
              <a href="mailto:auraenterprises360@gmail.com" className="text-white/70">auraenterprises360@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gold/20 mt-12 pt-6 flex flex-col md:flex-row items-center">
        <p className="text-white/50 text-sm">Copyright © {new Date().getFullYear()} AURA ENTERPRISES. All rights reserved.</p>
      </div>
    </div>
    </footer>
  )
}
export default Footer