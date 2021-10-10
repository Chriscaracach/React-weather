import { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";
import Input from "./components/input";
import Display from "./components/display/display";
import Logo from "./components/logo";
import Loader from "./components/loader";

const Button = styled.button`
  margin-top: 2%;
  width: 100px;
  height: 40px;
  border-radius: 5px;
  font-size: large;
  border: #364f6b;
  background-color: #364f6b;
  color: #f5f5f5;
`;

function App() {
  const [Weather, setWeather] = useState({});
  const [Cities, setCities] = useState([]);
  const [CitySelect, setCitySelect] = useState("");

  //COLORES
  //364F6B (oscuro)
  //3FC1C9 (verde)
  //F5F5F5 (light)
  //FC5185 (rojo)

  useEffect(() => {
    fetch(
      "https://api.weatherapi.com/v1/search.json?key=9735ec656b7a47948b0134437212109&q=Argentina"
    )
      .then((result) => result.json())
      .then((result) => {
        setCities(result);
      })
      .catch((err) => {
        return err;
      });
    // return () => {};
  }, []);

  const handleCitySelect = (e) => {
    let fil = Cities.filter((item) => {
      return item.name === e.target.value;
    });
    setCitySelect(fil[0].url);
  };

  const searchCity = () => {
    fetch(
      "https://api.weatherapi.com/v1/current.json?key=9735ec656b7a47948b0134437212109&q=" +
        CitySelect +
        "&aqi=no&lang=es"
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setWeather(res);
      })
      .catch((err) => {
        return err;
      });
  };
  return (
    <div className="App">
      <Logo></Logo>
      <Input cities={Cities} handleCitySelect={handleCitySelect}></Input>
      <Button
        onClick={() => {
          searchCity();
        }}
      >
        Buscar
      </Button>
      {Object.keys(Weather).length !== 0 ? (
        <Display data={Weather}></Display>
      ) : null}
    </div>
  );
}

export default App;
