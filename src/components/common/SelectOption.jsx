const SelectOption = ({
  type = 'text',
  name,
  id,
  className,
  defaultOption,
  options = [],
}) => {
  return (
    <div>
      <select
        type={type}
        id={id}
        name={name}
        className={`input-field ${className}`}
      >
        <option value={defaultOption}>{defaultOption}</option>
        {options.map((option, index) => (
          <option
            key={option + index}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectOption;
