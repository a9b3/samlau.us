import './contact-modal.scss';
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import axios from 'axios';

const EMAIL_ENDPOINT = '/api/send_mail';

class ContactModalContainer extends Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this._closeModal = this._closeModal.bind(this);
    this.state = {
      inProgress: false,
      sent: false,
      error: undefined,
    };
  }

  _closeModal() {
    this.setState({
      sent: true,
    });

    setTimeout(() => {
      this.props.closeModal(false);
    }, 1200);
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.state.inProgress || this.state.sent) return;

    const message = {
      email: this.refs.email.value,
      subject: this.refs.subject.value,
      message: this.refs.textarea.value,
    };

    this.setState({
      inProgress: true,
    });

    axios.post(EMAIL_ENDPOINT, message)
    .then(() => {
      this._closeModal();
    })
    .catch(e => {
      this.setState({
        error: e,
      });
    })
    .finally(() => {
      this.setState({
        inProgress: false,
      });
    })
  }

  renderError(error) {
    if (error) {
      return <div className="contact-modal__error">
        Server Error
      </div>;
    } else {
      return null;
    }
  }

  render() {
    const {
      error,
      inProgress,
      sent,
    } = this.state;

    let sendEmailAnimation;
    if (inProgress) {
      sendEmailAnimation = 'sending-mail-animation';
    } else if (sent) {
      sendEmailAnimation = 'send-mail-animation';
    } else {
      sendEmailAnimation = '';
    }

    return <form className="contact-modal"
      onSubmit={this.onSubmit}
      >

      {this.renderError(error)}

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
  // ...
})(ContactModalContainer);
