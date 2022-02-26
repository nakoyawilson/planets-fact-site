import { useState } from "react";
import data from "./data.json";
import Header from "./components/Header";
import Main from "./components/Main";
import "./App.css";

const App = () => {
  const [planetIndex, setPlanetIndex] = useState(2);
  const [imageSource, setImageSource] = useState("planet");
  const [contentType, setContentType] = useState("overview");

  const handlePlanetChange = (e) => {
    const index = data.findIndex((item) => item.name === e.target.id);
    setPlanetIndex(index);
  };

  const handleContentTypeChange = (e) => {
    if (e.target.value === "surface") {
      setContentType("geology");
      setImageSource("geology");
    } else if (e.target.value === "structure") {
      setContentType(e.target.value);
      setImageSource("internal");
    } else {
      setContentType(e.target.value);
      setImageSource("planet");
    }
  };
  return (
    <div className="App">
      <Header appData={data} handlePlanetChange={handlePlanetChange} />
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
