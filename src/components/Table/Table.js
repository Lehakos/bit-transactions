import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import './Table.css';

class Table extends PureComponent {
  renderBodyCell = this.renderCell.bind(null, 'td', 'table__cell');
  renderHeadCell = this.renderCell.bind(null, 'th', 'table__head-cell');
  renderRow = this.renderRow.bind(this);

  renderCell(Tag, className, data) {
    const key = shortid.generate();

    return (
      <Tag key={key} className={className}>{data}</Tag>
    );
  }

  renderHeader() {
    const { headerData } = this.props;

    if (!headerData) {
      return null;
    }

    return (
      <thead className="table__header">
        <tr className="table__row table__row_header">
          {headerData.map(this.renderHeadCell)}
        </tr>
      </thead>
    );
  }

  renderRow(data) {
    const key = shortid.generate();

    return (
      <tr key={key} className="table__row">
        {data.map(this.renderBodyCell)}
      </tr>
    );
  }

  render() {
    const { data } = this.props;

    return (
      <table className="table">
        {this.renderHeader()}
        <tbody>
          {data.map(this.renderRow)}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.node)).isRequired,
  headerData: PropTypes.arrayOf(PropTypes.node),
};

export default Table;
