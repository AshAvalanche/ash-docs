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
        <img
          className={styles.heroLogo}
          src="/img/logotype-white.png"
          alt="Ash logo"
        ></img>
        <p className="hero__subtitle">
          {siteConfig.tagline}
          <br />
        </p>

        <div className="container">
          <div className="row">
            <div className={clsx("col col--4")} />
            <div className={clsx("col col--2")}>
              <div className={styles.buttons}>
                <Link
                  className="button button--secondary button--lg"
                  to="/docs/toolkit"
                >
                  🚀 Get started
                </Link>
              </div>
            </div>
            <div className={clsx("col col--2")}>
              <div className={styles.buttons}>
                <Link
                  className="button button--secondary button--lg"
                  to="https://calendly.com/ash-e36knots"
                >
                  💬 Contact us
                </Link>
              </div>
            </div>
            <div className={clsx("col col--4")} />
          </div>
          <div className="row">
            <div className={clsx("col col--4")} />
            <div className={clsx("col col--4")}>
              <div className={styles.buttons}>
                <Link
                  className="button button--secondary button--lg"
                  to="https://forms.gle/m66KkKT8FC2Jb9Y97"
                >
                  ✍️ Register for the alpha!
                </Link>
              </div>
            </div>
            <div className={clsx("col col--4")} />
          </div>
        </div>
      </div>
    </header>
  );
}
