const Input = ({ type = 'text', name, id, className, placeholder }) => {
  return (
    <div>
      <input
        type={type}
        id={id}
        name={name}
        className={`input-field ${className}`}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
