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
import Contact from './components/Contact/Contact';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';

function App() {
  return (
    <AuthProvider>
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
          <PrivateRoute path="/service/:serviceId">
            <ServiceDetails />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;


// https://github.com/Programming-Hero-Web-Course3/healthcare-related-website-googlermridul
// https://docteryyy.web.app/