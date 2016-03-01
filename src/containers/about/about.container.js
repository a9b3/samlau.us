import './about.scss';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'

class AboutContainer extends Component {
  constructor() {
    super();
  }

  render() {
    const {
      about,
    } = this.props.app;

    return (
      <div className="about">
        <div className="about__profile">
          <div className="about__profile__pic">
            <img src={about.picUrl} alt="avatar" />
          </div>
          <div className="about__profile__summary">
            <div>
              <div className="about__profile__summary__header">
                About
              </div>
              <div dangerouslySetInnerHTML={{
                __html: about.summary,
              }} />
            </div>
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
  // pass in props
})(AboutContainer);
