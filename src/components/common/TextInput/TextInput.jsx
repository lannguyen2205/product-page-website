import "./TextInput.scss"

function TextInput({ placeholder }) {
  return (
    <div className="text-input">
      <input
        type="text"
        placeholder={placeholder}
        className="text-input__content"
      ></input>
    </div>
  );
}

export default TextInput;
