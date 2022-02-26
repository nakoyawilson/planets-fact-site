const RadioButton = (props) => {
  return (
    <div>
      <input
        type="radio"
        id={props.inputValue}
        name={props.groupName}
        value={props.inputValue.toLowerCase()}
        defaultChecked={props.defaultChecked}
        className="visually-hidden"
      />
      <label htmlFor={props.inputValue} className={props.labelClasses}>
        {props.labelValue}
      </label>
    </div>
  );
};

export default RadioButton;
