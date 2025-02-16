import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";

type ToolItem = {
    title: string;
    description: string;
    link: string;
};

const ToolList: ToolItem[] = [
    {
        title: "Ansible Collection",
        description: "Automate Avalanche node deployment and management",
        link: "/docs/category/ansible-avalanche-collection",
    },
    {
        title: "CLI Tools",
        description: "Command-line utilities for Avalanche exploration",
        link: "/docs/toolkit/ash-cli/introduction",
    },
];

function Tool({ title, description, link }: ToolItem) {
    return (
        <div className={clsx("col col--6")}>
            <Link to={link} className={styles.toolCard}>
                <h3>{title}</h3>
                <p>{description}</p>
                <span className={styles.learnMore}>Learn More →</span>
            </Link>
        </div>
    );
}

export default function HomepageToolkit(): JSX.Element {
    return (
        <section className={styles.toolkit}>
            <div className="container">
                <div className="row text--center">
                    <div className="col">
                        <Heading as="h2">Ash open-source toolkit</Heading>
                        <p className={styles.sectionSubtitle}>
                            A comprehensive set of tools to develop and operate Avalanche nodes
                        </p>
                    </div>
                </div>
                <div className="row">
                    {ToolList.map((props, idx) => (
                        <Tool key={idx} {...props} />
                    ))}
                </div>
                <div className="row">
                    <div className="col text--center">
                        <Link
                            className="button button--primary button--lg margin-top--lg"
                            to="/docs/toolkit"
                        >
                            Toolkit Docs
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
} 