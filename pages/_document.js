import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preload" href="/assets/fonts/UTMDinhTran.ttf" />
        <link rel="preload" href="/assets/fonts/OpenSans-ExtraBold.ttf" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        ></link>
        <script
          rel="preload"
          defer
          src="https://kit.fontawesome.com/0a09dca1f7.js"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />

        <NextScript />
        <script defer src="app/js/jquery.min.js"></script>
        {/* <script defer src="app/js/swiper-bundle.min.js"></script>
        <script defer src="app/js/swiper.js"></script> */}
        {/* <script defer src="app/js/app.js"></script> */}
        {/* <script defer src="app/js/aos.js"></script> */}
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
          crossOrigin="anonymous"
        />
      </body>
    </Html>
  );
}
