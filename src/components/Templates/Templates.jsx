import React, { useEffect, Suspense, lazy } from 'react'
import short from 'short-uuid';
import CurrentTemplatesInfo from '../CurrentTemplatesInFo/CurrentTemplatesInfo'
import Proptypes  from 'prop-types';
import { connect } from 'react-redux';
import './Templates.scss';
import { fetchTemplates } from '../../actions/index';
const Template = lazy(() => import('../Template/Template'));
// import Template from '../Template/Template';


function Templates({ unModifiedTemplates, fetchTemplates, page}) {
  const paginate = (array, page_size, page_number) => {
    // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  }

  const chunkedTemeplates = paginate(unModifiedTemplates, 50, [page])

  const templatesList = chunkedTemeplates.map(function (template) {
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

  return (
    <section className="templates-grand-container">
      <CurrentTemplatesInfo/>
      <div className="templates-grid">
        <Suspense fallback={templateListUnavailable()}>
          {chunkedTemeplates.length ? templatesList : 
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

