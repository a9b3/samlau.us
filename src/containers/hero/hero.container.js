import './hero.scss';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'

class HeroContainer extends Component {
  constructor() {
    super();
  }

  render() {
    const hero = {
      name: 'Sam Lau',
      info: 'Front-End Engineer @ Udacity',
      location: 'Sunnyvale, CA',
      tagline: 'Aesthetically driven self-taught programmer',
    };

    return (
      <div className="hero">

        <div className="hero__wrapper">
          <div className="hero__name">
            {hero.name}
          </div>
          <div className="hero__info">
            {hero.info}
          </div>
          <div className="hero__info">
            {hero.location}
          </div>
          <div className="hero__tagline">
            {hero.tagline}
          </div>
        </div>
      </div>
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
})(HeroContainer);
