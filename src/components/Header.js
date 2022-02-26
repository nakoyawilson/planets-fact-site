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
      <span class="logo">The Planets</span>
      <nav>
        <form onChange={props.handlePlanetChange}>
          {props.appData.map(displayPlanetNames)}
        </form>
      </nav>
    </header>
  );
};

export default Header;
