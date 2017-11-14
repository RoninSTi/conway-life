import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';

import Store from './Store';
import LifeContainer from './components/LifeContainer';

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <div className="App">
          <LifeContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
