import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Easy access to the Subnets ecosystem",
    Svg: require("@site/static/img/undraw-nakamoto-ash.svg").default,
    description: (
      <>
        The <b>Ash protocol</b> lowers the entry cost to the Avalanche Subnets
        ecosystem <b>for all the participants</b>.
      </>
    ),
  },
  {
    title: "Decentralized infrastructure",
    Svg: require("@site/static/img/undraw-ash-p2p.svg").default,
    description: (
      <>
        Ash nodes are funded through <b>liquid staking</b> and run by a{" "}
        <b>decentralized network</b> of node operators. Governance and
        operations are <b>tracked on-chain</b>.
      </>
    ),
  },
  {
    title: "Open Source tooling",
    Svg: require("@site/static/img/undraw-open-source.svg").default,
    description: (
      <>
        The Ash teams maintains a set of open-source tools that{" "}
        <b>boost the productivity</b> of Avalanche <b>node operators</b> and{" "}
        <b>developers</b>.
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
    <section className={styles.features}>
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
