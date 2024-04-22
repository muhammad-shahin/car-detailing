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
          htmlFor={id}
          className='block text-base capitalize text-neutral3 font-medium pb-3'
        >
          {label} {required && <span className='text-primary'>*</span>}
        </label>
      )}

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
