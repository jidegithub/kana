import React from 'react'
import { connect } from 'react-redux';
import { setSelectedTemplate } from '../../actions';
import "./CurrentInfoTemplates.scss"

function CurrentTemplatesInfo({ setSelectedTemplate, selected, templates}) {

  // useEffect(() => {
  //   setSelectedTemplate("All")
  // }, [])

  return (
    <div className="templatesinfo flex flex-justify-between">
      <p>{selected} <span>Templates</span></p>
      <p>{templates.length ? templates.length : 0} found</p>
    </div>
  )
};

const mapStateToProps = (state) => ({
  selected: state.templates.selectedTemplate,
  templates: state.templates.filteredTemplates
});

export default connect(mapStateToProps, {setSelectedTemplate})(CurrentTemplatesInfo);


