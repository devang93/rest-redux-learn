import React from 'react';
import Pagetitle from './components/Pagetitle';
import Landing from './components/Landing';

import store from './store';
import { Provider } from 'react-redux';
import './App.css';

class App extends React.Component {
  render(){
  return (
    <Provider store={store}>
      
        <Pagetitle/>
        <Landing/>
      
    </Provider>
  );
  }
};

export default App;
