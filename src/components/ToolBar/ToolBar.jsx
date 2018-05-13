import React from 'react';

const ToolBar = () => (
  <div className="columns">
    <div className="column">
      <div className="control">
        <input className="input" type="text" placeholder="Player name..." />
      </div>
    </div>
    <div className="column">
      <div className="control">
        <div className="select is-fullwidth">
          <select>
            <option>Select position</option>
            <option>With options</option>
          </select>
        </div>
      </div>
    </div>
    <div className="column">
      <div className="control">
        <input className="input" type="number" placeholder="Age..." />
      </div>
    </div>
  </div>
);

export default ToolBar;