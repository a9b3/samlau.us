import './work.scss';
import React, { PropTypes } from 'react';
import OptionalAContainer from '../../../components/optional-a.container.js';

const WorkComponent = props =>
<div className="work">
  <OptionalAContainer href={props.url}
    className="work__img"
    target="_blank">
    <img src={props.imageUrl} alt="preview" />
  </OptionalAContainer>
  <div className="work__summary">
    <div className="work__summary__wrapper">
      <OptionalAContainer className="work__summary__header"
        href={props.url}
        target="_blank">
        {props.title}
      </OptionalAContainer>
      {props.description}
    </div>
  </div>
</div>;

WorkComponent.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
};

export default WorkComponent;
