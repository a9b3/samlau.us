import './app.scss';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import NavbarContainer from '../navbar/navbar.container.js';
import ModalContainer from '../modal/modal.container.js';
import ModalTransitionComponent from '../modal/modal-transition.component.js';

class AppContainer extends Component {
  constructor() {
    super();
  }

  render() {
    const {
      modal,
    } = this.props;

    return <div className="app">
      <NavbarContainer />
      {this.props.children}

      <ModalTransitionComponent showModal={modal.showModal}/>
    </div>;
  }
}

function mapStateToProps(state, ownProps) {
  return {
    ...state,
  };
}

export default connect(mapStateToProps, {
  // pass in props
})(AppContainer);
