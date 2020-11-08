import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { sortTemplatePerDate } from '../../actions';

function DateSelectBox({ config, name, allTemplates, filteredTemplates, sortTemplatePerDate }) {
  const [value, setValue] = useState('')

  const handleOnchange = (e) => {
    const { value } = e.target;
    setValue(value)
    sortTemplatePerDate(allTemplates, value)
    // console.log(value)
  }

  useEffect(() => {
    
  }, [value])

  return (
    <select
      name="date"
      onChange={handleOnchange}
      value={value}
    >
      {config.options.map((option, i) =>
        <option key={i}
          value={option}
        >
          {option}
        </option>
      )}
    </select>
  )
};

const mapStateToProps = (state) => ({
  allTemplates: state.templates.templates,
  filteredTemplates: state.templates.filteredTemplates,
  sortParam: state.templates.dateCreated,
  // console: console.log(state)
})

export default connect(mapStateToProps, { sortTemplatePerDate})(DateSelectBox);
