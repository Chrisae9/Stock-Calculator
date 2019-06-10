import React from "react";
import PropTypes from "prop-types";
import { Table, Header } from "semantic-ui-react";

class TableCell extends React.Component {
  render() {
    const { value, label, percent, dollarSign } = this.props;

    return (
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Header as="h4">
              <Header.Content>{label}</Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>
            {value < 0 && "-"}
            {dollarSign && "$"}
            {isNaN(value) ? 0 : Math.abs(Math.round(value * 100) / 100)}
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
  percent: PropTypes.bool,
  dollarSign: PropTypes.bool,
};
export default TableCell;
