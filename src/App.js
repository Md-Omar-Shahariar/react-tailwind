import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/NavBar/Navbar";
import Pricing from "./Pricing/Pricing";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <h1 className="text-6xl">Welcome to my Pricing Club</h1>
      <Pricing></Pricing>
    </div>
  );
}

export default App;
