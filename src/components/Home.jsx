import me from '../assets/me.webp';
import { Link } from 'react-scroll';
import { HiArrowNarrowRight } from 'react-icons/hi';

export default function Home() {
  return (
    <section name='home' className='h-screen w-full bg-[#0a192f]'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='w-full md:w-2/3'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'>
            I&apos;m a Full Stack Web Developer
          </h2>
          <p className='text-gray-500 py-4 max-w-md'>
            Hi, I&apos;m Charles Omeke, a versatile Fullstack Developer with over 10 years of hands-on experience building and scaling digital solutions. My expertise spans across Web & App Development, UI/UX Design, Artificial Intelligence, Digital Marketing, and Data Analytics.
          </p>
          <div>
            <Link
              smooth
              to='about'
              duration={500}
              className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'
            >
              About Me
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight size={25} className='ml-3' />
              </span>
            </Link>
          </div>
        </div>
        <div className='w-full mt-16 md:mt-0'>
          <img src={me} alt='my profile' />
        </div>
      </div>
    </section>
  );
};
