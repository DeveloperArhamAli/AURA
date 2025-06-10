import { ArrowRight, BookOpen, BookOpenCheck, Building, CalendarDays, Camera, CheckCircle, Code, Database, Edit, FileImage, FileText, Film, Globe, Image, Layout, Palette, PenTool, Search, Server, Settings, TrendingUp, Users, UsersRound, Video } from "lucide-react"

const allServices = {
    heading: "Our Premium Services",
    description: "We offer a wide range of digital services to help your business grow and succeed in the digital landscape.",
    services: [
        {
            icon: <Globe className="h-6 w-6 text-gold" />,
            name: "Web Development",
            description: "Building responsive, high-performing websites tailored to your needs.",
            slug: "web-development"
        },
        {
            icon: <Video className="h-6 w-6 text-gold" />,
            name: "Video Editing",
            description: "Crafting high-quality, engaging videos with seamless transitions and effects.",
            slug: "video-editing"
        },
        {
            icon: <FileImage className="h-6 w-6 text-gold" />,
            name: "Graphic Designing",
            description: "Creating visually stunning designs that enhance brand identity.",
            slug: "graphic-designing"
        },
        {
            icon: <Camera className="h-6 w-6 text-gold" />,
            name: "Photography",
            description: "Capturing professional and artistic images for various needs.",
            slug: "photography"
        },
        {
            icon: <CheckCircle className="h-6 w-6 text-gold" />,
            name: "SEO Optimization",
            description: "Optimizing websites to rank higher and drive organic traffic.",
            slug: "seo"
        },
        {
            icon: <BookOpenCheck className="h-6 w-6 text-gold" />,
            name: "Assignments",
            description: "Providing well-structured, high-quality academic and professional assignments.",
            slug: "assignments"
        }
    ]
}

const webDevelopmentPageServices = {
    heading: "Comprehensive Web Development Services",
    description: "We offer a full range of web development services to meet your specific business needs.",
    services: [
        {
            icon: <Layout className="h-6 w-6 text-gold" />,
            heading: "Website Design & Development",
            description: "Custom website design and development tailored to your brand identity and business goals. We create responsive websites that look great on all devices."
        },
        {
            icon: <Database className="h-6 w-6 text-gold" />,
            heading: "E-Commerce Development",
            description: "Powerful e-commerce solutions that help you sell products or services online. We build secure, user-friendly online stores that drive conversions."
        },
        {
            icon: <Code className="h-6 w-6 text-gold" />,
            heading: "Web Application Development",
            description: "Custom web applications designed to solve specific business challenges. We build scalable, secure, and user-friendly web applications."
        },
        {
            icon: <Server className="h-6 w-6 text-gold" />,
            heading: "CMS Development",
            description: "Content management system development that makes it easy for you to update and manage your website content without technical knowledge."
        },
        {
            icon: <Globe className="h-6 w-6 text-gold" />,
            heading: "Website Maintenance",
            description: "Ongoing website maintenance and support to ensure your website remains secure, up-to-date, and performing optimally."
        },
        {
            icon: <ArrowRight className="h-6 w-6 text-gold" />,
            heading: "Website Redesign",
            description: "Transform your outdated website into a modern, high-performing digital asset that reflects your brand and meets your business goals."
        }
    ]
}

const videoEditingPageServices = {
    heading: "Comprehensive Video Editing Services",
    description: "We offer a full range of video editing services to meet your specific needs.",
    services: [
        {
            icon: <Film className="h-6 w-6 text-gold" />,
            heading: "Professional Video Editing",
            description: "Our expert editors use industry-leading software to craft seamless and engaging videos that captivate your audience."
        },
        {
            icon: <Video className="h-6 w-6 text-gold" />,
            heading: "Custom Animations",
            description: "Enhance your videos with tailor-made animations that add a unique flair and effectively convey your message."
        },
        {
            icon: <Edit className="h-6 w-6 text-gold" />,
            heading: "Color Grading",
            description: "Achieve the perfect mood and tone with our precise color grading services, ensuring visual consistency across all scenes."
        },
        {
            icon: <Film className="h-6 w-6 text-gold" />,
            heading: "Sound Design",
            description: "From background scores to sound effects, we ensure your video's audio is crisp, clear, and immersive."
        },
        {
            icon: <Video className="h-6 w-6 text-gold" />,
            heading: "Motion Graphics",
            description: "Incorporate dynamic motion graphics to make your content more engaging and visually appealing."
        },
        {
            icon: <ArrowRight className="h-6 w-6 text-gold" />,
            heading: "Consultation Services",
            description: "Not sure where to start? Our team offers professional consultation to guide your project from concept to completion."
        },
    ]
}

const graphicDesigningPageServices = [
    {
        icon: <Palette className="h-6 w-6 text-gold" />,
        heading: "Brand Identity Design",
        description: "Comprehensive brand identity design that communicates your brand's personality, values, and unique selling proposition."
    },
    {
        icon: <Layout className="h-6 w-6 text-gold" />,
        heading: "Marketing & Advertising",
        description: "Eye-catching marketing and advertising materials that drive engagement and conversions for your campaigns.",
    },
    {
        icon: <Image className="h-6 w-6 text-gold" />,
        heading: "Print Design",
        description: "Professional print design that effectively communicates your message and reinforces your brand identity.",
    },
    {
        icon: <PenTool className="h-6 w-6 text-gold" />,
        heading: "Packaging Design",
        description: "Distinctive packaging design that stands out on shelves and enhances the customer experience with your product.",
    },
    {
        icon: <Layout className="h-6 w-6 text-gold" />,
        heading: "Digital Design",
        description: "Engaging digital designs that enhance user experience and drive engagement across digital platforms.",
    },
    {
        icon: <ArrowRight className="h-6 w-6 text-gold" />,
        heading: "Illustration & Infographics",
        description: "Custom illustrations and infographics that simplify complex information and enhance visual storytelling.",
    }
]

const photographyPageServices = [
    {
        icon: <Image className="h-6 w-6 text-gold" />,
        heading: "Portrait Photography",
        description: "Capture your personality with high-quality portrait photography. Perfect for personal branding, social media, and professional portfolios."
    },
    {
        icon: <Users className="h-6 w-6 text-gold" />,
        heading: "Wedding Photography",
        description: "Your special day deserves extraordinary photos. Our expert wedding photographers ensure every emotion and detail is preserved forever."
    },
    {
        icon: <Camera className="h-6 w-6 text-gold" />,
        heading: "Landscape Photography",
        description: "We bring nature to life with stunning landscape photography. Ideal for travel, tourism, and artistic collections."
    },
    {
        icon: <CalendarDays className="h-6 w-6 text-gold" />,
        heading: "Event Photography",
        description: "From corporate events to private parties, we capture every key moment with professionalism and creativity."
    },
    {
        icon: <Building className="h-6 w-6 text-gold" />,
        heading: "Real Estate Photography",
        description: "High-quality real estate photography to showcase properties in the best light, perfect for marketing and sales."
    },
    {
        icon: <UsersRound className="h-6 w-6 text-gold" />,
        heading: "Family Photography",
        description: "Create lifelong memories with heartwarming family photography that captures love and connection."
    }
]

const seoPageServices = [
    {
        icon: <Search className="h-6 w-6 text-gold" />,
        heading: "Keyword Research",
        description: "Find high-impact keywords to drive relevant traffic."
    },
    {
        icon: <Code className="h-6 w-6 text-gold" />,
        heading: "On-Page Optimization",
        description: "Optimize your website for better rankings & user experience.",
    },
    {
        icon: <TrendingUp className="h-6 w-6 text-gold" />,
        heading: "Link Building",
        description: "Build high-quality backlinks to boost domain authority.",
    },
    {
        icon: <FileText className="h-6 w-6 text-gold" />,
        heading: "Content Marketing",
        description: "Create & promote SEO-friendly content that engages.",
    },
    {
        icon: <Settings className="h-6 w-6 text-gold" />,
        heading: "Technical SEO",
        description: "Enhance your website performance & indexability.",
    },
    {
        icon: <ArrowRight className="h-6 w-6 text-gold" />,
        heading: "SEO Audits & Consulting",
        description: "Get an in-depth SEO strategy tailored to your business.",
    },
]

const assignmentsPageServices = [
    {
        icon: <FileText className="h-6 w-6 text-gold" />,
        heading: "Essay Writing Help",
        description: "Need a well-structured academic essay? We provide professional writing services for all essay types."
    },
    {
        icon: <Edit className="h-6 w-6 text-gold" />,
        heading: "Research Paper Writing",
        description: "Get in-depth research papers with proper citations and formatting",
    },
    {
        icon: <BookOpen className="h-6 w-6 text-gold" />,
        heading: "Case Study Assistance",
        description: "Professional case study analysis for various academic disciplines",
    },
    {
        icon: <FileText className="h-6 w-6 text-gold" />,
        heading: "Lab Report Writing",
        description: "Accurate science lab reports with proper methodology and analysis",
    },
    {
        icon: <Edit className="h-6 w-6 text-gold" />,
        heading: "PowerPoint Presentations",
        description: "Professionally designed academic presentations",
    },
    {
        icon: <ArrowRight className="h-6 w-6 text-gold" />,
        heading: "Coursework & Homework Help",
        description: "Comprehensive academic support for all subjects",
    },
]

export {
    webDevelopmentPageServices,
    videoEditingPageServices,
    allServices,
    graphicDesigningPageServices,
    photographyPageServices,
    seoPageServices,
    assignmentsPageServices,
}