import React from 'react';
import fetch from 'isomorphic-fetch';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      home: true,
      userValid: false,
      accountActive: false
    };
  }

  componentWillMount() {
    this.props = {
      test: 'testty',
      mest: 'mestty'
    }
  }

  render() {
    console.log('HOME COMPONENT');
    return (
      <div className="home">
        <div>Home.jsx</div>
        <div>sadfsdf</div>
      </div>
    );
  }
}

export default Home;
