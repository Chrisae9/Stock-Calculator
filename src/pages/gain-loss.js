import React from "react";
// import { Link } from "gatsby";
import { Segment, Grid, Image, Divider, Input } from "semantic-ui-react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const GainLoss = () => (
  <Layout>
    <SEO title="Gain Loss" />
    <Segment>
      <Grid columns={2} relaxed="very">
        <Grid.Column>
          <div>
            <h1>Gain Loss Calculator</h1>
            <h5>Still in progress...</h5>

            <p>Enter Stock Data Below:</p>

            <h5>Price:</h5>
            <Input placeholder="Price Per Share" icon="dollar sign" />
            <p>Quantity:</p>
            <Input placeholder="Quantity of Shares" icon="sort amount up" />
            <p>Interest or Comission:</p>
            <Input placeholder="Interest or Comission" icon="percent" />
          </div>
        </Grid.Column>
        <Grid.Column>
          <p>
            <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
          </p>
          <p>
            <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
          </p>
          <p>
            <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
          </p>
          <p>
            <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
          </p>
        </Grid.Column>
      </Grid>

      <Divider vertical>Yields...</Divider>
    </Segment>
  </Layout>
);

export default GainLoss;
