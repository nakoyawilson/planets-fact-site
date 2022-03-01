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
        labelValue={item.name}
        groupName="planets"
        defaultChecked={checked}
        labelClasses="nav-link"
      />
    );
  };
  return (
    <header className="header">
      <span className="logo">The Planets</span>
      <button className="navigation-button" onClick={props.handleToggle}>
        <img src="assets/icon-hamburger.svg" alt="" />
      </button>
      <nav className={`navigation ${props.navOpen ? "open" : ""}`}>
        <form onChange={props.handlePlanetChange}>
          {props.appData.map(displayPlanetNames)}
        </form>
      </nav>
    </header>
  );
};

export default Header;
