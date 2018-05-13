import React, { Component } from 'react';
import HeaderBar from '../HeaderBar';
import ToolBar from '../ToolBar';
import Table from '../Table';

class App extends Component {
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

export default App;
