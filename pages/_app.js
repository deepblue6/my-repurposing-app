// pages/_app.js
import "../styles/globals.css"; // This imports the global styles

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
