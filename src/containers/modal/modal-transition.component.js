import React, { Component, PropTypes } from 'react';
import ReactTransitionGroup from 'react-addons-transition-group';
import ModalContainer from './modal.container.js';

const KEY = 'MODAL_TRANSITION';
let _counter = 0;

function renderModal(showModal) {
  const key = KEY + _counter++;
  const modal = (showModal) ?
    <ModalContainer /> : null;
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
