import React, {Component} from 'react';

import { Provider } from 'react-redux';
import store from './src/redux/store';
import ConnectionScrenn from './src/screens/ConnectionScrenn';


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectionScrenn />
      </Provider>
    );
  }
}
