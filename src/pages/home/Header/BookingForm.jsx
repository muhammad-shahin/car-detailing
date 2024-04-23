import Button from '@/components/common/Button';
import CustomRadioGroup from '@/components/common/CustomRadioGroup';
import Input from '@/components/common/Input';
import SelectOption from '@/components/common/SelectOption';
import Textarea from '@/components/common/Textarea';
import {
  cabrioletCar,
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

const BookingForm = () => {
  const carType = [
    {
      name: 'carType',
      id: 'sedan',
      value: 'Sedan',
      checked: false,
      icon: sedanCar,
    },
    {
      name: 'carType',
      id: 'sport',
      value: 'Sport',
      checked: false,
      icon: sportCar,
    },
    {
      name: 'carType',
      id: 'luxury',
      value: 'Luxury',
      checked: false,
      icon: luxuryCar,
    },
    {
      name: 'carType',
      id: 'cabriolet',
      value: 'Cabriolet',
      checked: false,
      icon: cabrioletCar,
    },
    {
      name: 'carType',
      id: 'limousine',
      value: 'Limousine',
      checked: false,
      icon: limousineCar,
    },
    {
      name: 'carType',
      id: 'suv',
      value: 'SUV',
      checked: false,
      icon: suvCar,
    },
    {
      name: 'carType',
      id: 'van',
      value: 'Van',
      checked: false,
      icon: vanCar,
    },
    {
      name: 'carType',
      id: 'rv',
      value: 'RV',
      checked: false,
      icon: rvCar,
    },
    {
      name: 'carType',
      id: 'pickup',
      value: 'Pickup',
      checked: false,
      icon: pickupCar,
    },
    {
      name: 'carType',
      id: 'other',
      value: 'Other',
      checked: false,
      icon: truckCar,
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

      <Input
        name='full_name'
        type='text'
        placeholder='Full Name'
        label='Full Name'
        required={true}
      />
      <Input
        name='email'
        type='email'
        placeholder='Email'
        label='Email'
      />
      <Input
        name='phone'
        type='phone'
        placeholder='Phone'
        label='Phone Number'
        required={true}
      />
      <SelectOption
        name='service'
        label='Select Service'
        required={true}
        defaultOption={'Select Service'}
        options={[
          'Interior Detailing',
          'Exterior Detailing',
          'Complete Detailing',
          'Window Tinting',
          'Ceramic Coating',
          'Other',
        ]}
      ></SelectOption>
      <Textarea
        name='message'
        placeholder='Tell us more about your detailing...'
        label='Leave a Message'
        defaultOption={'Select Service'}
        cols='30'
        rows='5'
      ></Textarea>
      <Button
        text={'Book Now'}
        type='submit'
        className={'primary-btn w-full'}
      />
    </form>
  );
};

export default BookingForm;
