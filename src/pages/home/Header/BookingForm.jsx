import Button from '@/components/common/Button';
import CustomRadioGroup from '@/components/common/CustomRadioGroup';
import Input from '@/components/common/Input';
import SelectOption from '@/components/common/SelectOption';
import CustomDatePicker from '@/components/common/CustomDatePicker';
import { carType } from '@/db/index';

const BookingForm = () => {
  return (
    <form className='bg-secondary rounded-xl xl:p-8 p-6 flex flex-col gap-5'>
      <h3 className='heading-3 text-primary text-center pb-2'>
        Get Estimate Now!
      </h3>
      <CustomRadioGroup
        required={true}
        label='Car Type'
        groupItems={carType}
        initialChecked='Sedan'
      />
      <SelectOption
        name='service'
        label='Select Service'
        required={true}
        defaultOption={'-- Select Service --'}
        options={[
          'Interior Detailing',
          'Exterior Detailing',
          'Complete Detailing',
          'Window Tinting',
          'Ceramic Coating',
          'Other',
        ]}
      ></SelectOption>
      <CustomDatePicker label='Select Date' />
      <Input
        name='full_name'
        type='text'
        placeholder='Name'
        label='Full Name'
        required={true}
      />
      <Input
        name='phone'
        type='phone'
        placeholder='Phone'
        label='Phone Number'
        required={true}
      />
      <Button
        text={'Book Now'}
        type='submit'
        className={'primary-btn w-full'}
      />
    </form>
  );
};

export default BookingForm;
