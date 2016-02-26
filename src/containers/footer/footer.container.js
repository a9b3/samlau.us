import './footer.scss';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'

class FooterContainer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="footer">
        <div className="end">
          <div className="footer__item">
            &copy; Copyright 2016 Sam Lau
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
})(FooterContainer);
