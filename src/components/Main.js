import RadioButton from "./RadioButton";

const Main = (props) => {
  return (
    <main>
      <form onChange={props.handleContentTypeChange}>
        <RadioButton
          inputValue="Overview"
          groupName="contentType"
          defaultChecked
        />
        <RadioButton inputValue="Structure" groupName="contentType" />
        <RadioButton inputValue="Surface" groupName="contentType" />
      </form>
      <img
        src={props.appData[props.planetIndex].images[props.imageSource]}
        alt={`${props.imageSource} ${props.appData[props.planetIndex].name}`}
      />
      <h2>{props.appData[props.planetIndex].name}</h2>
      <p>{props.appData[props.planetIndex][props.contentType].content}</p>
      <span>
        Source:{" "}
        <a
          href={props.appData[props.planetIndex][props.contentType].source}
          target="_blank"
          rel="noreferrer"
        >
          Wikipedia
        </a>{" "}
        <img src="./assets/icon-source.svg" alt="" />
      </span>
      <div className="stats">
        <div>
          <span className="stats-description">Rotation Time</span>
          <span className="stats-value">
            {props.appData[props.planetIndex].rotation}
          </span>
        </div>
        <div>
          <span className="stats-description">Revolution Time</span>
          <span className="stats-value">
            {props.appData[props.planetIndex].revolution}
          </span>
        </div>
        <div>
          <span className="stats-description">Radius</span>
          <span className="stats-value">
            {props.appData[props.planetIndex].radius}
          </span>
        </div>
        <div>
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
