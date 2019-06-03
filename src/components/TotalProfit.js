import React from "react";
import PropTypes from "prop-types";
import { Header } from "semantic-ui-react";

export default class TotalProfit extends React.Component {
  render() {
    const netp = isNaN(this.props.netp) ? 0 : this.props.netp;
    let color = "black";
    if (netp > 0) color = "green";
    if (netp < 0) color = "red";
    return (
      <Header as="h1" icon textAlign="center">
        <Header.Content>Total Profit</Header.Content>
        <Header color={color}>${Math.round(netp * 100) / 100}</Header>
      </Header>
    );
  }
}

TotalProfit.propTypes = {
  netp: PropTypes.number.isRequired,
};
