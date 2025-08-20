export default function About() {
  return (
    <section id='about' name='about' className='w-full h-full bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full min-h-dvh'>
        <div className=' py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6'>
          <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4'>
            <div className='sm:text-right pb-8 pl-4'>
              <p className='text-4xl font-bold inline border-b-4 border-cyan-500'>
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I&apos;m Charles Omeke, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>
                {' '}
                I&apos;ve worked on projects in technology, education, real estate, and business growth—combining technical execution with strategic insight. My focus is not just on writing clean, scalable code, but also on creating intuitive user experiences, applying data insights, and deploying AI-powered solutions that drive impact.
                With a background in Digital Marketing and Data Analytics, I help businesses grow online and make smarter product decisions. What sets me apart is bridging creativity with technology—delivering products that work and inspire.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
