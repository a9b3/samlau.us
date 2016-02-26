import './about.scss';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'

class AboutContainer extends Component {
  constructor() {
    super();
  }

  render() {
    const about = {
      picUrl: 'img/profile.jpg',
      summary: 'Hello my name is sam and I like to do stuff.',
    };

    return (
      <div className="about">
        <div className="about__profile">
          <div className="about__profile__pic" style={{
            backgroundImage: `url(${about.picUrl})`
          }}>
          </div>
          <div className="about__profile__summary">
            <div>
              <div className="about__profile__summary__header">
                About
              </div>
              {about.summary}
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
