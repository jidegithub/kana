import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import { setSelectedTemplate } from '../../actions';
import "./CurrentInfoTemplates.scss"

function CurrentTemplatesInfo({ setSelectedTemplate, selectedTemplate, templates}) {

  useEffect(() => {
    setSelectedTemplate({value: "All"})
  }, [])

  return (
    <div className="templatesinfo flex flex-justify-between">
      <p>{selectedTemplate.value} <span>Templates</span></p>
      <p>{templates.length ? templates.length : 0} found</p>
    </div>
  )
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, {setSelectedTemplate})(CurrentTemplatesInfo);


