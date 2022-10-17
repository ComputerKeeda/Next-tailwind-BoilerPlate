import "../styles/globals.css";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || EmptyLayout;

  return (
    <Provider>
      <Component {...pageProps} />;
    </Provider>
  );
}

const EmptyLayout = ({ children }) => <>{children}</>;

export default MyApp;
