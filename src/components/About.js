import aboutImg from '../images/about.jpeg';
import Title from './Title';

const About = () => {
  return (
    <section className='section' id='about'>
      <Title title='about' subTitle='us'/>

      <div className='section-center about-center'>
        <div className='about-img'>
          <img src={aboutImg} className='about-photo' alt='awesome beach' />
        </div>
        <article className='about-info'>
          <h3>explore the difference</h3>
          <p>
            Uncover unique adventures curated to redefine your travel experience. From hidden gems to global wonders, immerse yourself in diverse cultures and landscapes.
          </p>
          <p>
            Join us on a transformative journey where each trail tells a story and every adventure makes a lasting impression.
          </p>
          <a href='#tours' className='btn hero-btn'>
            read more
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;