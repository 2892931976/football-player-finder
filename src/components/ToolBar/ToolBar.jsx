import React from 'react';
import PropTypes from 'prop-types';
import SearchName from './components/SearchName';
import SearchAge from './components/SearchAge';
import PositionSelect from './components/PositionSelect';

const ToolBar = ({
  searchName,
  searchPosition,
  searchAge,
  setSearchName,
  setSearchPosition,
  setSearchAge,
}) => (
  <div className="columns">
    <div className="column">
      <SearchName searchTerm={searchName} onChange={setSearchName} />
    </div>
    <div className="column">
      <PositionSelect selected={searchPosition} onChange={setSearchPosition} />
    </div>
    <div className="column">
      <SearchAge searchTerm={searchAge} onChange={setSearchAge} />
    </div>
  </div>
);

ToolBar.propTypes = {
  searchName: PropTypes.string.isRequired,
  searchPosition: PropTypes.string.isRequired,
  searchAge: PropTypes.string.isRequired,
  setSearchName: PropTypes.func.isRequired,
  setSearchPosition: PropTypes.func.isRequired,
  setSearchAge: PropTypes.func.isRequired,
};

export default ToolBar;
