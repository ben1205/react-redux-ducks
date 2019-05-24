import React, {Suspense, lazy} from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { Provider } from 'react-redux';
import ToDoAppContainer from './containers/ToDoAppContainer';
import configureStore from './redux/configureStore';
import Likes from './pages/likes/index';
import styles from './app.css';
// import ToDoApp from './component/ToDoApp';

const Like = lazy(()=> import('./pages/likes/index'));

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store = {store}>
          <Router>
            <Link to="/likes" className={styles.nav_tab}>likes</Link>
            <Link to="/todo" className={styles.nav_tab}>todolist</Link>
            <Suspense fallback={<div>loading...</div>}>
              <Route path="/likes" component={Like}/>
            </Suspense>
            <Route path="/todo" component={ToDoAppContainer}/>
          </Router>
        </Provider>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('app'))