import React from 'react';
import TableHead from './components/TableHead';
import TableRow from './components/TableRow';

const mockedData = [
  {
    contractUntil: '2022-06-30',
    dateOfBirth: '1993-05-13',
    jerseyNumber: 9,
    name: 'Romelu Lukaku',
    nationality: 'Belgium',
    position: 'Centre-Forward',
    age: 24,
  }, {
    contractUntil: '2019-06-30',
    dateOfBirth: '1990-11-07',
    jerseyNumber: 1,
    name: 'David de Gea',
    nationality: 'Spain',
    position: 'Keeper',
    age: 28,
  }, {
    contractUntil: '2021-06-30',
    dateOfBirth: '1987-02-22',
    jerseyNumber: 20,
    name: 'Sergio Romero',
    nationality: 'Argentina',
    position: 'Keeper',
    age: 31,
  },
];

const Table = () => {
  const rows = mockedData.map(row => <TableRow key={row.name} player={row} />);
  return (
    <table className="table is-striped">
      <TableHead />
      <tbody>
        {rows}
      </tbody>
    </table>
  );
};

export default Table;
