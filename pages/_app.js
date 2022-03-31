import "styles/globals.css";
import "common/scss/index.scss";
import "react-toastify/dist/ReactToastify.min.css";
import { useEffect } from "react";
import { PersistGate } from "redux-persist/lib/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "store/";
import { ThemeProvider } from "@mui/material";
import { ToastContainer, Slide } from "react-toastify";
import AOS from "aos";
import config from "config";
import dynamic from "next/dynamic";
import Layout from "common/components/layout";
import theme from "theme/theme";

const DynamicSubmenu = dynamic(() =>
  import("common/components/layout/Submenu")
);
// import ScrollTop from "common/components/other/ScrollTop";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      offset: 140,
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ToastContainer transition={Slide} autoClose={4000} theme="dark" />
          {/* Menu cho mobile */}
          <DynamicSubmenu />

          {/* Layout chính */}
          <Layout>
            <Component {...pageProps} />
          </Layout>

          {/* Button Scroll-top
      <ScrollTop /> */}
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
}
export default MyApp;
