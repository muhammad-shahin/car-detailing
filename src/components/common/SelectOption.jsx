'use client';
import Image from 'next/image';
import arrowIcon from '@/assets/icons/arrow-left.svg';
import { useState } from 'react';

const SelectOption = ({
  type = 'text',
  name,
  id,
  className,
  defaultOption,
  options = [],
  required = false,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <div
      className='relative'
      onClick={() => setIsCollapsed(!isCollapsed)}
    >
      <select
        type={type}
        id={id}
        name={name}
        required={required}
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
      <Image
        src={arrowIcon}
        alt='Arrow Icon'
        className={`absolute top-1/2 right-[20px] -translate-y-1/2 ${
          isCollapsed ? '-rotate-90' : 'rotate-90'
        } duration-200`}
      />
    </div>
  );
};

export default SelectOption;
