import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import { filterTemplatesParams, setSelectedTemplate } from '../../actions';

function SelectBox({ config, name, marg, filterTemplatesParams, setSelectedTemplate, filteredTemplates}) {

  const [value, setValue] = useState({})

  const handleOnchange = (e) => {
    const {value} = e.target
    setValue({value})
    filterTemplatesParams(filteredTemplates, {[name]: value})
  }

  const currentTemplate = () =>{
    if(name === "category")
      setSelectedTemplate(value);
    else if(!name || name){
      return null;
    }
  }

  useEffect(() => {
    currentTemplate()
  }, [value,  name])

  return (
    <select style={{ marginRight: marg}}
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
  filteredTemplates: state.templates.filteredTemplates,
  filterParam: state.templates.templateFilterParam,
  console: console.log(state)
})

export default connect(mapStateToProps, { filterTemplatesParams, setSelectedTemplate})(SelectBox);

