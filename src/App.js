import {
  Navbar,
  Hero,
  About,
  Projects,
  Services,
  Skills,
  Dashboard,
  Footer,
} from "./components";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
import Login from "./components/login";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/admin/:param">
          <Dashboard />
        </Route>
        <Route path="/">
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Services />
          <Skills />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
