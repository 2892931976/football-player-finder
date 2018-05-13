import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class SearchName extends PureComponent {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
  }

  onChange({ target: { value } }) {
    this.props.onChange(value);
  }

  render() {
    const { searchTerm } = this.props;
    return (
      <div className="control">
        <input
          className="input"
          type="text"
          placeholder="Player name..."
          value={searchTerm}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

SearchName.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchName;
