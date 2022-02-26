import RadioButton from "./RadioButton";

const Header = (props) => {
  const displayPlanetNames = (item) => {
    let checked = false;
    if (item.name === "Earth") {
      checked = true;
    }
    return (
      <RadioButton
        key={item.id}
        inputValue={item.name}
        groupName="planets"
        defaultChecked={checked}
      />
    );
  };
  return (
    <header>
      <h1>The Planets</h1>
      <nav>
        <form onChange={props.handlePlanetChange}>
          {props.appData.map(displayPlanetNames)}
        </form>
      </nav>
    </header>
  );
};

export default Header;
