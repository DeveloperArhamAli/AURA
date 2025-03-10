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
        // <header className="fixed top-0 w-full z-50 border-b bg-linear-to-r from-black via-yellow-800 to-yellow-500">
        //     <nav className="container mx-auto px-4">
        //         <div className="flex items-center justify-between h-16">
        //             <div className="flex items-center gap-1">
        //                 <Logo className="text-xl" />
        //             </div>

        //             {/* Desktop Menu */}

        //             <div className="hidden md:flex items-center gap-8">
        //                 {navLinks.map((navLink) => (
        //                     <div key={navLink.slug}>
        //                         <NavLink to={navLink.slug} className={({isActive}) => `${isActive ? "text-black font-bold" : "font-medium"}`}>
        //                             <span >{navLink.name}</span>
        //                         </NavLink>
        //                     </div>
        //                 ))}
        //             </div>

        //             {/* Mobile Menu Button */}
        //             <div
        //             className="md:hidden"
        //             onClick={() => document.getElementById("mobile-menu")?.classList.toggle("hidden")}
        //             >
        //             <svg
        //                 xmlns="http://www.w3.org/2000/svg"
        //                 className="h-6 w-6"
        //                 fill="none"
        //                 viewBox="0 0 24 24"
        //                 stroke="currentColor"
        //             >
        //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        //             </svg>
        //             </div>
        //         </div>

        //         {/* Mobile Menu */}
        //         <div id="mobile-menu" className="hidden md:hidden pb-4">
        //             <div className="flex flex-col gap-5">
        //                 {navLinks.map((navLink) => (
        //                     <div key={navLink.slug}>
        //                         <NavLink to={navLink.slug} className={({isActive}) => `${isActive ? "text-black font-bold" : "font-medium"}`}>
        //                             <span>{navLink.name}</span>
        //                         </NavLink>
        //                     </div>
        //                 ))}                        
        //             </div>
        //         </div>
        //     </nav>
        // </header>

        <header className="sticky top-0 z-50 w-full border-b border-gold/20 bg-black/95 backdrop-blur px-8">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            {/* <Globe className="h-6 w-6 text-gold" /> */}
            <span className="text-xl font-bold text-white">
              <Logo />
            </span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Button to="/services" className="text-sm font-medium text-white hover:text-gold transition-colors">
              Services
            </Button>
            <Button to="/about" className="text-sm font-medium text-white hover:text-gold transition-colors">
              About
            </Button>
            <Button to="#testimonials" className="text-sm font-medium text-white hover:text-gold transition-colors">
              Testimonials
            </Button>
            <Button to="/contact" className="text-sm font-medium text-white hover:text-gold transition-colors">
              Contact
            </Button>
          </nav>
          <Button className="bg-gold hover:bg-gold/90 hover:text-white transition duration-300 text-black border-transparent" children="Contact"></Button>
        </div>
      </header>
    )
}

export default Navbar