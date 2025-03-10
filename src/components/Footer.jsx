import { Link } from "react-router-dom"
import { Facebook, Globe, Instagram, Linkedin, Twitter } from "lucide-react"

function Footer() {
  const services = [
    {
      name: "Web Development",
      slug: "/services#web-development",
    },
    {
      name: "Graphic Designing",
      slug: "/services#graphic-designing",
    },
    {
      name: "SEO",
      slug: "/services#SEO",
    },
    {
      name: "Photography",
      slug: "/services#photography",
    },
    {
      name: "Video Editing",
      slug: "/services#video-editing",
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
      <footer className="bg-black border-t px-8 border-gold/20 py-12">
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
                  className="text-gold mt-1"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <a href="https://wa.me/+923174708980"><span className="text-white/70">+92 317 4708980</span></a>
              </li>
              <li className="flex items-start gap-2">
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
                  className="text-gold mt-1"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span className="text-white/70">info@AURA ENTERPRISES.com</span>
              </li>
              <li className="flex items-start gap-2">
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
                  className="text-gold mt-1"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span className="text-white/70">
                  123 Business Avenue, Suite 500
                  <br />
                  New York, NY 10001
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">© {new Date().getFullYear()} AURA ENTERPRISES. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="#" className="text-white/50 text-sm hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-white/50 text-sm hover:text-gold transition-colors">
              Terms of Service
            </Link>
            <Link to="#" className="text-white/50 text-sm hover:text-gold transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
      </footer>
    )
}
export default Footer