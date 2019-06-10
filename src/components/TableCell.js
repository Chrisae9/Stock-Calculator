import React from "react";
import PropTypes from "prop-types";
import { Table, Header } from "semantic-ui-react";

class TableCell extends React.Component {
  render() {
    const { value, label, percent, dollarSign, inputsPresent } = this.props;

    let output = Math.abs(Math.round(value * 100) / 100);
    if (isNaN(value) || !inputsPresent) {
      output = 0;
    }
    return (
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Header as="h4">
              <Header.Content>{label}</Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>
            {inputsPresent && value < 0 && "-"}
            {dollarSign && "$"}
            {output}
            {percent && "%"}
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    );
  }
}

TableCell.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  inputsPresent: PropTypes.bool.isRequired,
  percent: PropTypes.bool,
  dollarSign: PropTypes.bool,
};
export default TableCell;
