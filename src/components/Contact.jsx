export default function Contact() {
  return (
    <section name='contact' className='w-full h-dvh bg-[#0a192f] flex justify-center items-center p-4'>
      <div className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8 flex flex-col justify-center w-full h-full items-center'>
          <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300'>Contact me</p>
          <p className='text-gray-300 py-4'>Reach out via WhatsApp or email</p>
        </div>

        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <a
            href='https://wa.me/1234567890'
            target='_blank'
            rel='noopener noreferrer'
            className='w-full sm:w-auto text-center text-white border-2 border-cyan-500 hover:bg-cyan-500 px-6 py-3 rounded-md font-bold'
          >
            WhatsApp
          </a>

          <a
            href='mailto:hello@example.com'
            className='w-full sm:w-auto text-center text-white border-2 border-cyan-500 hover:bg-cyan-500 px-6 py-3 rounded-md font-bold'
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
