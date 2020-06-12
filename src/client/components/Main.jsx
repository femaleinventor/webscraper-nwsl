import React from 'react';
import { renderRoutes } from 'react-router-config';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount() {
  }

  render() {
    console.log("MAIN COMPONENE");
    return (
      <div className="Main">
        <div>Main.jsx</div>
        {/* {renderRoutes(this.props.routes)} */}
      </div>
    );
  }
}

export default Main;