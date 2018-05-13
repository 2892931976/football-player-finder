import React from 'react';
import PropTypes from 'prop-types';

const TableRow = ({
  player: {
    name,
    position,
    nationality,
    age,
    jerseyNumber,
    contractUntil,
  },
}) => (
  <tr>
    <td>{name}</td>
    <td>{position}</td>
    <td>{nationality}</td>
    <td>{age}</td>
    <td>{jerseyNumber}</td>
    <td>{contractUntil}</td>
  </tr>
);

TableRow.propTypes = {
  player: PropTypes.shape({
    name: PropTypes.string,
    position: PropTypes.string,
    nationality: PropTypes.string,
    age: PropTypes.number,
    jerseyNumber: PropTypes.number,
    contractUntil: PropTypes.string,
  }).isRequired,
};

export default TableRow;
