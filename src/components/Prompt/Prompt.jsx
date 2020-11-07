import React from 'react'
import "./prompt.scss"

export default function Prompt({info}) {
  return (
    <div className="main-info-box flex flex-justify-center">
      <p>{info}</p>
    </div>
  )
}
