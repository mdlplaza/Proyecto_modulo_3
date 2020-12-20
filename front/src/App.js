
import './App.css';
import Menu from "./Menu.js";
import Container from "./Container.js";
import Salud from "./Salud.js";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Cita from './Cita';
import Alimentacion from './alimentacion';


function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Container />
      <Route path="/salud">
        <Salud />
      </Route>
      <Route path="/alimentacion">
        <Alimentacion />
      </Route>
      <Route path="/cita">
          <Cita />
      </Route>
      
    </BrowserRouter>





  );
}

export default App;
