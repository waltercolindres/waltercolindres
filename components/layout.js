import Head from "next/head";
import Footer from "components/footer";

function Layout({ preview, children }) {
  console.log(children);

  // const navProviders = props.navProviders;
  // const navPatients = props.navPatients;
  // const navLegal = props.navLegal;
  // const navSocial = props.navSocial;

  return (
    <>
      <Head></Head>
      <div preview={preview ? false : undefined}>
        {children}
        {/* <Footer
        // navProviders={navProviders}
        // navPatients={navPatients}
        // navLegal={navLegal}
        // navSocial={navSocial}
        /> */}
      </div>
    </>
  );
}
export default Layout;
