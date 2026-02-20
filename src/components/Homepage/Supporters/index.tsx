import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";

type SupporterItem = {
  title: string;
  SvgLight: React.ComponentType<React.ComponentProps<"svg">>;
  SvgDark: React.ComponentType<React.ComponentProps<"svg">>;
  link: string;
};

const SupporterList: SupporterItem[] = [
  {
    title: "Avalanche",
    SvgLight: require("@site/static/img/avalanche-logo-black.svg").default,
    SvgDark: require("@site/static/img/avalanche-logo-white.svg").default,
    link: "https://x.com/AvalancheFDN",
  },
  {
    title: "codebase",
    SvgLight: require("@site/static/img/codebase-logo-black.svg").default,
    SvgDark: require("@site/static/img/codebase-logo-white.svg").default,
    link: "https://codebase.avax.network/",
  },
  {
    title: "France 2030",
    SvgLight: require("@site/static/img/logo-france-2030-black.svg").default,
    SvgDark: require("@site/static/img/logo-france-2030-white.svg").default,
    link: "https://www.info.gouv.fr/grand-dossier/france-2030-en",
  },
];

function Supporter({ SvgLight, SvgDark, link, title }: SupporterItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Link to={link}>
          <SvgLight className={styles.supporterSvgLight} role="img" />
          <SvgDark className={styles.supporterSvgDark} role="img" />
        </Link>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>
          <br />
          <Link to={link}>{title}</Link>
        </h3>
      </div>
    </div>
  );
}

export default function HomepageSupporters(): JSX.Element {
  return (
    <section className={clsx("hero hero--secondary", styles.supporters)}>
      <div className="container text--center">
        <div className="row">
          <div className="col">
            <Heading as="h2">They support us</Heading>
          </div>
        </div>
        <div className="row">
          {SupporterList.map((props, idx) => (
            <Supporter key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
