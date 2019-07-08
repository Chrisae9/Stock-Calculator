import React from "react";
import { Segment, Grid, Divider, Input, Form, Table } from "semantic-ui-react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import TableCell from "../components/TableCell";
import TotalProfit from "../components/TotalProfit";

//css
import "semantic-ui-css/semantic.min.css";

export default class ProfitCalc extends React.Component {
  state = {
    initPps: "",
    quantity: "",
    interest: "",
    newPps: "",
  };

  handleInput(event, name) {
    this.setState({ [name]: event.target.value });
  }

  render() {
    const { initPps, quantity, newPps } = this.state;
    //interest to percentage
    const interest = this.state.interest / 100;

    //output calculations
    const imv = initPps * quantity;
    const growth = (newPps - initPps) / initPps;
    const grossp = newPps * quantity - initPps * quantity;
    const netp = grossp - Math.abs(grossp * interest);

    const inputsPresent = !!(
      initPps !== "" &&
      quantity !== "" &&
      newPps !== "" &&
      interest !== ""
    );
    alert(inputsPresent)

    return (
      <Layout title="profit-calc">
        <SEO title="Profit Calculator" />
        <Segment>
          <Grid columns={2} relaxed="very">
            <Grid.Column>
              <Form>
                <h1>Profit Calculator</h1>

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
              <TotalProfit netp={inputsPresent ? netp : 0} />

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "10px",
                }}
              >
                <Table basic="very" celled collapsing>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell />
                      <Table.HeaderCell>Value</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>

                  <TableCell
                    label="Initial Market Value of Position"
                    value={imv}
                    inputsPresent={inputsPresent}
                    dollarSign
                  />
                  <TableCell
                    label="Growth"
                    value={growth * 100}
                    inputsPresent={inputsPresent}
                    percent
                  />
                  <TableCell
                    label="Gross Profit"
                    value={grossp}
                    inputsPresent={inputsPresent}
                    dollarSign
                  />
                  <TableCell
                    label="Net Profit After Interest / Commision"
                    value={netp}
                    inputsPresent={inputsPresent}
                    dollarSign
                  />
                </Table>
              </div>
            </Grid.Column>
          </Grid>

          <Divider vertical>yields</Divider>
        </Segment>
      </Layout>
    );
  }
}
