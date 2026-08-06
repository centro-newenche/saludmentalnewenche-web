import { Helmet } from "react-helmet-async";
import { SITE_URL, SITE_NAME } from "./Seo";

export default function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo-newenche.png`,
    image: `${SITE_URL}/logo-newenche.png`,
    telephone: "+56978059311",
    email: "contacto@centronewenche.cl",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Santiago",
      addressCountry: "CL",
    },
    areaServed: "Región Metropolitana de Santiago",
    // TODO: agrega tus links reales de redes sociales aquí, ayuda a Google
    // a asociarlos con tu negocio.
    sameAs: [
      "https://www.instagram.com/saludmentalnewenche/",
      // "https://www.facebook.com/tu_pagina",
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}