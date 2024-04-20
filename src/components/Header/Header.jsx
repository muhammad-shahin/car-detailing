import Button from '../common/Button';
import Input from '../common/Input';
import SelectOption from '../common/SelectOption';
import Textarea from '../common/textarea';

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
            <p className='paragraph-20 max-w-[600px]'>
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
            <form className='bg-secondary rounded-xl xl:p-8 p-6 flex flex-col gap-5'>
              <h3 className='heading-3 text-primary text-center pb-2'>
                Book Now to get Discount!
              </h3>
              <Input
                name='full_name'
                type='text'
                placeholder='Full Name'
              />
              <Input
                name='email'
                type='email'
                placeholder='Email'
              />
              <Input
                name='phone'
                type='phone'
                placeholder='Phone'
              />
              <SelectOption
                name='service'
                defaultOption={'Select Service'}
                options={[
                  'Interior Detailing',
                  'Exterior Detailing',
                  'Complete Detailing',
                  'Window Tinting',
                  'Ceramic Coating',
                ]}
              ></SelectOption>
              <Textarea
                name='message'
                placeholder='Tell us more about your detailing...'
                cols='30'
                rows='5'
              ></Textarea>
              <Button
                text={'Book Now'}
                type='submit'
                className={'primary-btn w-full'}
              />
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
