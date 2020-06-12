import React from 'react';
import Main from './Main';

class Root extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
    render() {
      return (
        <div className="componentRoot">
          <div>root.jsx</div>
          <Main routes={this.props.route.routes} />
        </div>
      );
    }
}

export default Root;