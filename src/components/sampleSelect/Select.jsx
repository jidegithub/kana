import React from 'react'

export default function Select({ options, marg }) {

  return (
    <select style={{ marginRight: marg}}>
      {options.map((option, i) => 
        <option key={i}>{option}</option>
      )}
    </select>
  )
}
