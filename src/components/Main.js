import RadioButton from "./RadioButton";

const Main = (props) => {
  return (
    <main class="main">
      <form
        onChange={props.handleContentTypeChange}
        className="content-type-wrapper"
      >
        <RadioButton
          inputValue="Overview"
          groupName="contentType"
          defaultChecked
          // labelClasses={`content-type ${checked ? "active-content" : ""}`}
          labelClasses={`content-type active-content`}
        />
        <RadioButton
          inputValue="Structure"
          groupName="contentType"
          labelClasses="content-type"
        />
        <RadioButton
          inputValue="Surface"
          groupName="contentType"
          labelClasses="content-type"
        />
      </form>
      <div className="image-wrapper">
        <img
          src={props.appData[props.planetIndex].images[props.imageSource]}
          alt={`${props.imageSource} ${props.appData[props.planetIndex].name}`}
          class="main-image"
        />
      </div>
      <section className="text-content">
        <h1 className="page-title">{props.appData[props.planetIndex].name}</h1>
        <p class="content">
          {props.appData[props.planetIndex][props.contentType].content}
        </p>
        <span className="source">
          Source :{" "}
          <a
            href={props.appData[props.planetIndex][props.contentType].source}
            target="_blank"
            rel="noreferrer"
          >
            Wikipedia
          </a>{" "}
          <img src="./assets/icon-source.svg" alt="" />
        </span>
      </section>
      <div className="stats">
        <div className="stats-wrapper">
          <span className="stats-description">Rotation Time</span>
          <span className="stats-value">
            {props.appData[props.planetIndex].rotation}
          </span>
        </div>
        <div className="stats-wrapper">
          <span className="stats-description">Revolution Time</span>
          <span className="stats-value">
            {props.appData[props.planetIndex].revolution}
          </span>
        </div>
        <div className="stats-wrapper">
          <span className="stats-description">Radius</span>
          <span className="stats-value">
            {props.appData[props.planetIndex].radius}
          </span>
        </div>
        <div className="stats-wrapper">
          <span className="stats-description">Average Temp</span>
          <span className="stats-value">
            {props.appData[props.planetIndex].temperature}
          </span>
        </div>
      </div>
    </main>
  );
};

export default Main;
