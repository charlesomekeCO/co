export default function Skills() {
    return (
        <section name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className=' w-full flex justify-center items-center flex-col mb-7'>
                    <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center '>Skills</p>
                    <p className='py-4 text-2xl'>I enjoy diving into and learning new things. Here&apos;s a list of technologies I&apos;ve worked with</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <p className='my-4'>HTML & CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <p className='my-4'>TAILWIND</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <p className='my-4'>JAVASCRIPT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <p className='my-4'>REACT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <p className='my-4'>GIT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <p className='my-4'>PHP</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <p className='my-4'>NODE JS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <p className='my-4'>SQL & NOSQL</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <p className='my-4'>UI/UX DESIGN</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <p className='my-4'>WORDPRESS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <p className='my-4'>DIGITAL MARKETING</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <p className='my-4'>CONTENT CREATION</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
