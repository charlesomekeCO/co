import project1 from '../assets/project1.webp';
import project2 from '../assets/project2.webp';
import project3 from '../assets/project3.webp';
import project4 from '../assets/project4.webp';
import project5 from '../assets/project5.webp';
import project6 from '../assets/project6.webp';

const projects = [
  {
    image: project1,
    title: 'BloomMonie Pos',
    description: 'POS and inventory management platform for retail shops and supermarkets.',
    url: 'http://www.bloommonieclient90.store',
  },
  {
    image: project2,
    title: 'BrandHive Concepts',
    description: 'Digital agency website delivering web, branding, and growth solutions.',
    url: 'https://brandhive.ng',
  },
  {
    image: project3,
    title: 'Clients Account',
    description: 'Secure wallet for lawyers to receive client payments online.',
    url: '/',
  },
  {
    image: project4,
    title: 'Myteacher Institute',
    description: 'Interactive School Of Computing & IT Solutions.',
    url: 'https://myteacher.institute',
  },
  {
    image: project5,
    title: 'Domus Real Estate',
    description: 'Property listing platform built with React.js and Firebase backend.',
    url: 'https://domus.ng',
  },
  {
    image: project6,
    title: 'Independent Monitor',
    description: 'News platform with chatbot integration powered by NLP and Flask.',
    url: 'https://independentmonitor.com.ng',
  },
];

export default function Projects() {
  return (
    <section name='projects' className='w-full h-full text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full min-h-dvh'>
        <div className='pb-8 w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
            Projects
          </p>
          <p className='py-6 text-2xl'>Check out some of my most recent projects</p>
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
                <p className='text-center mb-6'>{project.description}</p>
                <a href={project.url} target='_blank' rel='noopener noreferrer'>
                  <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    View more
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
