import React, { Component, PropTypes } from 'react';

export default class OptionalAContainer extends Component {
  constructor() {
    super();
  }

  render() {
    const {
      href,
    } = this.props;

    if (href) {
      return (
        <a {...this.props}>
          {this.props.children}
        </a>
      );
    }
    return (
      <div {...this.props}>
        {this.props.children}
      </div>
    );
  }
}

OptionalAContainer.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
};
