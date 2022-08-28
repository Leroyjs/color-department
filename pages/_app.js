import Head from "next/head";
import { ThemeProvider } from "components";
import "styles/global.style";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Color Department — Los Angeles</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;
