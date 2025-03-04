import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "L1-as-a-Service",
    Svg: require("@site/static/img/undraw-nakamoto-ash.svg").default,
    description: (
      <>
        The <b>managed Avalanche L1 experience</b>. Our expert team takes care
        of L1 management, monitoring and more supporting <b>any Cloud</b>.{" "}
        <br />
        <Link to="/docs/professional-services">Learn more</Link>.
      </>
    ),
  },
  {
    title: "Ash open-source toolkit",
    Svg: require("@site/static/img/undraw-open-source.svg").default,
    description: (
      <>
        The Ash team provides an{" "}
        <Link to="/docs/toolkit">open-source toolkit</Link> to{" "}
        <b>develop Avalanche L1s</b> and <b>operate Avalanche nodes</b>.
      </>
    ),
  },
  {
    title: "Professional Services",
    Svg: require("@site/static/img/undraw-ash-p2p.svg").default,
    description: (
      <>
        Our team can help you with all your <b>Avalanche-related</b> needs,
        including <b>Appchain design</b>.<br />
        <Link to="/docs/professional-services">Learn more</Link>.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={clsx("hero hero--secondary", styles.features)}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
