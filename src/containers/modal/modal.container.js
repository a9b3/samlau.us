import './modal.scss';
import React, { Component, PropTypes } from 'react';
import ReactTransitionGroup from 'react-addons-transition-group';
import { connect } from 'react-redux'
import ContactModalContainer from './contact-modal/contact-modal.container.js';
import store from '../../store.js';
import { flipModal } from '../../services/modal.js';
import connectWithTransitionGroup from 'connect-with-transition-group';
import { Motion, spring } from 'react-motion';

class ModalContainer extends Component {
  constructor() {
    super();
    this.closeModalHandler = this.closeModalHandler.bind(this);
  }

  closeModalHandler(e) {
    const classNames = e.target.className.split(' ');
    if (!classNames.some(name => name === 'modal')) return;
    this.props.flipModal();
  }

  componentWillEnter(cb) {
    cb();
  }

  componentWillLeave(cb) {
    this.setState({
      leave: true,
    });
    setTimeout(() => {
      cb();
    }, 1200);
  }

  render() {
    const leave = this.state;
    const {
      modal,
    } = this.props;

    let leaveClass = '';
    if (leave) {
      leaveClass = 'modal--leave';
    }

    return (
      <Motion>
      </Motion>
    );

    return <div className={`modal ${leaveClass}`}
      onClick={this.closeModalHandler}>
      <div className="modal__box">
        <ContactModalContainer closeModal={this.props.flipModal}/>
      </div>
    </div>;
  }
}

function mapStateToProps(state, ownProps) {
  return {
    ...state,
  };
}

export default connectWithTransitionGroup(connect(mapStateToProps, {
  flipModal,
}, null, {
  withRef: true,
})(ModalContainer));
