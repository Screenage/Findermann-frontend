import Layout from "../Components/Layout";
import "../styles/globals.css";
import "swiper/swiper.scss";
import "bootstrap/dist/css/bootstrap.min.css";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
