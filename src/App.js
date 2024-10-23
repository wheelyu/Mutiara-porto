import "./App.css";
import Navbar from "./components/Navbar";
import CustomShapeDivider from "./components/CustomShapeDivider";
import ContentWithImage from "./components/content";
import About from "./components/about";
import Contact from "./components/contact";
import React from "react";
import StickyCtaButton from "./components/ctaButton";
import Swal from "sweetalert2";
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
  const handleClick = () => {
    Swal.fire({
      title: "Sweet!",
      text: "Modal with a custom image.",
      imageUrl: "muti.jpg",
      imageWidth: 400,
      imageHeight: 500,
      imageAlt: "Custom image",
    });
  };
  return (
    <div className="App">
      <Navbar />
      <ContentWithImage />
      <CustomShapeDivider />
      <About />
      <Contact />
      <StickyCtaButton label="Get Started" onClick={handleClick} />
    </div>
  );
}

export default App;
