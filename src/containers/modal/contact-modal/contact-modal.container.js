import './contact-modal.scss';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'

class ContactModalContainer extends Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      sendMailAnimation: '',
    };
  }

  onSubmit(e) {
    e.preventDefault();
    const textarea = this.refs.textarea;
    this.setState({
      sendMailAnimation: 'send-mail-animation',
    });

    setTimeout(() => {
      this.props.closeModal();
    }, 1200);
  }

  render() {
    return <form className="contact-modal"
      onSubmit={this.onSubmit}>

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
