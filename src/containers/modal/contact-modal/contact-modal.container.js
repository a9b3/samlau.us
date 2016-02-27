import './contact-modal.scss';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'

class ContactModalContainer extends Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this._closeModal = this._closeModal.bind(this);
    this.state = {
      sendMailAnimation: '',
      error: undefined,
    };
  }

  _closeModal() {
    this.setState({
      sendMailAnimation: 'send-mail-animation',
    });
    setTimeout(() => {
      this.props.closeModal();
    }, 1200);
  }

  onSubmit(e) {
    e.preventDefault();
    const textarea = this.refs.textarea;
    this.setState({
      sendMailAnimation: 'sending-mail-animation',
    });

    setTimeout(() => {
      this._closeModal();
    }, 1200);
  }

  onChange(e) {
    debugger;
  }

  render() {
    return <form className="contact-modal"
      onSubmit={this.onSubmit}
      onChange={this.onChange}>

      <input type="text" placeholder="Your Email" />
      <input type="text" placeholder="Subject" />

      <textarea className="contact-modal__textarea"
        placeholder="Say Hello!"
        ref="textarea"
      />

      <button className="contact-modal__button"
        type="submit">
        <i className={`fa fa-envelope-o ${this.state.sendMailAnimation}`}></i>
      </button>
    </form>;
  }
}

ContactModalContainer.propTypes = {
  closeModal: PropTypes.func,
}

function mapStateToProps(state, ownProps) {
  return {
    ...state,
  };
}

export default connect(mapStateToProps, {
  // pass in props
})(ContactModalContainer);
