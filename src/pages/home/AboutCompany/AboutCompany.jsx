import SectionTitleBlock from '@/components/common/SectionTitleBlock';
import Image from 'next/image';
import detailedCar1 from '@/assets/images/car-coating.webp';
import detailedCar2 from '@/assets/images/car-exterior-cleaning-5.jpg';
import { FaCircleCheck } from 'react-icons/fa6';
import Button from '@/components/common/Button';

const AboutCompany = () => {
  const servicesContent = [
    'Premium interior and exterior detailing services',
    'Advanced ceramic coating for long-lasting protection',
    'Convenient on-site detailing at your home or office',
    'Specialized headlight restoration and polishing',
  ];
  return (
    <section className='container-box section-gap'>
      <SectionTitleBlock
        title={'Experience Superior Car Detailing in Arlington, Texas'}
        description={
          'Experience superior car detailing services in Arlington, Texas. Elevate your vehicle with our unmatched expertise.'
        }
      />

      <div>
        {/* content block 1 */}
        <div className='content-block pb-10 xl:pb-[60px] 2xl:pb-20'>
          {/* left side content */}
          <div className='w-full lg:w-[45%]'>
            <Image
              src={detailedCar1}
              alt='Car Detailing Arlington'
              className='rounded-lg shadow-xl shadow-neutral5 w-full'
            />
          </div>
          {/* right side content */}
          <div className='w-full lg:w-[55%]'>
            <div>
              <h4 className='heading-3 leading-tight pb-4 text-secondary'>
                We Provide the Best Auto Detailing Services in Arlington, TX
              </h4>
              <p className='paragraph pb-3'>
                At Arlington Car Detailing, we&apos;re passionate about making
                your vehicle look its absolute best. Our skilled team utilizes
                the latest techniques and premium products to deliver
                exceptional results.
              </p>
              <p className='paragraph  pb-6'>
                Whether it&apos;s a thorough interior cleaning, paint
                correction, or ceramic coating, we&apos;ve got you covered.
                Trust us to restore your vehicle&apos;s shine and protect it
                from the elements.
              </p>

              <Button
                text='Book Now'
                className='primary-btn'
              />
            </div>
          </div>
        </div>

        {/* content block 2 */}
        <div className='content-block flex-row-reverse'>
          {/* left side content */}
          <div className='w-full lg:w-[45%] h-full'>
            <Image
              src={detailedCar2}
              alt='Car Detailing Arlington'
              className='rounded-lg shadow-xl shadow-neutral5 object-cover w-full xl:h-[400px]'
            />
          </div>
          {/* right side content */}
          <div className='w-full lg:w-[55%]'>
            <div>
              <h4 className='heading-3 leading-tight pb-4 text-secondary'>
                Professional Mobile Auto Detailing in Arlington, TX and Nearby
                Areas
              </h4>
              <p className='paragraph pb-4'>
                Our mobile auto detailing services cover Arlington, TX, and
                surrounding areas. Enjoy the convenience of having your vehicle
                detailed at your location.
              </p>
              <ul className='flex flex-col gap-3'>
                {servicesContent.map((service, index) => (
                  <li
                    key={'service' + index}
                    className='flex items-center gap-2 paragraph'
                  >
                    <FaCircleCheck className='text-xl text-primary' />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
