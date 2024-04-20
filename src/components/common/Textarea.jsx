const Textarea = ({
  type = 'text',
  name,
  id,
  className,
  placeholder,
  cols,
  rows,
  required = false,
}) => {
  return (
    <div>
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
