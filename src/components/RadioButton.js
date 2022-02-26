const RadioButton = (props) => {
  return (
    <div>
      <input
        type="radio"
        id={props.inputValue}
        name={props.groupName}
        value={props.inputValue.toLowerCase()}
        defaultChecked={props.defaultChecked}
      />
      <label htmlFor={props.inputValue}>{props.inputValue}</label>
    </div>
  );
};

export default RadioButton;
