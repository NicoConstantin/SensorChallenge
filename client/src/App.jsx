import './App.scss';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from "./pages/Home/Home";

export default function App() {

  return (
    <BrowserRouter>
      <Route path="/">
        <Home/>
      </Route>
    </BrowserRouter>
  )
}
