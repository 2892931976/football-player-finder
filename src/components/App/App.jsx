import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import HeaderBar from '../HeaderBar';
import ToolBar from '../ToolBar';
import Table from '../Table';

class App extends PureComponent {
  componentDidMount() {
    this.props.fetchPlayers();
  }
  render() {
    return (
      <div className="container-fluid">
        <HeaderBar />
        <div className="content" style={{ padding: 10 }}>
          <div className="hero">
            <div className="hero-body">
              <h1 className="is-title">Footbal Player Finder</h1>
            </div>
          </div>
          <ToolBar />
          <Table />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  fetchPlayers: PropTypes.func.isRequired,
};

export default App;
