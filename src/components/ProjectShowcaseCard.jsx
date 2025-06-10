import { ArrowRight } from "lucide-react"

function ProjectShowcaseCard({
    image,
    heading,
    description,
    linkText= "View Project",
    slug,
}) {
    return (
        <div className="group overflow-hidden rounded-xl">
            <div className="relative overflow-hidden">
                <img  src={image} alt="Project"  className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/65 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-2">{heading}</h3>
                        <p className="text-white/70 mb-4">{description}</p>
                        <a href={slug} className="inline-flex items-center text-gold font-medium">
                            {linkText} <ArrowRight className="ml-1 h-4 w-4" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProjectShowcaseCard