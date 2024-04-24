'use client';
import { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { SlCalender } from 'react-icons/sl';
import Input from './Input';

const CustomDatePicker = ({ name, label, required = true }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState();

  const handleSelect = (selectedDate) => {
    setSelected(selectedDate);
    setIsOpen(false);
  };

  let selectedDate = '-- Select Date --';
  if (selected) {
    selectedDate = format(selected, 'PP');
  }

  return (
    <div className='relative cursor-pointer'>
      <Input
        className='placeholder:text-black cursor-pointer'
        name='serviceBookingDate'
        id='serviceBookingDate'
        label={label}
        value={selectedDate}
        readOnly={true}
        placeholder={'-- Select Date --'}
        required={true}
        handleOnClick={() => setIsOpen(!isOpen)}
        // handleOnBlur={handleSelect}
      />

      <DayPicker
        className={`bg-white m-0 p-3 rounded-lg absolute z-30 top-12 left-[40%] -translate-x-[40%] ${
          isOpen ? 'scale-100' : 'scale-0'
        } origin-top duration-300`}
        mode='single'
        selected={selected}
        onSelect={handleSelect}
      />

      <SlCalender
        onClick={() => setIsOpen(!isOpen)}
        className='absolute top-[75%] right-4 -translate-y-[75%] text-xl cursor-auto'
      />
    </div>
  );
};

export default CustomDatePicker;
