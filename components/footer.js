// import Link from "next/link";
// import Subhead from "components/subhead";
// import Social from "components/social";

// function Footer({ navProviders, navPatients, navLegal, navSocial }) {
//   console.log(navSocial);
//   let date = new Date().getFullYear();

//   return (
//     <footer>
//       <div className="flex footer footer-content">
//         {/* <div className="flex-direction-column px4">
//         </div> */}

//         <div className="flex-direction-column px4">
//           <Subhead className="mb2">{navProviders[0].audience}</Subhead>
//           {navProviders.map((navProviders) => (
//             <Link href={navProviders.slug} key={navProviders.title}>
//               <a>{navProviders.title}</a>
//             </Link>
//           ))}
//         </div>

//         <div className="flex-direction-column px4">
//           <Subhead className="mb2">{navPatients[0].audience}</Subhead>
//           {navPatients.map((navPatients) => (
//             <Link href={navPatients.slug} key={navPatients.title}>
//               <a>{navPatients.title}</a>
//             </Link>
//           ))}
//         </div>

//         {/* <div className="flex-direction-column px4">
//         </div> */}

//         <div className="flex-direction-column px4">
//           <Subhead className="mb2">Connect</Subhead>
//           {navSocial.map((navSocial) => (
//             <Social
//               name={navSocial.name}
//               key={navSocial.name}
//               url={navSocial.url}
//               image={navSocial.image}
//             />
//           ))}
//         </div>
//       </div>
//       <div className="legal-links p3">
//         <span className="mx4">{date} All Rights Reserved</span>
//         {navLegal.map((navLegal) => (
//           <Link href={navLegal.slug} key={navLegal.title}>
//             <a className="mx4">{navLegal.title}</a>
//           </Link>
//         ))}
//       </div>
//       <style jsx>{`
//         footer {
//           background-color: var(--primary-color);
//           color: white;
//         }

//         .footer-content {
//           flex-direction: column;
//         }

//         .footer-content > div:not(:last-of-type) {
//           margin-bottom: var(--space-4);
//         }

//         a {
//           color: white;
//           text-decoration: none;
//         }

//         a:hover {
//           text-decoration: underline;
//         }

//         .flex-direction-column {
//           flex: 1 1 0;
//         }

//         .legal-links {
//           background-color: var(--primary-bg-dark-color);
//         }

//         .legal-links a,
//         span {
//           font-size: var(--fontSize-0);
//         }

//         @media (min-width: 600px) {
//           .footer-content > div {
//             margin-bottom: 0;
//           }

//           .footer-content {
//             flex-direction: row;
//           }
//         }

//         @media (min-width: 980px) {
//         }

//         @media (min-width: 1024px) {
//         }
//       `}</style>
//     </footer>
//   );
// }

// export default Footer;
