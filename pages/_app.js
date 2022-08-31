import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'

// pages/_app.jsx
import Default from "../layouts/Default";
// import Layout2 from "@/layouts/Layout2";
const layouts = {
  Default: Default,
  // L2: Layout2,
};
const App = ({ Component, pageProps }) => {
  const Layout = layouts[Component.layout] || ((children) => <>{children}</>);
  return (
    <Layout>
      <Component {...pageProps} />
      
    </Layout>
  );
};
export default App;