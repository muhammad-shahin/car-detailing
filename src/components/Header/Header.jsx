import Button from '../common/Button';
import Input from '../common/Input';
import SelectOption from '../common/SelectOption';
import Textarea from '../common/textarea';

const Header = () => {
  return (
    <header className='home-header'>
      <div className='container mx-auto relative z-10 h-full'>
        <div className='h-full flex lg:justify-between items-center'>
          {/* left side */}
          <div>
            <h1 className='heading-96 text-white lg:leading-tight max-w-[750px]'>
              Best Car Detailing in Arlington, TX
            </h1>
            <p className='text-neutral3 text-xl pt-4 max-w-[600px]'>
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
                href={'All Services'}
              >
                View Services
              </Button>
            </div>
          </div>

          {/* right side */}
          <div className='w-1/3'>
            <form className='bg-secondary rounded-xl xl:p-8 p-6 flex flex-col gap-5'>
              <Input
                className=''
                name='full_name'
                type='text'
                placeholder='Full Name'
              />
              <Input
                className='input-field'
                name='email'
                type='email'
                placeholder='Email'
              />
              <SelectOption
                name='service'
                className='input-field'
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
                className='input-field'
                name='message'
                placeholder='Tell us more about your detailing...'
                cols='30'
                rows='5'
              ></Textarea>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
