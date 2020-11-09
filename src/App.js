import './App.scss';
import Prompt from './components/Prompt/Prompt';
// import Select from './components/sampleSelect/SelectBox';
import SearchBox from './components/SearchBox/SearchBox';
import Templates from './components/Templates/Templates';
import SelectDropDown from './components/SelectDropDown/SelectDropDown';
// import OrderSelectBox from './components/sampleSelect/OrderSelectBox';
// import DateSelectBox from './components/sampleSelect/DateSelectBox';
// import { sortTemplatePerDate, sortTemplatePerNameOrder} from '../src/actions'

function App() {
  // const category = {name: "category", options: ["All", "Education", "E-commerce", "Health"]};
  // const order = {name: "order", options: ["default", "ascending", "descending"]};
  // const date = {name:"date", options: ["default", "ascending", "descending" ]};
  const info = "Tada! Get started with free template. Can't find what you are looking for? Search from the 1000+ available templates"

  const category_mega = [{name:"education", id: 63}, {name:"e-commerce", id:15}, {name:"health", id:447}];
  const order_mega = [{name: "ascending", id: 9652}, {name: "descending", id: 5452}];
  const date_mega = [{ name: "ascending", id: 9954 }, { name: "descending", id: 333 }];

  return (
    <div className="App">
      <header className="header">
        <section>
          <SearchBox/>
        </section>
        <section className="select-boxes">
          {/* <Select
            config={category}
            name={category.name}
            marg={16}
          />
          <OrderSelectBox
            config={order}
            name={order.name}
            marg={16}
          />
          <DateSelectBox
            config={date}
            name={date.name}
          /> */}
          <SelectDropDown
            dropdownOptions={category_mega}
            label="Category"
            defaultValue="all"
            // action={action.filterTemplatesParams, action.setSelectedTemplate}
          />
          <SelectDropDown
            dropdownOptions={order_mega}
            label="Order"
            defaultValue="default"
            // action={sortTemplatePerNameOrder}
          />
          <SelectDropDown
            dropdownOptions={date_mega}
            label="Date"
            defaultValue="default"
            // action={sortTemplatePerDate}
          />
        </section>
      </header>
      <main className="main">
        <Prompt
          info={info}
        />
        <Templates/>
      </main>
    </div>
  );
}

export default App;
