import React from "react";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";

type ServiceItem = {
    title: string;
    description: string;
    icon: string;
};

const ServiceList: ServiceItem[] = [
    {
        title: "Avalanche L1 Design",
        description: "Consulting on the design of your Avalanche L1 architecture and tokenomics",
        icon: "🎯",
    },
    {
        title: "Custom features",
        description: "Development of custom features for the Ash open-source toolkit",
        icon: "💻",
    },
    {
        title: "Infrastructure",
        description: "Setup and optimization of blockchain infrastructure across multiple cloud providers",
        icon: "🏗️",
    },
    {
        title: "Private L1s",
        description: "Private Avalanche L1 deployment and maintenance",
        icon: "🔒",
    },
];

function Service({ title, description, icon }: ServiceItem) {
    return (
        <div className="col col--6 margin-bottom--lg">
            <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>{icon}</div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageServices(): JSX.Element {
    return (
        <section className={styles.services}>
            <div className="container">
                <div className="row text--center">
                    <div className="col">
                        <Heading as="h2">Professional Services</Heading>
                        <p className={styles.sectionSubtitle}>
                            Expert blockchain consulting and development services
                        </p>
                    </div>
                </div>
                <div className="row">
                    {ServiceList.map((props, idx) => (
                        <Service key={idx} {...props} />
                    ))}
                </div>
                <div className="row">
                    <div className="col text--center">
                        <Link
                            className="button button--primary button--lg margin-top--lg"
                            to="/docs/professional-services"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
} 