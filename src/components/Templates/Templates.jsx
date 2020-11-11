import React, { useEffect, Suspense, lazy, memo } from 'react'
import short from 'short-uuid';
import CurrentTemplatesInfo from '../CurrentTemplatesInFo/CurrentTemplatesInfo'
import Proptypes  from 'prop-types';
import { connect } from 'react-redux';
import './Templates.scss';
import { fetchTemplates, setPageMax } from '../../actions/index';
const Template = lazy(() => import('../Template/Template'));


function Templates({ unModifiedTemplates, fetchTemplates, page}) {
  
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
  }, [fetchTemplates, unModifiedTemplates])

  useEffect(() => {
    setPageMax(page_max_rounded)
  }, [unModifiedTemplates, page_max_rounded])

  return (
    <section className="templates-grand-container">
      <CurrentTemplatesInfo/>
      <div className="templates-grid">
        <Suspense fallback={templateListUnavailable()}>
          {chunkedTemplates.length ? templatesList : 
        <div style={{marginLeft: 10}}><p>No templates found! try filtering.</p></div>}
        </Suspense>
      </div>
    </section>
  )
};

Templates.propTypes = {
  fetchTemplates: Proptypes.func.isRequired,
  unModifiedTemplates: Proptypes.array.isRequired,
  page: Proptypes.number.isRequired,
  setPageMax: Proptypes.func.isRequired
}

const mapStateToProps = (state) => ({
  unModifiedTemplates: state.templates.filteredTemplates,
  page: state.templates.page
});

export default memo(connect(mapStateToProps, { fetchTemplates })(Templates));

