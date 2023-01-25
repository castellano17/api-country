import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import CardCountry from "./components/CardCountry";

function App() {
  const [country, setCountry] = useState();
  const pais = "Nicaragua";

  const getInfoCountry = () => {
    const URL = `https://restcountries.com/v3.1/name/${pais}`;

    axios
      .get(URL)
      .then((res) => setCountry(res.data[0]))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getInfoCountry();
  }, []);

  return (
    <div className="App">
      {country ? <CardCountry country={country} /> : <h1>Loading...</h1>}
    </div>
  );
}

export default App;
