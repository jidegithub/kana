import './App.scss';
import Prompt from './components/Prompt/Prompt';
// import Select from './components/sampleSelect/SelectBox';
import SearchBox from './components/SearchBox/SearchBox';
import Templates from './components/Templates/Templates';
import SelectDropDown from './components/SelectDropDown/SelectDropDown';
// import OrderSelectBox from './components/sampleSelect/OrderSelectBox';
// import DateSelectBox from './components/sampleSelect/DateSelectBox';

function App() {
  const category = {name: "category", options: ["All", "Education", "E-commerce", "Health"]};
  const order = {name: "order", options: ["default", "ascending", "descending"]};
  const date = {name:"date", options: ["default", "ascending", "descending" ]};
  const info = "Tada! Get started with free template. Can't find what you are looking for? Search from the 1000+ available templates"

  return (
    <div className="App">
      <header className="header">
        <section>
          <SearchBox/>
        </section>
        <section>
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
          <SelectDropDown/>
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
