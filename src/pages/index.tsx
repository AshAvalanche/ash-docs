import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageHeader from "../components/Homepage/Header/index";
import HomepageFeatures from "@site/src/components/Homepage/Features";
import HomepageProducts from "../components/Homepage/Products";
import HomepageSupporters from "../components/Homepage/Supporters";
// import Video from "../components/Homepage/Video";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description={`${siteConfig.tagline}`}>
      <main>
        <HomepageHeader />
        <HomepageFeatures />
        <HomepageProducts />
        <HomepageSupporters />
        {/* <div className={styles.section}>
          <Video />
        </div> */}
      </main>
    </Layout>
  );
}
