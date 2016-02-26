import './work.scss';
import React, { PropTypes } from 'react';

const WorkComponent = props =>
<div className="work">
  <div className="work__img">
    <img src={props.imageUrl} alt="preview" />
  </div>
  <div className="work__summary">
    <div className="work__summary__wrapper">
      <div className="work__summary__header">
        {props.title}
      </div>
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
