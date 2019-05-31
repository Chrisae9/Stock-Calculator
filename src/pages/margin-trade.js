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
    leverage: null,
    initCap: null,
  };

  handleInput(event, name) {
    this.setState({ [name]: event.target.value });
  }

  render() {
    const { initPps, quantity, newPps, initCap} = this.state;
    //interest to percentage
    const interest = this.state.interest / 100;
    const leverage = this.state.leverage / 100;

    //output calculations
    const totalBuy = parseInt(initCap) + initCap * leverage;

    const totalMarketValue = initPps * quantity; 

    const growth = (newPps - initPps) / initPps;
    const grossp = totalMarketValue * growth;
    const owed = Math.abs(grossp) * interest;
    const netp = grossp - Math.abs(owed);


    const remBuy = totalBuy - (initPps * quantity);


    return (
      <Layout title="margin-trade">
        <SEO title="Margin Trade Calculator" />
        <Segment>
          <Grid columns={2} relaxed="very">
            <Grid.Column>

              <Form>
                <h1>Margin Trade Calculator</h1>

                <p>Enter Stock Information Below:</p>
                <Form.Field>
                  <label>Initial Capital:</label>
                  <Input
                    value={this.state.initCap}
                    onChange={event => this.handleInput(event, "initCap")}
                    placeholder="Initial Capital"
                    icon="dollar sign"
                  />
                </Form.Field>


                <Form.Field>
                  <label>Leverage: </label>
                  <Input
                    value={this.state.leverage}
                    onChange={event => this.handleInput(event, "leverage")}
                    placeholder="Leverage"
                    icon="percent"
                  />
                </Form.Field>

                <Form.Field>
                  <label>Interest:</label>
                  <Input
                    value={this.state.interest}
                    onChange={event => this.handleInput(event, "interest")}
                    placeholder="Interest Or Comission"
                    icon="percent"
                  />
                </Form.Field>
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
                }}
              >

                <Table basic="very" celled collapsing>

                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>
                        <Header as="h4">
                          <Header.Content>
                            Total Buying Power
                          </Header.Content>
                        </Header>
                      </Table.Cell>
                      <Table.Cell>{totalBuy}</Table.Cell>
                    </Table.Row>
                  </Table.Body>

                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>
                        <Header as="h4">
                          <Header.Content>
                            Total Market Purchase Value
                          </Header.Content>
                        </Header>
                      </Table.Cell>
                      <Table.Cell>{totalMarketValue}</Table.Cell>
                    </Table.Row>
                  </Table.Body>

                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>
                        <Header as="h4">
                          <Header.Content>
                            Remaining Buying Power
                          </Header.Content>
                        </Header>
                      </Table.Cell>
                      <Table.Cell>{remBuy}</Table.Cell>
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
                          <Header.Content>
                            Gross Profit 
                          </Header.Content>
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
                            Amount Owed To Broker
                          </Header.Content>
                        </Header>
                      </Table.Cell>
                      <Table.Cell>{owed}</Table.Cell>
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

                {totalMarketValue > totalBuy && <h4 style={{color: 'red'}}>ERROR: YOUR PURCHASE EXCEEDS BUYING POWER!!!! </h4>}


              </div>
            </Grid.Column>
          </Grid>

          <Divider vertical>yields</Divider>
        </Segment>

        <h5>This website is a work in progress...</h5>
      </Layout>
    );
  }
}
