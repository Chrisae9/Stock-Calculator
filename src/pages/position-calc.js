import React from "react";
// import { Link } from "gatsby";
import {
  Segment,
  Grid,
  Divider,
  Input,
  Form,
  Table,
  Header,
} from "semantic-ui-react";

import Layout from "../components/layout";
import SEO from "../components/seo";

export default class ProfitCalc extends React.Component {
  state = {
    initPps: null,
    quantity: null,
    interest: null,
    newPps: null,
  };

  handleInput(event, name) {
    this.setState({ [name]: event.target.value });
  }

  render() {
    const { initPps, quantity, newPps } = this.state;
    //interest to percentage
    const interest = this.state.interest / 100;

    //output calculations
    const borrsell = initPps * quantity;
    const growth = (newPps - initPps) / initPps;
    const grossp = borrsell - newPps * quantity;
    const netp = grossp - Math.abs(grossp * interest);

    return (
      <Layout title="position-calc">
        <SEO title="Short Position Calculator" />
        <Segment>
          <Grid columns={2} relaxed="very">
            <Grid.Column>
              <Form>
                <h1>Short Position Calculator</h1>

                <p>Enter Stock Information Below:</p>

                <Form.Field>
                  <label>Stock Price:</label>
                  <Input
                    value={this.state.initPps}
                    onChange={event => this.handleInput(event, "initPps")}
                    placeholder="Price Per Share"
                    icon="dollar sign"
                  />
                </Form.Field>

                <Form.Field>
                  <label>Quantity:</label>
                  <Input
                    value={this.state.quantity}
                    onChange={event => this.handleInput(event, "quantity")}
                    placeholder="Quantity of Shares"
                    icon="sort amount up"
                  />
                </Form.Field>

                <Form.Field>
                  <label>Interest or Comission:</label>
                  <Input
                    value={this.state.interest}
                    onChange={event => this.handleInput(event, "interest")}
                    placeholder="Interest or Comission"
                    icon="percent"
                  />
                </Form.Field>

                <Form.Field>
                  <label>New Stock Price: </label>
                  <Input
                    value={this.state.newPps}
                    onChange={event => this.handleInput(event, "newPps")}
                    placeholder="New PPS"
                    icon="dollar sign"
                  />
                </Form.Field>
              </Form>
            </Grid.Column>
            <Grid.Column>
              <Header as="h1" icon textAlign="center">
                <Header.Content>Total Profit</Header.Content>
                <Header>${netp}</Header>
              </Header>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "10px",
                  // height: "5%",
                }}
              >
                <Table basic="very" celled collapsing>
                  {/* <Table basic="very"> */}
                  {/* <Table> */}
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell />
                      <Table.HeaderCell>Value</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>

                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>
                        <Header as="h4">
                          <Header.Content>Borrow/Sell Amount</Header.Content>
                        </Header>
                      </Table.Cell>
                      <Table.Cell>{borrsell}</Table.Cell>
                    </Table.Row>
                  </Table.Body>

                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>
                        <Header as="h4">
                          <Header.Content>Growth </Header.Content>
                        </Header>
                      </Table.Cell>
                      <Table.Cell>{growth * 100}%</Table.Cell>
                    </Table.Row>
                  </Table.Body>

                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>
                        <Header as="h4">
                          <Header.Content>Gross Profit </Header.Content>
                        </Header>
                      </Table.Cell>
                      <Table.Cell>{grossp}</Table.Cell>
                    </Table.Row>
                  </Table.Body>

                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>
                        <Header as="h4">
                          <Header.Content>
                            Net Profit After Interest / Commision
                          </Header.Content>
                        </Header>
                      </Table.Cell>
                      <Table.Cell>{netp}</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </div>
            </Grid.Column>
          </Grid>

          <Divider vertical>yields</Divider>
        </Segment>

        <h5>This website is a work in progress...</h5>
        <h5>
          Support the Creators at <a>www.paypal.com</a>
        </h5>
      </Layout>
    );
  }
}
