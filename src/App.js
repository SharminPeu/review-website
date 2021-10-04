// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Courses from './components/Courses/Courses';
import NotFound from './components/NotFound/NotFound';
import MenuBar from './components/MenuBar/MenuBar';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <div className="App">
      <Router>
        <MenuBar></MenuBar>
        
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/courses">
          <Courses></Courses>
          </Route>
          <Route path="/contact">
          <Contact></Contact>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
  
        </Switch>
        <Footer></Footer>
      </Router>
      
    </div>
  );
}

export default App;
