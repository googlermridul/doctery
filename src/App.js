import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import ServicePage from './components/ServicePage/ServicePage';
import About from './components/About/About';
import Login from './components/Login/Login';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/services">
          <ServicePage />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/service/:serviceId">
          <ServiceDetails />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
