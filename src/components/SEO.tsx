import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO = ({ 
  title = "Ventilateur Portable Mini - Fraîcheur Garantie | 25 Dinars",
  description = "Découvrez notre ventilateur portable ultra-silencieux et rechargeable par USB. Fraîcheur garantie partout, tout le temps. Livraison gratuite en Tunisie. Prix: 25 dinars.",
  keywords = "ventilateur portable, ventilateur mini, ventilateur USB, fraîcheur, climatisation portable, Tunisie, livraison gratuite",
  image = "https://votre-domaine.com/og-image.jpg",
  url = "https://votre-domaine.com/",
  type = "website"
}: SEOProps) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Zydos i-commerce" />
      <meta property="og:locale" content="fr_FR" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO; 