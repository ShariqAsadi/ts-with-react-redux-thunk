import React from 'react';
import { Provider } from 'react-redux'
import { store } from './store/store';
import './App.css';
import UsersPosts from './components/UsersPosts';


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <UsersPosts />
      </Provider>
    );
  }
}

export default App;
