import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";

type SolutionItem = {
    title: string;
    link: string;
    Svg: React.ComponentType<React.ComponentProps<"svg">>;
    description: JSX.Element;
    features: string[];
};

const SolutionList: SolutionItem[] = [
    {
        title: "Ash Cloud",
        link: "/docs/ash-cloud",
        Svg: require("@site/static/img/undraw-ash-p2p.svg").default,
        description: (
            <>
                The <b>managed Avalanche L1 experience</b>.
                Let our expert team take care of your L1 infrastructure and focus on what makes it unique.
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
        title: "Ash Console",
        link: "/docs/console",
        Svg: require("@site/static/img/undraw-nakamoto-ash.svg").default,
        description: (
            <>
                The <b>self-service</b> L1 development and operations platform for teams
                that want to manage their own infrastructure.
            </>
        ),
        features: [
            "Configure validator nodes",
            "Create custom blockchains",
            "Deploy a block explorer",
            "Use your own AWS, GCP & Azure subscription",
            "Full infrastructure control",
        ],
    },
];

function Solution({ title, link, Svg, description, features }: SolutionItem) {
    return (
        <div className={clsx("col col--6 margin-bottom--lg")}>
            <div className={styles.solutionCard}>
                <div className="text--center">
                    <Svg className={styles.solutionSvg} role="img" />
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
                            Ash offers two solutions to help you get started with your own Avalanche L1
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