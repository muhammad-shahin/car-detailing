const RadioGroup = ({ value, id }) => {
  return (
    <div>
      <div class='radio-button'>
        <input
          type='radio'
          name='shippingMethod'
          value={value}
          checked='checked'
          id={id}
          required
        />
        <label for={id}>{value}</label>
      </div>
    </div>
  );
};

export default RadioGroup;
