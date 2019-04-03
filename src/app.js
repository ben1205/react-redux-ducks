import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import ToDoAppContainer from './containers/ToDoAppContainer';
import configureStore from './redux/configureStore';
// import ToDoApp from './component/ToDoApp';

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store = {store}>
          <ToDoAppContainer />
        </Provider>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('app'))