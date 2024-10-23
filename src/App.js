import "./App.css";
import Navbar from "./components/Navbar";
import CustomShapeDivider from "./components/CustomShapeDivider";
import ContentWithImage from "./components/content";
import About from "./components/about";
function App() {
  return (
    <div className="App">
      <Navbar />
      <ContentWithImage />
      <CustomShapeDivider />
      <About />
    </div>
  );
}

export default App;
