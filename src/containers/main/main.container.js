import './main.scss';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import HeroContainer from '../hero/hero.container.js';
import WorksContainer from '../works/works.container.js';

class MainContainer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <span>
        <HeroContainer />
        <WorksContainer />
      </span>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    ...state,
  };
}

export default connect(mapStateToProps, {
  // pass in props
})(MainContainer);
