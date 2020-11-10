import React, { useEffect, Suspense, lazy } from 'react'
import short from 'short-uuid';
import CurrentTemplatesInfo from '../CurrentTemplatesInFo/CurrentTemplatesInfo'
import Proptypes  from 'prop-types';
import { connect } from 'react-redux';
// import chunk from 'lodash.chunk';
import './Templates.scss';
import { fetchTemplates } from '../../actions/index';
const Template = lazy(() => import('../Template/Template'));
// import Template from '../Template/Template';


function Templates({ unModifiedTemplates, fetchTemplates, page}) {
  // let chunked = chunk(unModifiedTemplates, 50)[page];
  // let totalLength = unModifiedTemplates.length;
  // // let chunkedLength = Math.round(chunked.length);
  
  // console.log(totalLength)
  // console.log(chunked)

  // const computeScreenHeight = () => {
  //   let kana = document.getElementById("root");
  //   let kanaHeight = kana.scrollHeight - 500;
  //   let localHeight = getComputedStyle(document.documentElement)
  //     .getPropertyValue('--templatesContainerHeight');
  //   // let localHeightNumber = parseInt(localHeight, 10);
  //   document.documentElement.style.setProperty('--templatesContainerHeight', kanaHeight)
    
  //   console.log(kanaHeight, localHeight)
  // }
  
  const templatesList = unModifiedTemplates.map(function (template) {
    return(
      <Template
        key={short.generate()}
        name={template.name}
        description={template.description}
      />
    )
  });

  const templateListUnavailable = () => <div><p>No templates found! try filtering.</p></div>

  useEffect(() => {
    fetchTemplates()
  }, [fetchTemplates])

  return (
    <section className="templates-grand-container">
      <CurrentTemplatesInfo/>
      <div className="templates-grid">
        <Suspense fallback={templateListUnavailable()}>
          {unModifiedTemplates.length ? templatesList : 
        <div style={{marginLeft: 10}}><p>No templates found! try filtering.</p></div>}
        </Suspense>
      </div>
    </section>
  )
};

Templates.propTypes = {
  fetchTemplates: Proptypes.func.isRequired,
  unModifiedTemplates: Proptypes.array.isRequired,
}

const mapStateToProps = (state) => ({
  unModifiedTemplates: state.templates.filteredTemplates,
  page: state.templates.page
});

export default connect(mapStateToProps, { fetchTemplates })(Templates);

