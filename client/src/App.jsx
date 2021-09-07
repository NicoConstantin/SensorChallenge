import './App.scss';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

export default function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Route path="/">
        <Home/>
      </Route>
    </BrowserRouter>
  )
}
