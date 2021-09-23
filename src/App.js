import { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";
import Input from "./components/input";
import Display from "./components/display";
import Logo from "./components/logo";

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
  const [Weather, setWeather] = useState([]);
  const [Cities, setCities] = useState([]);

  //COLORES
  //364F6B (oscuro)
  //3FC1C9 (verde)
  //F5F5F5 (light)
  //FC5185 (rojo)
  useEffect(() => {
    // "https://api.weatherapi.com/v1/current.json?key=9735ec656b7a47948b0134437212109&q=London&aqi=no"

    fetch(
      "http://api.weatherapi.com/v1/search.json?key=9735ec656b7a47948b0134437212109&q=Argentina"
    )
      .then((result) => result.json())
      .then((result) => {
        setCities(result);
      })
      .catch((err) => {
        return err;
      });
  }, []);

  return (
    <div className="App">
      {/* <Logo></Logo>
      <Input cities={Cities}></Input>
      <Button>Buscar</Button> */}
      <Display></Display>
      {/* {Weather ? <Display></Display> : null} */}
    </div>
  );
}

export default App;
