import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageHeader from "../components/Homepage/Header/index";
import HomepageFeatures from "@site/src/components/Homepage/Features";
import Video from "../components/Homepage/Video";

import styles from "./styles.module.css";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description={`${siteConfig.tagline}`}>
      <main>
        <HomepageHeader />
        <HomepageFeatures />
        <div className={styles.section}>
          <Video />
        </div>
      </main>
    </Layout>
  );
}
