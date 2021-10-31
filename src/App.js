import Loader from 'react-loader-spinner';
import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Headers from './Components/Headers/Headers';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';
import LogIn from './Components/LogIn/LogIn';
import Register from './Components/Register/Register';
import ContactUs from './Components/ContactUs/ContactUs';
import Footer from './Components/Footer/Footer';
import AuthProvider from './Components/context/AuthProvider';
import UserDetails from './Components/UserDetails/UserDetails';
import AddService from './Components/AddService/AddService';
import PrivateRoute from './Components/LogIn/PrivateRoute/PrivateRoute';
import ServiceInfo from './Components/Services/Service/ServiceInfo/ServiceInfo';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={2000} //3 secs
        />
        <Router>
          <Headers></Headers>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/services/:id'>
              <ServiceInfo></ServiceInfo>
            </PrivateRoute>
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
            <Route path='/userDetails'>
              <UserDetails></UserDetails>
            </Route>
            <Route path='/addService'>
              <AddService></AddService>
            </Route>

            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
