const Input = ({
  type = 'text',
  name,
  id,
  className,
  placeholder,
  required = false,
  label,
}) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={id ? id : name}
          className='input-label'
        >
          {label} {required && <span className='text-primary'>*</span>}
        </label>
      )}

      <input
        type={type}
        id={id ? id : name}
        name={name}
        className={`input-field ${className}`}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default Input;
