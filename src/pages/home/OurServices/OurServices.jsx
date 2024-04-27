import ServiceCard from '@/components/common/Cards/ServiceCard';
import SectionTitleBlock from '@/components/common/SectionTitleBlock';
import {
  interiorCleaning,
  exteriorCleaning,
  completeDetailing,
  carCoating,
  coating,
} from '@/assets/icons/index';
import { services } from '@/db/index';
const OurServices = () => {
  return (
    <section className='section-gap-dark'>
      <SectionTitleBlock
        title={'Our Car Detailing Services'}
        description={
          'Explore our range of premium auto detailing services designed to make your vehicle shine.'
        }
        titleClassName='text-white'
        descClassName='text-neutral3'
      />
      <div className='container-box'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 xl:gap-10'>
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              subTitle={service.subTitle}
              description={service.description}
              image={service.image}
              price={service.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
