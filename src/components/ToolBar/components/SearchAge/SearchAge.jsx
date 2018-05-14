import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

let valueCheckerTimeout;
const valueChecker = (value, func) => {
  if (valueCheckerTimeout) {
    clearTimeout(valueCheckerTimeout);
  }
  valueCheckerTimeout = setTimeout(() => {
    // Only check if the value have more than 1 digit
    if (value && (value.length > 1 || value > 4)) {
      const age = parseInt(value, 10);
      if (age < 18) {
        func('18');
      } else if (age > 40) {
        func('40');
      }
    }
  }, 500);
};

class SearchAge extends PureComponent {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
  }

  onChange({ target: { value } }) {
    if (!value || /^\d+$/.test(value)) {
      // Set the validator of ages before set the filter
      valueChecker(value, this.props.onChange);
      this.props.onChange(value);
    }
  }

  render() {
    const { searchTerm } = this.props;
    return (
      <div className="control">
        <input
          className="input"
          type="text"
          placeholder="Age..."
          value={searchTerm}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

SearchAge.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchAge;
