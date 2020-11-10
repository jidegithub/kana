import React from 'react'
import Proptypes from 'prop-types';
import "./prompt.scss"

export default function Prompt({info}) {
  return (
    <div className="main-info-box flex flex-justify-center">
      <p className="flex items-center">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-info-circle" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" />
            <circle cx="12" cy="12" r="9" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
            <polyline points="11 12 12 12 12 16 13 16" />
          </svg>
        </span>
        {info}
      </p>
    </div>
  )
};

Prompt.propTypes = {
  info: Proptypes.string.isRequired,
}
