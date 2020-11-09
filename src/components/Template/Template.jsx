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
};
