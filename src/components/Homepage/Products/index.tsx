import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";

type ProductItem = {
  title: string;
  link: string;
  SvgLight: React.ComponentType<React.ComponentProps<"svg">>;
  SvgDark: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const ProductList: ProductItem[] = [
  {
    title: "Ash Wallet",
    link: "https://wallet.ash.center",
    SvgLight: require("@site/static/img/undraw-two-factor-authentication.svg")
      .default,
    SvgDark: require("@site/static/img/undraw-two-factor-authentication.svg")
      .default,
    description: (
      <>
        A shared infrastructure aimed at <br />
        bringing{" "}
        <b>
          all the features of <Link to="https://safe.global/">Safe</Link>
        </b>{" "}
        <br />
        to the Avalanche L1s ecosystem
      </>
    ),
  },
  {
    title: "Suzaku",
    link: "https://suzaku.network",
    SvgLight: require("@site/static/img/suzaku-symbol-black.svg").default,
    SvgDark: require("@site/static/img/suzaku-symbol-white.svg").default,
    description: (
      <>
        The (re)staking protocol tailored to help
        <br /> <b>secure and decentralize</b> Avalanche L1s.
        <br />
        <Link to="https://docs.suzaku.network">Read the docs</Link>
      </>
    ),
  },
];

function Product({ title, link, SvgLight, SvgDark, description }: ProductItem) {
  return (
    <div className={clsx("col col--6")}>
      <div className="text--center">
        <Link to={link}>
          <SvgLight className={styles.productSvgLight} role="img" />
          <SvgDark className={styles.productSvgDark} role="img" />
        </Link>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>
          <Link to={link}>{title}</Link>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageProducts(): JSX.Element {
  return (
    <section className={clsx("hero hero--secondary", styles.products)}>
      <div className="container text--center">
        <div className="row">
          <div className="col">
            <Heading as="h2">Our other projects</Heading>
          </div>
        </div>
        <div className="row">
          {ProductList.map((props, idx) => (
            <Product key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
