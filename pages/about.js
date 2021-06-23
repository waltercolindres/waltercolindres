import Layout from "components/layout";
import { SITE_TITLE } from "utils/configs";
import Meta from "components/meta";

function About() {
  return (
    <>
      <Meta
        description="Walter Colindres - Product Experience Leader talks about himself"
        url="waltercolindres.com/about/"
        image="http://waltercolindres.com/me.png"
        title={"About | " + SITE_TITLE}
      />
      <Layout>
        <div className="intro">
          <div className="profile-pic-wrapper mt2"></div>
          <h1>First and foremost, I am a husband and father.</h1>
          <p>
            I am extremely lucky to have a family that supports my work and has
            sacrificed so that I may advance my career. I've been working in
            digital transformations for the last decade. I love solving complex
            digital experience problems and helping brands establish design and
            development practices that deliver results.
          </p>
          <p>
            My current role with Vistaprint combines my passions of delivering
            delightful accessible experiences, leading teams and mentoring the
            next generation of leaders.
          </p>
        </div>

        <h2>Experience &amp; Accomplishments</h2>

        <h3>Vistaprint Digital</h3>
        <ul>
          <li>
            Leading the Growth &amp; Retention Team
          </li>
        </ul>
        <hr/>
        <h3>rbi - Consumer Technology Group</h3>
        <ul>
        <li>
            Launched 15 ordering platforms in a 6 months span (web, native apps, kiosk) for Burger King, Popeyes and Tim Hortons
          </li>
          <li>
            Launched over 50 features in a year
          </li>
          <li>Increased conversion of Delivery funnel by 300%</li>
          <li>Increased Pick Up funnel by 150%</li>
          <li>Increased frequency for returning users by 330%</li>
          <li>Dramatically increased Offer usage through new UI and features such as Promo Code Offers
          </li>
        </ul>
        <hr/>
        <h3>Sonic Drive-In Digital Team</h3>
        <ul>
          <li>Lead Sonic Web Discipline</li>
          <li>
            Product Manager/Technical Lead for Web, Email, SMS &amp; various
            internal tools
          </li>
          <li>
            Provide leadership in best practices for web development, ARIA, and
            A11Y
          </li>
          <li>
            Managed &amp; delivered the new MySonic experience (cards, profile,
            rewards)
          </li>
          <li>
            Managed &amp; delivered E-Commerce implementation on flagship site
          </li>
          <li>Lead development efforts for Limeades for Learning</li>
          <li>
            Managing the development and delivery of internal tools &amp; APIs
          </li>
          <li>Manage &amp; delivered the Digital Menu Manager (DMM)</li>
          <li>Delivered the MySonic Connect platform (SSO)</li>
          <li>
            Managed the delivery of the Analytics for consumer facing platforms
          </li>
          <li>Lead Product Manager on DMM (Digital Menu Manager)</li>
        </ul>
        <hr className="mY2" />
        <h2>Key Metrics</h2>
        <h3>Sonic Drive-In - Flagship site</h3>
        <ul>
          <li>380+ million views </li>
          <li>43+ million user</li>
          <li>62+ million sessions</li>
          <li> Avg. of 6.2 page-views per session over the last 3 years </li>
          <li>
            Maintain an uptime of over 99.9% for SDI.com over the last 3 years
          </li>
          <li>
            20,000+ accounts created via SSO implemented on Transformers Promo
          </li>
        </ul>
        <h3>Sonic Drive-In - Limeades for Learning</h3>
        <ul className="mb2">
          <li>Enabled over 2,000,000 votes over those versions</li>
          <li> Enabled over $3,000,000 in SONIC donations</li>
          <li>Maintain an uptime of 100% for LFL over the last 3 years </li>
        </ul>
        {/* <p>
          Past design projects can be found on (link:
          https://dribbble.com/waltercolindres text: dribbble) or (link:
          https://www.behance.net/waltercolindres text: behance).
        </p> */}
      </Layout>
    </>
  );
}
export default About;
