const Textarea = ({
  type = 'text',
  name,
  id,
  className,
  placeholder,
  cols,
  rows,
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
      <textarea
        type={type}
        id={id}
        name={name}
        className={`input-field ${className}`}
        placeholder={placeholder}
        required={required}
        cols={cols}
        rows={rows}
      ></textarea>
    </div>
  );
};

export default Textarea;
