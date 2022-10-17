import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || EmptyLayout;

  return <Component {...pageProps} />;
}

const EmptyLayout = ({ children }) => <>{children}</>;

export default MyApp;
