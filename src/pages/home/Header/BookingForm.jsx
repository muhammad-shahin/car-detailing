import Button from '@/components/common/Button';
import CustomRadioGroup from '@/components/common/CustomRadioGroup';
import Input from '@/components/common/Input';
import SelectOption from '@/components/common/SelectOption';
import Textarea from '@/components/common/Textarea';
import {
  aircraft,
  cabrioletCar,
  boat,
  limousineCar,
  luxuryCar,
  pickupCar,
  rvCar,
  sedanCar,
  sportCar,
  suvCar,
  truckCar,
  vanCar,
} from '@/assets/icons/index';
import CustomDatePicker from '@/components/common/CustomDatePicker';

const BookingForm = () => {
  const carType = [
    {
      name: 'carType',
      id: 'sedan',
      value: 'Sedan',
      checked: true,
      icon: sedanCar,
    },
    {
      name: 'carType',
      id: 'sport',
      value: 'Sport',
      icon: sportCar,
    },
    {
      name: 'carType',
      id: 'limousine',
      value: 'Limousine',
      icon: limousineCar,
    },
    {
      name: 'carType',
      id: 'suv',
      value: 'SUV',
      icon: suvCar,
    },
    {
      name: 'carType',
      id: 'rv',
      value: 'RV',
      icon: vanCar,
    },
    {
      name: 'carType',
      id: 'pickup',
      value: 'Pickup',
      icon: pickupCar,
    },
    {
      name: 'carType',
      id: 'truck',
      value: 'Truck',
      icon: truckCar,
    },
    {
      name: 'carType',
      id: 'other',
      value: 'Other',
      icon: boat,
    },
  ];
  return (
    <form className='bg-secondary rounded-xl xl:p-8 p-6 flex flex-col gap-5'>
      <h3 className='heading-3 text-primary text-center pb-2'>
        Book Now to get Discount!
      </h3>
      <CustomRadioGroup
        required={true}
        label='Car Type'
        groupItems={carType}
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

      {/* <Textarea
        name='message'
        placeholder='Tell us more about your detailing...'
        label='Leave a Message'
        defaultOption={'Select Service'}
        cols='30'
        rows='5'
      ></Textarea> */}
      <Button
        text={'Book Now'}
        type='submit'
        className={'primary-btn w-full'}
      />
    </form>
  );
};

export default BookingForm;
