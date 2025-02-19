import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";

type ProjectItem = {
    title: string;
    link: string;
    SvgLight: React.ComponentType<React.ComponentProps<"svg">>;
    SvgDark: React.ComponentType<React.ComponentProps<"svg">>;
    description: JSX.Element;
};

const ProjectList: ProjectItem[] = [
    {
        title: "Ash Wallet",
        link: "https://wallet.ash.center",
        SvgLight: require("@site/static/img/undraw-two-factor-authentication.svg").default,
        SvgDark: require("@site/static/img/undraw-two-factor-authentication.svg").default,
        description: (
            <>
                A shared infrastructure aimed at <br />
                bringing{" "}
                <b>
                    all the features of <Link to="https://safe.global/">Safe</Link>
                </b>{" "}
                <br />
                to the Avalanche L1s ecosystem.
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
                <Link to="https://docs.suzaku.network">Read the docs</Link>.
            </>
        ),
    },
];

function Project({ title, link, SvgLight, SvgDark, description }: ProjectItem) {
    return (
        <div className={clsx("col col--6")}>
            <div className="text--center">
                <Link to={link}>
                    <div className={styles.projectSvgContainer}>
                        <SvgLight className={styles.projectSvgLight} role="img" />
                        <SvgDark className={styles.projectSvgDark} role="img" />
                    </div>
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

export default function HomepageProjects(): JSX.Element {
    return (
        <section className={clsx("hero--secondary", styles.projects)}>
            <div className="container">
                <div className="row text--center">
                    <div className="col">
                        <Heading as="h2">Our other projects</Heading>
                        <p className={styles.sectionSubtitle}>
                            Discover our ecosystem of tools and services for Avalanche L1s
                        </p>
                    </div>
                </div>
                <div className="row">
                    {ProjectList.map((props, idx) => (
                        <Project key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
} 