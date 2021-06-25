import Header from "components/header";
import Footer from "components/footer";

function Layout({ preview, children }) {
  return (
    <>
      <Header />
      <div preview={preview ? false : undefined} className="main">
        {children}
      </div>
      <Footer />
    </>
  );
}
export default Layout;
