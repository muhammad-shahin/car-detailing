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

const OurServices = () => {
  const services = [
    {
      id: 'service-001',
      title: 'Exterior Detailing',
      subTitle: 'Exterior Detailing',
      price: '250',
      image: 'https://i.postimg.cc/85hSN2qJ/car-exterior-cleaning-1.jpg',
      description:
        "Give your car's exterior the attention it deserves. Our detailing experts will wash, wax, and polish every inch, leaving your vehicle with a brilliant shine and protected finish.",
    },
    {
      id: 'service-002',
      title: 'Interior Detailing',
      subTitle: 'Interior Detailing',
      price: '250',
      image: 'https://i.postimg.cc/cCsVZrR2/interior-clean.jpg',
      description:
        "Restore the beauty of your vehicle's interior with our comprehensive detailing service. From vacuuming to upholstery cleaning, we'll leave your car feeling fresh and pristine.",
    },
    {
      id: 'service-003',
      title: 'Complete Detailing',
      subTitle: 'Complete Detailing',
      price: '250',
      image: 'https://i.postimg.cc/k4NkkxbW/detailed-car.jpg',
      description:
        "Experience the ultimate in car care with our complete detailing package. From top to bottom, inside and out, we'll rejuvenate your vehicle to showroom quality.",
    },
    {
      id: 'service-004',
      title: 'Ceramic Coating',
      subTitle: 'Ceramic Coating',
      price: '250',
      image: 'https://i.postimg.cc/mksT9LQy/car-coating-2.webp',
      description:
        "Protect your car's paintwork with our premium ceramic coating service. This durable, long-lasting solution provides unparalleled gloss and defense against the elements.",
    },
    {
      id: 'service-005',
      title: 'Headlight Restoration',
      subTitle: 'Headlight Restoration',
      price: '250',
      image: 'https://i.postimg.cc/QCkvj7vv/headlight-restoration.jpg',
      description:
        "Improve visibility and enhance your car's appearance with our headlight restoration service. Let us remove haze and oxidation to restore clarity and brightness to your headlights.",
    },
    {
      id: 'service-006',
      title: 'Window Tinting',
      subTitle: 'Window Tinting',
      price: '250',
      image: 'https://i.postimg.cc/Dfq9QVm5/window-tint.webp',
      description:
        "Enhance privacy, reduce glare, and protect your vehicle's interior with our professional window tinting service. Our high-quality films provide superior UV protection while adding a sleek, stylish look to your car's windows.",
    },
  ];
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
