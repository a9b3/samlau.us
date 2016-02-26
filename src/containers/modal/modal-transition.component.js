import React, { Component, PropTypes } from 'react';
import ReactTransitionGroup from 'react-addons-transition-group';
import ModalContainer from './modal.container.js';

class TransitionWrapper extends Component {
  constructor() {
    super();
  }

  componentWillEnter(cb) {
    cb();
  }

  componentWillLeave(cb) {
    this.setState({
      leave: true,
    });
    setTimeout(() => {
      cb();
    }, 1000);
  }

  render() {
    return React.cloneElement(this.props.children, {
      ...this.state,
    });
  }
}

const KEY = 'MODAL_TRANSITION';
let _counter = 0;

function renderModal(showModal) {
  const key = KEY + _counter++;
  const modal = (showModal) ?
  <TransitionWrapper key={key}>
    <ModalContainer />
  </TransitionWrapper> : null;
  return modal;
}

const ModalTransitionComponent = props =>
<ReactTransitionGroup>
    {renderModal(props.showModal)}
</ReactTransitionGroup>;

ModalTransitionComponent.propTypes = {
  showModal: PropTypes.bool,
};

export default ModalTransitionComponent;
