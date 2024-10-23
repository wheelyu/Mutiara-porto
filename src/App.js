import "./App.css";
import Navbar from "./components/Navbar";
import CustomShapeDivider from "./components/CustomShapeDivider";
import ContentWithImage from "./components/content";
import About from "./components/about";
import React from "react";
function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

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
