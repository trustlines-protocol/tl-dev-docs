import React from "react"
import clsx from "clsx"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import useBaseUrl from "@docusaurus/useBaseUrl"
import styles from "./styles.module.css"

const features = [
  {
    title: "Trustlines Blockchain",
    description: (
      <>
        The Trustlines Blockchain is a minimal viable Proof-of-Stake (mPoS)
        Ethereum sidechain.
      </>
    ),
  },
  {
    title: "Client library",
    description: (
      <>
        The clientlib is a JS-library which makes it easy to build applications
        on top of the Trustlines Protocol. It provides a high level API to
        enable applications to interact with the smart contract system on the
        blockchain via the relay servers.
      </>
    ),
  },
  {
    title: "Relay Servers",
    description: (
      <>
        The Relay Servers are an optional bridge between client apps and the
        Trustlines blockchain. They offer services which are not feasible to be
        implemented on-chain or within the client apps. Importantly, Relay
        servers calculate optimal paths and relay transactions.
      </>
    ),
  },
]

function Feature({ imageUrl, title, description }) {
  return (
    <div className={clsx("col col--4", styles.feature)}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Here you can find all kind of technical documentation about Trustlines as well as code related documentation."
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  )
}

export default Home
