// layouts/Layout1.jsx

import Nav from "../components/nav";
import Footer from "../components/footer";

const Default = ({ children }) => {
  return (
    <div>
      <div>
        <>
          <Nav />
        </>
        <>{children}</>
        <>
          <Footer />
        </>
      </div>
    </div>
  );
};
export default Default;
