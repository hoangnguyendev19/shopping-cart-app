import CartFeature from "features/Cart";
import { Header } from "features/Header";
import ProductFeature from "features/Product";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Switch>
          <Route path="/" exact component={ProductFeature} />
          <Route path="/products" component={ProductFeature} />
          <Route path="/cart" component={CartFeature} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
