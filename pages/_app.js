import Head from 'next/head'
import { ThemeProvider } from 'components'
import 'styles/global.style'
import opengraph from 'public/opengraph.jpg'
import favicon from 'public/favicon.ico'
import favicon16 from 'public/favicon-16x16.png'
import favicon32 from 'public/favicon-32x32.png'
import favicon96 from 'public/favicon-96x96.png'
import appleIcon57 from 'public/apple-icon-57x57.png'
import appleIcon60 from 'public/apple-icon-60x60.png'
import appleIcon72 from 'public/apple-icon-72x72.png'
import appleIcon114 from 'public/apple-icon-114x114.png'
import appleIcon120 from 'public/apple-icon-120x120.png'
import appleIcon144 from 'public/apple-icon-144x144.png'
import appleIcon152 from 'public/apple-icon-152x152.png'
import appleIcon180 from 'public/apple-icon-180x180.png'
import appleIcon192 from 'public/android-icon-192x192.png'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Color Department — Los Angeles</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="apple-touch-icon" sizes="57x57" href={appleIcon57.src} />
        <link rel="apple-touch-icon" sizes="60x60" href={appleIcon60.src} />
        <link rel="apple-touch-icon" sizes="72x72" href={appleIcon60.src} />
        <link rel="apple-touch-icon" sizes="76x76" href={appleIcon72.src} />
        <link rel="apple-touch-icon" sizes="114x114" href={appleIcon114.src} />
        <link rel="apple-touch-icon" sizes="120x120" href={appleIcon120.src} />
        <link rel="apple-touch-icon" sizes="144x144" href={appleIcon144.src} />
        <link rel="apple-touch-icon" sizes="152x152" href={appleIcon152.src} />
        <link rel="apple-touch-icon" sizes="180x180" href={appleIcon180.src} />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href={appleIcon192.src}
        />
        <link rel="icon" type="image/png" sizes="32x32" href={favicon32.src} />
        <link rel="icon" type="image/png" sizes="96x96" href={favicon96.src} />
        <link rel="icon" type="image/png" sizes="16x16" href={favicon16.src} />

        <meta name="application-name" content="Color Department" />
        <meta
          name="description"
          content="We are Color Department a color grading studio Based in Los Angeles."
        />
        <meta
          name="keywords"
          content="Color Department, colordepartment, color, studio, images, cinematic, Los Angeles"
        />
        <meta name="author" content="Color Department" />

        <meta property="og:title" content="Color Department" />

        <meta
          property="og:description"
          content="We are Color Department a color grading studio Based in Los Angeles. We hunt for the best Solutions. We always find the right path to cinematic Impactful images. Whatever the task is."
        />
        <meta property="og:site_name" content="Color Department" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://colordepartment.la/" />

        <meta property="og:image" content={opengraph.src} />
        <link rel="icon" href={favicon.src} />
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
