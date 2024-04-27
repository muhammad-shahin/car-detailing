import ServiceCard from '@/components/common/Cards/ServiceCard';
import SectionTitleBlock from '@/components/common/SectionTitleBlock';
import {
  interiorCleaning,
  exteriorCleaning,
  completeDetailing,
  carCoating,
  coating,
} from '@/assets/icons/index';
import ServiceCard2 from '@/components/common/Cards/ServiceCard2';
import { services } from '@/db/index';
const OurServices = () => {
  return (
    <section className='section-gap-dark'>
      <SectionTitleBlock
        title={'Car Detailing Services we provide'}
        description={
          'Explore our range of premium auto detailing services designed to make your vehicle shine.'
        }
        titleClassName='text-white'
        descClassName='text-neutral3'
      />
      <div className='container-box'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {services.map((service) => (
            <ServiceCard2
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
