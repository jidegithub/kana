import React from 'react'
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import { decrementPage, incrementPage } from '../../actions';
import './Pagination.scss'


function Pagination({ page, incrementPage, decrementPage}) {
  

  const disableNext = () => page === -1 ? null : incrementPage 
  
  const disablePrevious = () => page === 1 ? null : decrementPage


  return (
    <div className="pagination-main-info flex flex-justify-between">
      <span className="previous-btn">
        <p onClick={disablePrevious()}>Previous</p>
      </span>
      <span>
      <p><span className="current_page_display">{page}</span> of 14</p>
      </span>
      <span className="next-btn">
        <p onClick={disableNext()} className="switch_next_container">
          Next
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <polyline points="9 6 15 12 9 18" />
            </svg>
          </span>
        </p>
      </span>
    </div>
  )
};

Pagination.propTypes = {
  incrementPage: Proptypes.func.isRequired,
  decrementPage: Proptypes.func.isRequired,
  page: Proptypes.number.isRequired,
}

const mapStateToprops = (state) => ({
  page: state.templates.page,
})

export default connect(mapStateToprops, {incrementPage, decrementPage})(Pagination);

