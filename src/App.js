import "./App.css";
import Circles from "./images/pattern-circles.svg";
import PricingCard from "./components/pricing-card/pricing-card.component";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple, trafic-based pricing</h1>
        <h2>Sign-up for our 30-day trial. No credit card required.</h2>
        <img className="Circles" src={Circles} alt="circles" />
      </header>
      <PricingCard />
    </div>
  );
}

export default App;
