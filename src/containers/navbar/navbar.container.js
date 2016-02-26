import './navbar.scss';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router';
import ButtonComponent from '../../components/button/button.component.js';
import { flipModal } from '../../services/modal.js';

class NavbarContainer extends Component {
  constructor() {
    super();
  }

  render() {
    const {
      flipModal,
    } = this.props;

    return (
      <div className="navbar">
        <div className="navbar__item">
          <Link to="/main"
            className="navbar__item__header">
            Sam Lau
          </Link>
        </div>

        <div className="end">
          <div className="navbar__item">
            <i className="fa fa-soundcloud"></i>
          </div>
          <div className="navbar__item">
            <i className="fa fa-linkedin"></i>
          </div>
          <div className="navbar__item">
            <i className="fa fa-github"></i>
          </div>
          <Link to="/about"
            className="navbar__item">
            About
          </Link>
          <div className="navbar__item">
            <ButtonComponent onClick={flipModal}>
              Contact
            </ButtonComponent>
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
  flipModal,
})(NavbarContainer);
