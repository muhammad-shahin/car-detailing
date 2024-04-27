import Image from 'next/image';
import detailingIcon from '@/assets/icons/interior-cleaning.svg';
import Button from '../Button';
import { IoMdAdd } from 'react-icons/io';

const ServiceCard = ({ title, description, icon, bgImage }) => {
  return (
    <div className='service-card bg-[url("https://i.postimg.cc/fWfNFhc1/car-exterior-cleaning-3.jpg")] image-overlay'>
      <div className='relative'>
        {/* service icon */}
        <div className='icon-wrapper'>
          <Image
            src={detailingIcon}
            alt='Service Icon'
            className='w-full object-contain'
          />
        </div>
        {/* service card body */}
        <div className='text-center'>
          <h4 className='heading-4 text-white pb-3'>Interior Cleaning</h4>
          <p className='paragraph pb-6 text-neutral3 max-w-'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
            doloremque. Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Fugiat, nemo!
          </p>
          <Button
            text='Book Now'
            className='primary-btn mx-auto group'
            iconRight={
              <IoMdAdd className='text-xl group-hover:rotate-180 duration-300' />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
