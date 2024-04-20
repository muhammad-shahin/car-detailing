const Input = ({
  type = 'text',
  name,
  id,
  className,
  placeholder,
  required = false,
}) => {
  return (
    <div>
      <input
        type={type}
        id={id}
        name={name}
        className={`input-field ${className}`}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default Input;
