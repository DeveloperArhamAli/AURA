const servicesPagePricing = {
    heading: "Flexible Pricing Plans",
    description: "Choose the plan that best fits your business needs and budget.",
    plans: [
        {
            name: "Basic",
            description: "Perfect for small businesses",
            price: 999,
            features: [
                "Basic website design",
                "Mobile responsive",
                "Content management system",
                "Basic SEO setup"
            ]
        },
        {
            name: "Professional",
            description: "Ideal for growing businesses",
            price: "2,499",
            features: [
                "Advanced website design",
                "E-commerce functionality",
                "SEO optimization",
                "Social media integration",
                "Content creation (5 pages)"
            ],
            isPro: true
        },
        {
            name: "Enterprise",
            description: "For large organizations",
            price: "Custom",
            features: [
                "Custom web development",
                "Advanced e-commerce solutions",
                "Comprehensive digital strategy",
                "Dedicated account manager",
                "Priority support"
            ],
            isPriceCustom: true
        }
    ]
}

export {
    servicesPagePricing,
}