import React, {Component} from 'react';

import { Provider } from 'react-redux';
import store from './src/redux/store';

//pages
import ConnectionScrenn from './src/screens/ConnectionScrenn';
import TerminalScrenn from './src/screens/TerminalScrenn';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TerminalScrenn />
      </Provider>
    );
  }
}
