import Button from '../../../components/common/Button';
import BookingForm from './BookingForm';

const Header = () => {
  return (
    <header className='home-header py-10 lg:py-15'>
      <div className='container-box relative z-10 h-full'>
        <div className='h-full flex flex-col lg:flex-row lg:justify-between items-center gap-10 lg:gap-0'>
          {/* left side */}
          <div>
            <h1 className='heading-1 pb-4 text-white lg:leading-tight max-w-[750px]'>
              Best Car Detailing in Arlington, TX
            </h1>
            <p className='paragraph-20 pb-4 max-w-[600px]'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
              illum voluptate porro excepturi in. Beatae nisi nulla fuga fugiat
              eos rem nostrum voluptas nobis sed veritatis, quaerat ut velit
              voluptatum.
            </p>
            <div className='btn-group'>
              <Button
                className='primary-btn'
                href='/'
                text={'Book Now'}
              ></Button>
              <Button
                className='secondary-btn'
                href={'/'}
                text={'All Services'}
              >
                View Services
              </Button>
            </div>
          </div>

          {/* right side */}
          <div className='lg:w-1/3'>
            <BookingForm />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
