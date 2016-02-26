import './modal.scss';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import ContactModalContainer from './contact-modal/contact-modal.container.js';
import { flipModal } from '../../services/modal.js';

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

  showHide(modalShow) {
    return (modalShow) ? 'modal--show' : '';
  }

  componentWillLeave(cb) {
    debugger;
  }

  render() {
    const {
      modal,
    } = this.props;

    return (
      <div className={`modal ${this.showHide(modal.showModal)}`}
        onClick={this.closeModalHandler}>
        <div className="modal__box">
          <ContactModalContainer closeModal={this.props.flipModal}/>
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
})(ModalContainer);
