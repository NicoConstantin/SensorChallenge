import './App.scss';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from "./pages/Home/Home";
import FormCreate from './pages/FormCreate/FormCreate';

export default function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/create">
          <FormCreate/>
        </Route>
      </BrowserRouter>
    </div>
  )
}
