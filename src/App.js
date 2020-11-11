import './App.scss';
import { connect } from 'react-redux';
import Prompt from './components/Prompt/Prompt';
import SearchBox from './components/SearchBox/SearchBox';
import Templates from './components/Templates/Templates';
import SelectDropDown from './components/SelectDropDown/SelectDropDown';
import Pagination from './components/Pagination/Pagination';
import { sortTemplatePerDate, sortTemplatePerNameOrder, filterTemplatesParams, emptyFields } from './actions/index';

function App() {
  const info = "Tada! Get started with free template. Can't find what you are looking for? Search from the 1000+ available templates."
  const category_mega = [{ name: "All", id: 582226 }, { name: "Education", id: 63 }, { name: "E-commerce", id: 15 }, { name: "Health", id: 447 }];
  const order_mega = [{ name: "ascending", id: 9652 }, { name: "descending", id: 5452 }];
  const date_mega = [{ name: "ascending", id: 9954 }, { name: "descending", id: 333 }];
  // const category_actions = {
  //   filterTemplatesParams: filterTemplatesParams, 
  //   emptyFields: emptyFields
  // };

  return (
    <div className="App">
      <header className="header flex flex-justify-between">
        <section>
          <SearchBox />
        </section>
        <section className="select-container">
          <span>
            <small className="">Sort By:</small>
          </span>
          <div className="select-boxes items-center">
            <SelectDropDown
              dropdownOptions={category_mega}
              label="Category"
              defaultValue="all"
              id="category"
              action={filterTemplatesParams}
              actionII={emptyFields}
            />
            <SelectDropDown
              dropdownOptions={order_mega}
              label="Order"
              defaultValue="default"
              id="order"
              action={sortTemplatePerNameOrder}
            />
            <SelectDropDown
              dropdownOptions={date_mega}
              label="Date"
              defaultValue="default"
              id="date"
              action={sortTemplatePerDate}
            />
          </div>

        </section>
      </header>
      <main className="main">
        <Prompt info={info} />
        <Templates />
        <Pagination />
      </main>
    </div>
  );
};

export default connect(null, {
  sortTemplatePerNameOrder,
  sortTemplatePerDate,
  filterTemplatesParams,
  emptyFields
})(App);