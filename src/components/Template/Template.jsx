import React, {memo} from 'react'
import Proptypes from 'prop-types';
import './Template.scss'

function Template({description, name}) {
  return (
    <div className="template-container">
      <h3 className="flex flex-justify-center">
        <span>{name}</span>
      </h3>
      <div className="template-info">
        <p>{description}</p>
      </div>

      <a href="www.formplus.com" className='cta'>Use Template</a>
    </div>
  )
};

Template.propTypes = {
  name: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired
}
export default memo(Template);
