import React, { useRef, useState, useEffect } from 'react'
import {
  SPACEBAR_KEY_CODE,
  ENTER_KEY_CODE,
  DOWN_ARROW_KEY_CODE,
  UP_ARROW_KEY_CODE,
  ESCAPE_KEY_CODE
} from "../../utils/keyboardCodes"
import "./SelectDropDown.scss"
// import PropTypes from 'prop-types'

function SelectDropDown({ props }) {
  const dropdownOptions = [{ name: "gogo", id: 52 }, { name: "anime", id: 63 }, { name: "blow", id: 15 }];

  const list = useRef(null);
  const listContainer = useRef(null)
  const dropDownArrow = useRef(null)
  const listItems = useRef([])
  const dropDownSelectedNode = useRef(null)

  const [listItemIds, setListItemIds] = useState([])

  useEffect(() => {
    AddOptionToListItemId()
    // console.log(dropDownArrow.current)
  }, [])

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
    // console.log(listItemIds)
  }

  const handleOnSelect = (e) => {
    // console.log(e)
    setSelectedListItem(e);
    closeList();
  }


  // const toggleListVisibility = (e) => {
  //   console.log(e)
  //   AddOptionToListItemId()
  // }

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

  const toggleListVisibility = (e) =>  {
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
      <ul className="dropdown">
        <li id="dropdown-label" className="dropdown__label">
          Category
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
          Option 1
        </li>

        {/* <svg xmlns="http://www.w3.org/2000/svg" 
          className=" dropdown__arrow icon icon-tabler icon-tabler-chevron-down" 
          width="20" height="25" 
          viewBox="0 0 10 5" strokeWidth="2" 
          stroke="currentColor" fill="#b3c" 
          strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" />
          <title>Open drop down</title>
          <polyline points="6 9 12 15 18 9" />
        </svg> */}

        <svg
          ref={dropDownArrow}
          className="dropdown__arrow"
          width="10"
          height="5"
          viewBox="0 0 10 5"
          fill="#aca7a7"
          fillRule="evenodd"
        >
          <title>Open drop down</title>
          <path d="M10 0L5 5 0 0z"></path>
        </svg>
        <li ref={listContainer} aria-expanded="false" role="list" className="dropdown__list-container">
          <ul ref={list} className="dropdown__list">
            {dropdownOptions.map((option, i) =>
              <li key={option.id}
                onClick={handleOnSelect}
                id={option.id}
                ref={el => listItems.current[option.id] = el}
                className="dropdown__list-item" tabIndex="0">
                {option.name}
              </li>)}
            {/* <li ref={listItems} className="dropdown__list-item" tabIndex="0" id="option-1">
              Option 1
            </li>
            <li ref={listItems} className="dropdown__list-item" tabIndex="0" id="option-2">
              Option 2 is really longgggggggggggggggg
            </li> */}
          </ul>
        </li>
      </ul>
    </>
  )
};

// SelectDropDown.propTypes = {

// }

export default SelectDropDown;

