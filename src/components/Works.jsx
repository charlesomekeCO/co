import project1 from '../assets/project1.webp';
import project2 from '../assets/project2.webp';
import project3 from '../assets/project3.webp';
import project4 from '../assets/project4.webp';
import project5 from '../assets/project5.webp';
import project6 from '../assets/project6.webp';

const projects = [
  {
    image: project1,
    title: 'Smart POS System',
    description: 'POS and inventory management platform for retail shops and supermarkets.',
    demo: 'http://www.bloommonieclient90.store',
    code: '/',
  },
  {
    image: project2,
    title: 'BrandHive Agency',
    description: 'Digital agency website delivering web, branding, and growth solutions.',
    demo: 'https://brandhive.ng',
    code: '/',
  },
  {
    image: project3,
    title: 'LawPay Wallet',
    description: 'Secure wallet for lawyers to receive client payments online.',
    demo: '/',
    code: '/',
  },
  {
    image: project4,
    title: 'Insight Dashboard',
    description: 'Interactive analytics dashboard built with Node.js and Chart.js.',
    demo: 'https://myteacher.institute',
    code: '/',
  },
  {
    image: project5,
    title: 'Domus Real Estate',
    description: 'Property listing platform built with React.js and Firebase backend.',
    demo: 'https://domus.ng',
    code: '/',
  },
  {
    image: project6,
    title: 'Independent Monitor',
    description: 'News platform with chatbot integration powered by NLP and Flask.',
    demo: 'https://independentmonitor.com.ng',
    code: '/',
  },
];

export default function Works() {
  return (
    <section name='work' className='w-full h-full text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full min-h-dvh'>
        <div className='pb-8 w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
            Work
          </p>
          <p className='py-6 text-2xl'>Check out some of my most recent work</p>
        </div>

        {/* Projects Grid */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {projects.map((project, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${project.image})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
              {/* Hover Content */}
              <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                <span className='text-lg font-bold text-white tracking-wider'>
                  {project.title}
                </span>
                <p className='text-center'>{project.description}</p>
                <div className='pt-8 text-center'>
                  <a href={project.demo} target='_blank' rel='noopener noreferrer'>
                    <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Demo
                    </button>
                  </a>
                  <a href={project.code} target='_blank' rel='noopener noreferrer'>
                    <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
