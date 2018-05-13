import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const options = [
  'Attacking Midfield',
  'Central Midfield',
  'Centre-Back',
  'Centre-Forward',
  'Defensive Midfield',
  'Keeper',
  'Left Midfield',
  'Left Wing',
  'Left-Back',
  'Right-Back',
];

class PositionSelect extends PureComponent {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
  }

  onChange({ target: { value } }) {
    this.props.onChange(value);
  }

  render() {
    const { selected } = this.props;
    const optionItems = options.map(option => (
      <option key={option} value={option}>{option}</option>
    ));
    return (
      <div className="control">
        <div className="select is-fullwidth">
          <select value={selected} onChange={this.onChange}>
            <option value={''}>Select position</option>
            {optionItems}
          </select>
        </div>
      </div>
    );
  }
}

PositionSelect.propTypes = {
  selected: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PositionSelect;
