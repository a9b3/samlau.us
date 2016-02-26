import './hero.scss';
import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'

class HeroContainer extends Component {
  constructor() {
    super();
    this.state = {
      showChevron: '',
    };
    this.handleScroll = _.throttle(this._handleScroll.bind(this), 200);
  }

  _handleScroll(e) {
    const scrollTop = e.srcElement.body.scrollTop;
    if (scrollTop > 100) {
      this.setState({
        showChevron: 'hero__indicator--off',
      });
    } else {
      this.setState({
        showChevron: '',
      });
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const hero = {
      name: 'Sam Lau',
      info: 'Front-End Engineer @ Udacity',
      location: 'Sunnyvale, CA',
      tagline: 'Aesthetically driven self-taught programmer',
    };

    const showChevron = this.state.showChevron;

    return (
      <div className="hero">

        <div className="hero__wrapper">
          <div className="hero__name">
            {hero.name}
            <div className="hero__name__sit">
              <img src="img/sit.png" alt="" />
            </div>
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

        <div className={`hero__indicator ${showChevron}`}>
          <i className="fa fa-chevron-down"></i>
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
