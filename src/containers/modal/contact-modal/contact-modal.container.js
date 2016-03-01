import './contact-modal.scss';
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { sendEmail } from '../../../services/send-email.js';

class ContactModalContainer extends Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this._closeModal = this._closeModal.bind(this);
    this.state = {
      sendMailAnimation: '',
      sent: false,
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
    console.log('here', this.state.sent);
    e.preventDefault();
    if (this.state.sent) return;

    const {
      sendEmail,
    } = this.props;

    const email = this.refs.email.value;
    const subject = this.refs.subject.value;
    const textarea = this.refs.textarea.value;

    const message = {
      email,
      subject,
      message: textarea,
    };

    this.setState({
      sent: true,
    });

    sendEmail(message)
    .then(() => {
      this._closeModal();
    })
    .catch(e => {
      this.setState({
        sent: false,
      });
    });
  }

  render() {
    const {
      email,
    } = this.props;

    let sendEmailAnimation = (email.inProgress) ? 'sending-mail-animation' : '';
    if (this.state.sendMailAnimation) {
      sendEmailAnimation = this.state.sendMailAnimation;
    }

    const error = email.error;

    return <form className="contact-modal"
      onSubmit={this.onSubmit}
      >

      <input type="text"
        placeholder="Your Email"
        ref="email"
      />
      <input type="text"
        placeholder="Subject"
        ref="subject"
      />

      <textarea className="contact-modal__textarea"
        placeholder="Say Hello!"
        ref="textarea"
      />

      <button className="contact-modal__button"
        type="submit">
        <i className={`fa fa-envelope-o ${sendEmailAnimation}`}></i>
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
  sendEmail,
})(ContactModalContainer);
