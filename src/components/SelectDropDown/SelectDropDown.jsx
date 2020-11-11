import React, { useRef, useState} from 'react'
import Proptypes from 'prop-types'
import { connect } from 'react-redux';
import {
  SPACEBAR_KEY_CODE,
  ENTER_KEY_CODE,
  DOWN_ARROW_KEY_CODE,
  UP_ARROW_KEY_CODE,
  ESCAPE_KEY_CODE
} from "../../utils/keyboardCodes"
import "./SelectDropDown.scss"

function SelectDropDown({ dropdownOptions, label, id, defaultValue, filteredTemplates, allTemplates, dispatch, action, actionII }) {

  const list = useRef(null);
  const listContainer = useRef(null)
  const dropDownArrow = useRef(null)
  const listItems = useRef([])
  const dropDownSelectedNode = useRef(null)

  const [listItemIds, setListItemIds] = useState([])

  // useEffect(() => {
  //   document.body.addEventListener("click", onClickOutside);
  //   return () => {
  //     document.removeEventListener("click", onClickOutside);
  //   }
  // }, [])

  const AddOptionToListItemId = () => {
    // Add each list items id to the listItemsids array
    let ids = dropdownOptions.map(option => option.id);
    setListItemIds(ids)
  }

  const handleOnSelect = (e) => {
    const { innerText } = e.target
    toggleAction(innerText)
    setSelectedListItem(e);
    closeList();
  }

  const toggleAction = (selected) => {
    switch (label) {
      case "Category":
        dispatch(selected !== "All" ? action(allTemplates, selected) : actionII(allTemplates, selected));
        break;
      default:
        dispatch(action(filteredTemplates, selected))
    }
  }
  // const onClickOutside = e => {
  //   // const { onClose } = this.props;
  //   const element = e.target;

  //   if (this.list.current && !this.list.current.contains(element)) {
  //     e.preventDefault();
  //     e.stopPropagation();
  //     closeList();
  //   }
  // };

  const setSelectedListItem = (e) => {
    let selectedTextToAppend = document.createTextNode(e.target.innerText);
    dropDownSelectedNode.current.innerHTML = null;
    dropDownSelectedNode.current.appendChild(selectedTextToAppend);
  }

  const closeList = () => {
    list.current.classList.remove("open");
    dropDownArrow.current.classList.remove("expanded");
    listContainer.current.setAttribute("aria-expanded", false);
  }

  const toggleListVisibility = (e) => {
    AddOptionToListItemId()
    let openDropDown = SPACEBAR_KEY_CODE.includes(e.keyCode) || e.keyCode === ENTER_KEY_CODE;

    if (e.keyCode === ESCAPE_KEY_CODE) {
      closeList();
    }

    if (e.type === "click" || openDropDown) {
      list.current.classList.toggle("open");
      dropDownArrow.current.classList.toggle("expanded");
      listContainer.current.setAttribute(
        "aria-expanded",
        list.current.classList.contains("open")
      );
    }

    if (e.keyCode === DOWN_ARROW_KEY_CODE) {
      focusNextListItem(DOWN_ARROW_KEY_CODE);
    }

    if (e.keyCode === UP_ARROW_KEY_CODE) {
      focusNextListItem(UP_ARROW_KEY_CODE);
    }
  }

  const focusNextListItem = (direction) => {
    const activeElementId = document.activeElement.id;
    if (activeElementId === "dropdown__selected") {
      document.querySelector(`#${listItemIds[0]}`).focus();
    } else {
      const currentActiveElementIndex = listItemIds.indexOf(activeElementId);
      if (direction === DOWN_ARROW_KEY_CODE) {
        const currentActiveElementIsNotLastItem =
          currentActiveElementIndex < listItemIds.length - 1;
        if (currentActiveElementIsNotLastItem) {
          const nextListItemId = listItemIds[currentActiveElementIndex + 1];
          document.querySelector(`#${nextListItemId}`).focus();
        }
      } else if (direction === UP_ARROW_KEY_CODE) {
        const currentActiveElementIsNotFirstItem =
          currentActiveElementIndex > 0;
        if (currentActiveElementIsNotFirstItem) {
          const nextListItemId = listItemIds[currentActiveElementIndex - 1];
          document.querySelector(`#${nextListItemId}`).focus();
        }
      }
    }
  }


  return (
    <>
      <ul className="dropdown" id={id}>
        <li id="dropdown-label" className="dropdown__label">
          {label}
        </li>
        <li
          onClick={toggleListVisibility}
          onKeyDown={toggleListVisibility}
          ref={dropDownSelectedNode}
          role="button"
          aria-labelledby="dropdown-label"
          id="dropdown__selected"
          tabIndex="0"
        >
          {defaultValue}
        </li>

        

        <li ref={listContainer} role="list" className="dropdown__list-container">
          <svg xmlns="http://www.w3.org/2000/svg" ref={dropDownArrow} className="icon dropdown__arrow icon-tabler-chevron-down" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"
            fillRule="evenodd"
            >
            <path stroke="none" d="M10 0L5 5 0 0z" />
            <polyline points="6 9 12 15 18 9" />
            <title>Open drop down</title>
          </svg>
          <ul ref={list} className="dropdown__list">
            {dropdownOptions.map((option, i) =>
              <li key={option.id}
                onClick={handleOnSelect}
                id={option.id}
                ref={el => listItems.current[option.id] = el}
                className="dropdown__list-item" tabIndex="0">
                {option.name}
              </li>)}
          </ul>
        </li>
      </ul>
    </>
  )
};

SelectDropDown.propTypes = {
  dropdownOptions: Proptypes.array.isRequired,
  id: Proptypes.string.isRequired,
  label: Proptypes.string.isRequired,
  defaultValue: Proptypes.string.isRequired,
  filteredTemplates: Proptypes.array.isRequired,
  allTemplates: Proptypes.array.isRequired,
  dispatch: Proptypes.func.isRequired
}

const mapStateToprops = (state) => ({
  allTemplates: state.templates.templates,
  filteredTemplates: state.templates.filteredTemplates,
  order: state.templates.order,
  dateCreated: state.dateCreated,
  selectedTemplate: state.templates.selectedTemplate,
})

export default connect(mapStateToprops)(SelectDropDown);



