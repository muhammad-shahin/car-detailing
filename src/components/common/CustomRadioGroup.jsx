import Image from 'next/image';

const CustomRadioGroup = ({
  className,
  required = false,
  label,
  groupItems,
}) => {
  return (
    <div>
      {label && (
        <label className='input-label'>
          {label} {required && <span className='text-primary'>*</span>}
        </label>
      )}
      <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2'>
        {groupItems.map((type) => (
          <div
            key={type.id}
            class='custom-radio-button'
          >
            <input
              type={'radio'}
              name={type.name}
              className={`${className}`}
              value={type.value}
              id={type.id}
              required={required}
            />
            <label
              for={type.id}
              className='block w-fit px-1 py-1 bg-white relative text-neutral6 rounded-lg outline-none'
            >
              <Image
                src={type.icon}
                alt={type.value}
                className='h-[40px] object-cover'
              />
              <p className='text-center text-base text-neutral7'>
                {type.value}
              </p>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomRadioGroup;
