import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux';
import { sortTemplatePerNameOrder } from '../../actions';

function OrderSelectBox({ config, name, marg, allTemplates, filteredTemplates, sortTemplatePerNameOrder}) {
  const [value, setValue] = useState('')

  const handleOnchange = (e) => {
    const {value} = e.target;
    setValue(value)
    sortTemplatePerNameOrder(filteredTemplates, value)
    // console.log(value)
  }

  useEffect(() => {
    
  }, [value])

  return (
    <select style={{ marginRight: marg}}
      name="order"
      onChange={handleOnchange}
      value={value}
    >
      {config.options.map((option, i) => 
        <option key={i}
          value={option}
        >
          {option}
        </option>
      )}
    </select>
  )
};

const mapStateToProps = (state) => ({
  allTemplates: state.templates.templates,
  filteredTemplates: state.templates.filteredTemplates,
  sort: state.templates.order,
  console: console.log(state)
})

export default connect(mapStateToProps, {sortTemplatePerNameOrder})(OrderSelectBox);