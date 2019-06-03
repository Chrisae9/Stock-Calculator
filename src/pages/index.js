import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "semantic-ui-css/semantic.min.css";

const IndexPage = () => (
  <Layout title="">
    <SEO title="Home" />
    <h1>Welcome to Simple Stock Calculator.</h1>
    <p>Navigate the different calculators above.</p>

    <h5>This website is a work in progress...</h5>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
  </Layout>
);

export default IndexPage;
