/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Button from '../Button';

const ServiceCard2 = ({
  image,
  price,
  title,
  subTitle,
  description,
  className,
  imgClassName,
}) => {
  return (
    <div
      className={`bg-neutral8 p-4 sm:p-5 border-2 border-neutral4 rounded ${className}`}
    >
      <div className='service-card-image pb-5 md:pb-6'>
        <img
          src={image}
          alt={title}
          className={`rounded-lg object-cover w-full h-[300px] ${imgClassName}`}
        />
      </div>
      <div className='service-card-body pb-5 md:pb-6'>
        <p className='uppercase font-medium text-lg text-neutral4 tracking-wide pb-3'>
          Starting At ${price}
        </p>
        <h3 className='service-card-title text-3xl text-white pb-2'>{title}</h3>
        <span className='block text-white text-base font-semibold uppercase tracking-wide pb-4'>
          {subTitle}
        </span>
        <p className='text-base text-white'>{description}</p>
      </div>

      <div className='service-card-footer btn-group'>
        <Button
          text='Learn More'
          className='secondary-btn uppercase'
        />
        <Button
          text='Schedule Online'
          className='outline-btn uppercase'
        />
      </div>
    </div>
  );
};

export default ServiceCard2;
