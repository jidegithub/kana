import React, { useEffect, Suspense, lazy } from 'react'
import short from 'short-uuid';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import './Templates.scss';
import { fetchTemplates } from '../../actions/index';
const Template = lazy(() => import('../Template/Template'));
// import Template from '../Template/Template';


function Templates(props) {
  const {templates} = props;
  
  const templatesList = templates.map(function (template) {
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
    props.fetchTemplates()
    // return () => {
    //   cleanup
    // }
    console.log(props)
  }, [props])

  return (
    <div className="templates-grid">
      <Suspense fallback={templateListUnavailable()}>
        {templates.length ? templatesList : 
      <div><p>No templates found! try filtering.</p></div>}
      </Suspense>
      {/* {templates.length ? templatesList : 
      <div><p>No templates found! try filtering.</p></div>} */}
      {/* <Template
        

      />
      <Template
       

      />
      <Template
        

      />
      <Template
        key={short.generate()}

      /> */}
    </div>
  )
};

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, { fetchTemplates })(Templates);

// Template.propTypes = {
//   fetchTemplates: PropTypes.func,
//   templates: PropTypes.array,
// }