import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from '../../routes';
import NotFound from './NotFound';
import Home from './Home';
import Main from './Main';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount() {
    console.log(this.props);
  }

  render() {
    console.log("APP");
    return(
    <div className="App">
      <ul>
        <li>
          <NavLink to="/todos">Todos</NavLink>
        </li>
        <li>
          <NavLink to="/posts">Posts</NavLink>
        </li>
      </ul>

      <Switch>
        <Route
          exact
          path="/"
          render={props => <Home name="Alligator.io" {...props} />}
        />
        <Route path="/todos" component={Home} />
        <Route path="/posts" component={Main} />
        <Route component={NotFound} />
      </Switch>
    </div>)
  }

  // render() {
  //   console.log(this.props);
  //   console.log(renderRoutes(routes));
  //   return (
  //     <div className="App">
  //       <div>App.jsx</div>
  //       {/* {renderRoutes(routes)} */}
  //     </div>
  //   );
  // }
}

export default App;