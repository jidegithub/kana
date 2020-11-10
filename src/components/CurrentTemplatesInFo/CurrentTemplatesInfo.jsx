import React from 'react'
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import "./CurrentInfoTemplates.scss"

function CurrentTemplatesInfo({ selected, templates }) {


  return (
    <div className="templatesinfo flex flex-justify-between">
      <p>{selected} <span>Templates</span></p>
      <p>{templates.length ? templates.length : 0} found</p>
    </div>
  )
};

CurrentTemplatesInfo.propTypes = {
  selected: Proptypes.string.isRequired,
  templates: Proptypes.array.isRequired
}

const mapStateToProps = (state) => ({
  selected: state.templates.selectedTemplate,
  templates: state.templates.filteredTemplates
});

export default connect(mapStateToProps)(CurrentTemplatesInfo);