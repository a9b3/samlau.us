import './works.scss';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import WorkComponent from './work/work.component.js';

class WorksContainer extends Component {
  constructor() {
    super();
    this.state = {
      works: [
        {
          imageUrl: 'img/webmidi.png',
          description: 'An exploration into the web audio apis, building a daw using the browser.',
          url: '#',
          title: 'webmidi',
        },
        {
          imageUrl: 'img/appformix.png',
          description: 'Cloud datacenter analytics dashboard, using socket.io for real-time and d3 for the visualizations.',
          url: '#',
          title: 'appformix',
        },
      ],
    };
    this.renderWorks = this.renderWorks.bind(this);
  }

  renderWorks(works) {
    return works.map((work, i) => {
      return <WorkComponent key={i} {...work}/>;
    });
  }

  render() {
    return (
      <div className="works">
        {this.renderWorks(this.state.works)}
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
