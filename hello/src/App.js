import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Images from "./components/Images";
function App() {
  return (
    <div className="App">
      <div id="headerIntro">
        <Header />
        <Intro />
      </div>
      <Images/>
    </div>
  );
}

export default App;
