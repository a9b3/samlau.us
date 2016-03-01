import './works.scss';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import WorkComponent from './work/work.component.js';

class WorksContainer extends Component {
  constructor() {
    super();
    this.renderWorks = this.renderWorks.bind(this);
  }

  renderWorks(works) {
    return works.map((work, i) => {
      return <WorkComponent key={i} {...work}/>;
    });
  }

  render() {
    const {
      works,
    } = this.props.app;

    return (
      <div className="works">
        {this.renderWorks(works)}
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
})(WorksContainer);
