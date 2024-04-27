import {
  boat,
  limousineCar,
  luxuryCar,
  pickupCar,
  sedanCar,
  sportCar,
  suvCar,
  truckCar,
  vanCar,
} from '@/assets/icons/index';
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
export default carType;
