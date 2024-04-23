import RadioGroup from '@/components/common/RadioGroup';
import SectionTitleBlock from '@/components/common/SectionTitleBlock';

const AboutCompany = () => {
  return (
    <section className='container-box section-gap'>
      <SectionTitleBlock
        title={'Why choose Arlington Car Detailing from others?'}
        description={
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci accusantium obcaecati sed ullam accusamus quasi aut eveniet nam, sequi ex illo tempora, iusto magnam. Esse, dolore.'
        }
      />
      <form action=''>
        <RadioGroup
          value='Hello'
          id='1'
        />
        {/* <RadioGroup
          value='Hello Ji'
          id='2'
        /> */}
      </form>
    </section>
  );
};

export default AboutCompany;
