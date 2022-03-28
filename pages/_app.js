import "styles/globals.css";
import "common/scss/index.scss";
import { useEffect } from "react";
import { ThemeProvider } from "@mui/material";
import AOS from "aos";
import config from "config";
import Layout from "common/components/layout";
import Submenu from "common/components/layout/Submenu";
import theme from "theme/theme";
// import ScrollTop from "common/components/other/ScrollTop";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      offset: 140,
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {/* Menu cho mobile */}
      <Submenu />

      {/* Layout chính */}
      <Layout>
        <Component {...pageProps} />
      </Layout>

      {/* Button Scroll-top
      <ScrollTop /> */}
    </ThemeProvider>
  );
}

export default MyApp;
