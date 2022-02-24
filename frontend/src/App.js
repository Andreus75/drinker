import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import Footer from "./components/footer/Footer";
import MainNavigation from "./components/mainNavigation/MainNavigation";
import HeaderNavigation from "./components/headerNavigation/HeaderNavigation";

function App() {
  return (
      <Router>
          <div className="App">
              <HeaderNavigation/>
              <MainNavigation/>
              <Footer/>
          </div>
      </Router>
  );
}

export default App;
