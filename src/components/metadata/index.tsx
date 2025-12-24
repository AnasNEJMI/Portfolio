import Head from 'next/head'
import React from 'react'

const Metadata = () => {
  return (
    <Head>
        <title>
          Anas NEJMI - Développeur Full-Stack
        </title>
        <meta
          name="description"
          content="Développeur web full-stack passionné, authentique et rigoureux. Je conçois des applications web modernes, performantes et sur-mesure pour répondre aux besoins des entreprises."
        />
        <meta
          name="keywords"
          content="développeur full-stack, react, vite, nextjs, PHP, Java, Laravel, TailwindCSS"
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <meta property="og:site_name" content="Anas NEJMI" />
        <meta property="og:locale" content="fr_FR" />
        <meta
          property="og:title"
          content="Anas NEJMI - Développeur Full-Stack"
        />
        <meta
          property="og:description"
          content="Développeur web full-stack passionné, authentique et rigoureux. Je conçois des applications web modernes, performantes et sur-mesure pour répondre aux besoins des entreprises."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://anasnejmi.com" />
        <meta
          property="og:image"
          content="/images/anasnejmi-og.webp"
        />
        <meta property="og:image:alt" content="Anas NEJMI" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="957" />
        <meta property="og:image:height" content="700" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Anas NEJMI - Développeur Full-Stack"
        />
        <meta
          name="twitter:description"
          content="Développeur web full-stack passionné, authentique et rigoureux. Je conçois des applications web modernes, performantes et sur-mesure pour répondre aux besoins des entreprises."
        />
        <meta
          name="twitter:image"
          content="/images/anasnejmi-og.webp"
        />
        {/* <link rel="canonical" href="https://www.anasnejmi.com/about"/> */}
        <link rel="shortcut icon" href="/static/favicon.ico" />
    </Head>
  )
}

export default Metadata