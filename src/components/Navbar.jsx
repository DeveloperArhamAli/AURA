import { Braces, Menu } from "lucide-react"
import Button from "./Button"
import Logo from "./Logo"

function Navbar() {
    const navLinks = [
        {
            name: "Home",
            slug: "/",
        },
        {
            name: "About",
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
        <header className="sticky top-0 z-50 w-full border-b border-gold/20 bg-black/95 backdrop-blur px-8">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            {/* <Globe className="h-6 w-6 text-gold" /> */}
            <span className="text-xl font-bold text-white">
              <Logo />
            </span>
          </div>
          <nav className="hidden md:flex gap-6">
            {navLinks.map((navLink) => (
              <div key={navLink.slug}>
                <Button to={navLink.slug} className="text-sm font-medium text-white hover:text-gold transition-colors" children={navLink.name} />
              </div>
            ))}
          </nav>
          <div className="md:hidden">
            <Menu />
          </div>
        </div>
      </header>
    )
}

export default Navbar