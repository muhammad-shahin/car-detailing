/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Button from '../Button';

const ServiceCard = ({
  image,
  price,
  title,
  subTitle,
  description,
  className,
  imgClassName,
}) => {
  return (
    <div className={`service-card ${className}`}>
      <div>
        {/* card image */}
        <div className='pb-5 md:pb-6'>
          <img
            src={image}
            alt={title}
            className={`rounded-md object-cover w-full h-[300px] ${imgClassName}`}
          />
        </div>
        {/* card body */}
        <div className='service-card-body pb-5 md:pb-6'>
          <p className='uppercase font-medium text-lg text-neutral4 tracking-widest pb-3'>
            Starting At ${price}
          </p>
          <h3 className='service-card-title'>{title}</h3>
          <span className='service-card-subtitle'>{subTitle}</span>
          <p className='text-base text-white'>{description.slice(0, 150)}...</p>
        </div>
      </div>

      <div className='btn-group'>
        <Button
          text='Learn More'
          className='secondary-btn uppercase w-full md:py-2 rounded'
        />
        <Button
          text='Schedule Online'
          className='outline-btn uppercase w-full md:py-2 rounded'
        />
      </div>
    </div>
  );
};

export default ServiceCard;
