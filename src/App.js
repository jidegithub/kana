import './App.scss';
import Prompt from './components/Prompt/Prompt';
import Select from './components/sampleSelect/Select';
import SearchBox from './components/SearchBox/SearchBox';
import Templates from './components/Template/Template';
// import SelectDropDown from './components/SelectDropDown/SelectDropDown';

function App() {
  const category = ["All", "Education", "E-commerce", "Health"];
  const order = ["default", "ascending", "descending"];
  const date = ["Default", "Ascending", "Descending" ];
  const info = "Tada! Get started with free template. Can't find what you are looking for? Search from the 1000+ available templates"

  return (
    <div className="App">
      {/* <header className="header">
        <section>
          <SearchBox/>
        </section>
        <section>
          <Select
            options={category}
            marg={16}
          />
          <Select
            options={order}
            marg={16}
          />
          <Select
            options={date}
          />
        </section>
      </header> */}
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
