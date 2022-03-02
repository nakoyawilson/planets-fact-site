import { useState, useEffect } from "react";
import data from "./data.json";
import Header from "./components/Header";
import Main from "./components/Main";
import "./App.css";

const App = () => {
  const [planetIndex, setPlanetIndex] = useState(2);
  const [imageSource, setImageSource] = useState("planet");
  const [contentType, setContentType] = useState("overview");
  const [theme, setTheme] = useState("earth");
  const [navOpen, setNavOpen] = useState(false);

  const handleToggle = () => {
    setNavOpen((prev) => !prev);
  };

  const handlePlanetChange = (e) => {
    const index = data.findIndex((item) => item.name === e.target.id);
    setPlanetIndex(index);
    setTheme(e.target.value);
    if (navOpen) {
      handleToggle();
    }
  };

  const handleContentTypeChange = (e) => {
    if (e.target.value === "surface") {
      setContentType("geology");
      setImageSource("planet");
    } else if (e.target.value === "structure") {
      setContentType(e.target.value);
      setImageSource("internal");
    } else {
      setContentType(e.target.value);
      setImageSource("planet");
    }
  };

  useEffect(() => {
    if (navOpen === true) {
      document.querySelector("body").style.position = "fixed";
    } else {
      document.querySelector("body").style.position = "static";
    }
  });

  return (
    <div className={`App ${theme}`}>
      <Header
        appData={data}
        handlePlanetChange={handlePlanetChange}
        navOpen={navOpen}
        handleToggle={handleToggle}
      />
      <Main
        appData={data}
        planetIndex={planetIndex}
        imageSource={imageSource}
        contentType={contentType}
        handleContentTypeChange={handleContentTypeChange}
      />
    </div>
  );
};

export default App;
