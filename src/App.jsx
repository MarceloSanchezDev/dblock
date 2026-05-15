import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <main className="home-page">
      <Nav></Nav>
      <Home />
      <Footer></Footer>
    </main>
  );
}

export default App;
