import Head from "next/head";
import Header from "components/header";
import Footer from "components/footer";

function Layout({ preview, children }) {
  // const navProviders = props.navProviders;
  // const navPatients = props.navPatients;
  // const navLegal = props.navLegal;
  // const navSocial = props.navSocial;

  return (
    <>
      <Head></Head>
      <Header />
      <div preview={preview ? false : undefined} className="main">
        {children}
      </div>
      <Footer />
    </>
  );
}
export default Layout;
