import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import './SearchBox.scss'
import {searchTemplate} from '../../actions' 


function SearchBox({ searchTemplate, allTemplates, filteredTemplates, searchParam}) {
  const [param, setParam] = useState("")

  const handleOnChange = e => {
    const { value } = e.target;
    setParam(value)
    searchTemplate(allTemplates, value)
    // console.log(e.target.value)
  }

  useEffect(() => {
  }, [param])

  return (
    <div className="search-box">
      <input data-cy="search"
        onChange={handleOnChange}
        value={searchParam}
      className="search-box--input block-display appearance-none px-2 font-medium w-full border border-gray-200 text-gray-900 leading-tight overflow-hidden"
        placeholder="Search Templates" type="text" autoComplete="off"/>

      <div className="search-box-icon-container">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" className="icon icon-tabler icon-tabler-search" width="21" height="21" viewBox="0 0 24 24" strokeWidth="2" stroke="#cbc8c8" data-icon="search" role="img" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" />
          <circle cx="10" cy="10" r="7" />
          <line x1="21" y1="21" x2="15" y2="15" />
        </svg>
      </div>
    </div>
  )
};

SearchBox.propTypes = {
  searchTemplate: Proptypes.func.isRequired,
  allTemplates: Proptypes.array.isRequired
}

const mapStateToProps = (state) => ({
  allTemplates: state.templates.templates,
  filteredTemplates: state.templates.filteredTemplates,
  searchParam: state.templates.searchParam
});

export default connect(mapStateToProps ,{searchTemplate})(SearchBox);




