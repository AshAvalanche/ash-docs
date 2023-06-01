import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import clsx from "clsx";
import React from "react";

import styles from "./styles.module.css";

export default function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">
          Get more from your Avalanche infrastructure
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/toolkit"
          >
            🚀 Get started
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="https://calendly.com/antoine-e36knots/book-a-meeting-with-ash"
          >
            💬 Contact us
          </Link>
        </div>
      </div>
    </header>
  );
}
