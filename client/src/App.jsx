import './App.scss';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from "./pages/Home/Home";
import FormCreate from './pages/FormCreate/FormCreate';
import Detail from './pages/Detail/Detail';

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
        <Route path="/:id">
          <Detail/>
        </Route>
      </BrowserRouter>
    </div>
  )
}
