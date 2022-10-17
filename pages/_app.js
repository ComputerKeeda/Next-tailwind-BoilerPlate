import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../app/store";

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || EmptyLayout;

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

const EmptyLayout = ({ children }) => <>{children}</>;

export default MyApp;
