import Loader from 'react-loader-spinner';
import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Headers from './Components/Headers/Headers';
import Services from './Components/Services/Services';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';
import LogIn from './Components/LogIn/LogIn';
import Register from './Components/Register/Register';
import ContactUs from './Components/ContactUs/ContactUs';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
      <Router>
        <Headers></Headers>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/services'>
            <Services></Services>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path='/login'>
            <LogIn></LogIn>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/contactUs">
            <ContactUs></ContactUs>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
