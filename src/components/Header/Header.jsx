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
              <button className='primary-btn'>Book Now</button>
              <button className='secondary-btn'>View Services</button>
            </div>
          </div>

          {/* right side */}
          <div className='w-1/3'>
            <form className='bg-secondary rounded-xl xl:p-8 p-6 flex flex-col gap-5'>
              <input
                className='input-field'
                name='full_name'
                type='text'
                placeholder='Full Name'
              />
              <input
                className='input-field'
                name='email'
                type='email'
                placeholder='Email'
              />
              <select
                name='service'
                className='input-field'
              >
                <option value='Interior Detailing'>Interior Detailing</option>
                <option value='Exterior Detailing'>Exterior Detailing</option>
                <option value='Complete Detailing'>Complete Detailing</option>
                <option value='Window Tinting'>Window Tinting</option>
                <option value='Ceramic Coating'>Ceramic Coating</option>
              </select>
              <textarea
                className='input-field'
                name='message'
                placeholder='Tell us more about your detailing...'
                cols='30'
                rows='5'
              ></textarea>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
