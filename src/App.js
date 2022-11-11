import logo from './logo.svg';
import './App.css';
import CountryList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import {Routes, Route} from "react-router-dom";
import countriesData from "./countries.json";

function App() {
  return (
    <div className="main">
      <div><CountryList countries={countriesData}/></div>
      <div>
        <Routes>
          <Route path="/countries/:countryID" element={<CountryDetails countries={countriesData} />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;