import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

function App() {
  return (
      <Router>
          <div className="App">
              <Header/>
              <Main/>
              <Footer/>
          </div>
      </Router>
  );
}

export default App;
