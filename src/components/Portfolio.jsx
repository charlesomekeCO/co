import project1 from '../assets/project1.webp';
import project2 from '../assets/project2.webp';
import project3 from '../assets/project3.webp';
import project4 from '../assets/project4.webp';
import project5 from '../assets/project5.webp';
import project6 from '../assets/project6.webp';

const portfolios = [
  {
    image: project1,
    title: 'Digital Marketing Portfolio',
    description: 'Campaigns, analytics dashboards, and growth case studies showcased.',
    url: 'https://example.com/digital-marketing-portfolio',
  },
  {
    image: project2,
    title: 'AI & Automation Portfolio',
    description: 'Bots, automations, and AI-powered tools built for efficiency.',
    url: 'https://example.com/ai-automation-portfolio',
  },
  {
    image: project3,
    title: 'Data Analyst Portfolio',
    description: 'Dashboards, reports, and data storytelling examples.',
    url: 'https://example.com/data-analyst-portfolio',
  },
  {
    image: project4,
    title: 'UI/UX Product Design Portfolio',
    description: 'Design systems, prototypes, and research-driven UX work.',
    url: 'https://example.com/uiux-product-design-portfolio',
  },
  {
    image: project5,
    title: 'Web Development Portfolio',
    description: 'Web apps, responsive builds, and frontend engineering examples.',
    url: 'https://example.com/web-development-portfolio',
  },
  {
    image: project6,
    title: 'Graphics Design Portfolio',
    description: 'Branding, illustrations, and visual design work.',
    url: 'https://example.com/graphics-design-portfolio',
  },
];

export default function Portfolio() {
  return (
    <section name='portfolios' className='w-full h-full text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full min-h-dvh'>
        {/* Portfolios Section */}
        <div className='pt-16 pb-8 w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
            My Portfolios
          </p>
          <p className='py-6 text-2xl'>Explore curated work collections across different disciplines</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6 pb-10'>
          {portfolios.map((portfolio, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${portfolio.image})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
              <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                <span className='text-lg font-bold text-white tracking-wider'>
                  {portfolio.title}
                </span>
                <p className='text-center mb-6'>{portfolio.description}</p>
                <a href={portfolio.url} target='_blank' rel='noopener noreferrer'>
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
