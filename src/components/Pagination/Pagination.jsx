import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import { decrementPage, incrementPage } from '../../actions';
import './Pagination.scss'


function Pagination({ page, incrementPage, decrementPage, pageMax}) {
  // const [count, setCount] = useState(0)

  // const handleIncrement = () =>
  //   setCount(currentCount => currentCount + 1);

  // const handleDecrement = () =>
  //   setCount(currentCount => currentCount - 1);

  // useEffect(() => setCount(currentCount => currentCount + 1), []);

  const disableNext = () => page === pageMax ? null : incrementPage 
  

  const disablePrevious = () => page === 1 ? null : decrementPage

  useEffect(() => {
    // setPageMax(page_max_rounded)
  }, [page, pageMax])

  return (
    <div className="pagination-main-info flex flex-justify-between">
      <span className="previous-btn">
        <p onClick={disablePrevious()}>Previous</p>
      </span>
      <span>
      <p><span className="current_page_display">{page}</span> of {pageMax}</p>
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
  pageMax: Proptypes.number.isRequired
}

const mapStateToprops = (state) => ({
  page: state.templates.page,
  pageMax: state.templates.pageMax
})

export default connect(mapStateToprops, {incrementPage, decrementPage})(Pagination);

