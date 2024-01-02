import Head from "next/head";
import Script from "next/script";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "../components/shared/Navigation";
import Seotags from "../components/shared/Seotags";

function MyApp({ Component, pageProps }) {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    name: "thesaverstreet",
    url: "https://www.thesaverstreet.com/",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.thesaverstreet.com/search/{search}",
      "query-input": "required name=search",
    },
  };
  const mySchema = JSON.stringify(schema);
  const gtagCode = `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
 
  gtag('config', 'UA-228759671-1');`;
  const gtagUrl = `https://www.googletagmanager.com/gtag/js?id=UA-228759671-1`;

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <link rel="icon" href={process.env.FAV_ICON} sizes="32x32" />

        <title>
          {pageProps.meta
            ? pageProps.meta.title
            : "Apply Online Coupons, Promo Code, Deals and Exclusive Offers | The Saver Street"}
        </title>
        {pageProps.meta && (
          <meta property="og:image" content={pageProps?.meta?.featuredImage} />
        )}
        {pageProps.meta && (
          <meta
            property="twitter:image"
            content={pageProps?.meta?.featuredImage}
          />
        )}
        {pageProps.meta && <Seotags meta={pageProps?.meta} />}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="article" />
        <meta property="og:sitename" content="thesaverstreet" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        ></link>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap"
        ></link>
        <Script
          id="my-script"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: mySchema }}
        ></Script>
        <script async src={gtagUrl}></script>
        <script dangerouslySetInnerHTML={{ __html: gtagCode }} />
      </Head>

      {!pageProps.noHeader && <Navigation />}
      <Component {...pageProps} />

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"
      ></script>
    </>
  );
}

export default MyApp;
