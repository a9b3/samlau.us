import './modal.scss';
import React, { Component, PropTypes } from 'react';
import ReactTransitionGroup from 'react-addons-transition-group';
import { connect } from 'react-redux'
import ContactModalContainer from './contact-modal/contact-modal.container.js';
import store from '../../store.js';
import { flipModal } from '../../services/modal.js';
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

  render() {
    const leave = this.state;
    const {
      flipModal,
      modal,
    } = this.props;

    const style = {};
    if (modal.showModal) {
      style.x = spring(1);
      style.y = spring(0);
    } else {
      style.x = spring(0);
      style.y = spring(100);
    }

    return (
      <Motion
        defaultStyle={{
          x: 0,
          y: 100,
        }}
        style={style}>
        {interpolatingStyle => {

          if (interpolatingStyle.x === 0) {
            return null;
          }

          const modalStyle = {
            opacity: interpolatingStyle.x,
          };

          console.log(modalStyle.opacity);

          if (interpolatingStyle.x === 0) {
            modalStyle.visibility = 'hidden';
          }

          const modalBoxStyle = {
            transform: `translate3d(0, ${interpolatingStyle.y}%, 0)`,
          };

          return (
            <div className="modal"
              style={modalStyle}
              onClick={this.closeModalHandler}>
              <div className="modal__box"
                style={modalBoxStyle}>
                <ContactModalContainer closeModal={this.props.flipModal}/>
              </div>
            </div>
          );
        }}
      </Motion>
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
})(ModalContainer);
