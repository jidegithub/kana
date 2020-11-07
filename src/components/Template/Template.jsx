import React from 'react'
import './Template.scss'

export default function Template({description, name}) {
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
    // <div div className = "template-container" >
    //   <h3 className="flex flex-justify-center">
    //     <span>Alumni Membership Form Template</span>
    //   </h3>
    //   <div className="template-info">
    //     <p>Engage your alumni network better with this
    //     alumni registration Template. Embed this in your website... 
    //     </p>
    //   </div>

    //   <a href="www.formplus.com" className='cta'>Use Template</a>
    // </div >
};
