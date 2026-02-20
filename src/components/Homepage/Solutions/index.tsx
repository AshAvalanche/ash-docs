import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";

type SolutionItem = {
  title: string;
  link: string;
  SvgLight: React.ComponentType<React.ComponentProps<"svg">>;
  SvgDark: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
  features: string[];
};

const SolutionList: SolutionItem[] = [
  {
    title: "Ash Managed L1s",
    link: "/docs/ash-managed-l1s",
    SvgLight: require("@site/static/img/undraw-ash-p2p.svg").default,
    SvgDark: require("@site/static/img/undraw-ash-p2p.svg").default,
    description: (
      <>
        The <b>managed Avalanche L1 experience</b>. Let our expert team take
        care of your L1 infrastructure and focus on what makes it unique.
      </>
    ),
    features: [
      "Hosting and maintenance of your Avalanche L1",
      "Block explorer & public RPC endpoint",
      "Comprehensive monitoring and alerting",
      "Ash Wallet integration",
      "Starting at $49/mo",
    ],
  },
  {
    title: "Ash Wallet",
    link: "https://wallet.ash.center",
    SvgLight: require("@site/static/img/undraw-two-factor-authentication.svg").default,
    SvgDark: require("@site/static/img/undraw-two-factor-authentication.svg").default,
    description: (
      <>
        A <b>Safe-based multi-signature wallet</b> built for Avalanche L1s.
        Secure your team treasury and manage assets across every L1.
      </>
    ),
    features: [
      "Multi-sig wallet for Avalanche L1s",
      "Powered by Safe shared infrastructure",
      "Team treasury & asset management",
      "One wallet across all L1s",
    ],
  },
  {
    title: "Suzaku",
    link: "https://suzaku.network",
    SvgLight: require("@site/static/img/suzaku-symbol-black.svg").default,
    SvgDark: require("@site/static/img/suzaku-symbol-white.svg").default,
    description: (
      <>
        The <b>Decentralization Hub for L1s</b>. Securely scale and
        decentralize your validator set through a permissionless marketplace.
      </>
    ),
    features: [
      "Validator marketplace for Avalanche L1s",
      "From PoA to PoS security models",
      "Staking of native and blue-chip assets",
      "Backed by the Avalanche Foundation",
    ],
  },
];

function Solution({ title, link, SvgLight, SvgDark, description, features }: SolutionItem) {
  return (
    <div className={clsx("col col--4 margin-bottom--lg")}>
      <div className={styles.solutionCard}>
        <div className="text--center">
          {SvgLight === SvgDark ? (
            <SvgLight className={styles.solutionSvg} role="img" />
          ) : (
            <>
              <SvgLight className={clsx(styles.solutionSvg, styles.solutionSvgLight)} role="img" />
              <SvgDark className={clsx(styles.solutionSvg, styles.solutionSvgDark)} role="img" />
            </>
          )}
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p className={styles.solutionDescription}>{description}</p>
          <ul className={styles.featureList}>
            {features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
          <div className={styles.actionButton}>
            <Link className="button button--primary button--lg" to={link}>
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomepageSolutions(): JSX.Element {
  return (
    <section className={styles.solutions}>
      <div className="container">
        <div className="row text--center">
          <div className="col">
            <Heading as="h2">Solutions</Heading>
            <p className={styles.sectionSubtitle}>
              Everything you need to launch, secure, and scale your Avalanche L1
            </p>
          </div>
        </div>
        <div className="row">
          {SolutionList.map((props, idx) => (
            <Solution key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
