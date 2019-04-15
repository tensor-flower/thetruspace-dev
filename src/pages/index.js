import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CardList from '../components/cardList'

const IndexPage = () => (
  <Layout style={{height:'100%'}}>
    <SEO title="thetruspace" keywords={[`thetruspace`, `truspace`, `thetruthspace`,`truthspace`]} />
    <CardList />
  </Layout>
)

export default IndexPage
