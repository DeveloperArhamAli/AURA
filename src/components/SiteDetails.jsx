import { Helmet } from "react-helmet-async"

function SiteDetails({
    title,
    keywords,
    description
}) {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{title} | Aura Enterprises</title>
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
        </Helmet>
    )
}

export default SiteDetails