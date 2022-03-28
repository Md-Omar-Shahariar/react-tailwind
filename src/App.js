import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/NavBar/Navbar";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <h1 className="text-6xl">Welcome to my Pricing Club</h1>
      <Navbar></Navbar>
    </div>
  );
}

export default App;
