import "./DropdownList.scss";

function DropdownList({ options, value, onChange }) {
  return (
    <div className="dropdown-list">
      <select
        className="dropdown-list__content"
        value={value}
        onChange={onChange}
      >
        {options.map((option) => {
          return (
            <option
              key={option.value}
              value={option.value}
              className="dropdown-list__item"
            >
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default DropdownList;
