import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageHeader from "../components/Homepage/Header/index";
import HomepageSolutions from "../components/Homepage/Solutions";
import HomepageToolkit from "../components/Homepage/Toolkit";
import HomepageServices from "../components/Homepage/Services";
import HomepageSupporters from "../components/Homepage/Supporters";
// import Video from "../components/Homepage/Video";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description={`${siteConfig.tagline}`}>
      <main>
        <HomepageHeader />
        <HomepageSolutions />
        <HomepageToolkit />
        <HomepageServices />
        <HomepageSupporters />
        {/* <div className={styles.section}>
          <Video />
        </div> */}
      </main>
    </Layout>
  );
}
