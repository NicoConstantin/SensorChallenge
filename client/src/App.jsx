import './App.scss';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from "./pages/Home/Home";
import FormCreate from './pages/FormCreate/FormCreate';
import Detail from './pages/Detail/Detail';
import Footer from './components/Footer/Footer';

export default function App() {

  return (
    <div className="App bg-gradient-to-b from-black via-gray-800 to-gray-600 w-full h-full ">
      <BrowserRouter>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/create">
          <FormCreate/>
        </Route>
        <Route exact path="/detail/:id">
          <Detail/>
        </Route>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}
