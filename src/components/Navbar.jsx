import { useState } from 'react';
import { Link } from 'react-scroll';
import resume from '../assets/resume.pdf';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const links = ['home', 'about', 'skills', 'work', 'contact'];

  const socials = [
    { href: 'https://www.linkedin.com/in/charlesomeke', label: 'LinkedIn', bg: 'bg-blue-600', icon: <FaLinkedin size={30} /> },
    { href: 'https://github.com/charlesomekeCO', label: 'Github', bg: 'bg-[#333]', icon: <FaGithub size={30} /> },
    { href: 'mailto:charlesomeke45@gmail.com', label: 'Email', bg: 'bg-[#6fc2b0]', icon: <HiOutlineMail size={30} /> },
    { href: resume, label: 'Resume', bg: 'bg-[#565f69]', icon: <BsFillPersonLinesFill size={30} />, download: true },
  ];

  return (
    <header className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      {/* Logo */}
      <h1 className="font-thin text-2xl italic font-serif">CO</h1>

      {/* Desktop menu */}
      <ul className="hidden md:flex gap-x-8">
        {links.map(link => (
          <li key={link}>
            <Link to={link} smooth duration={500}>{link.charAt(0).toUpperCase() + link.slice(1)}</Link>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <div onClick={() => setNav(!nav)} className="md:hidden z-10 cursor-pointer">
        {nav ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile menu */}
      {nav && (
        <ul className="absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center">
          {links.map(link => (
            <li key={link} className="py-6 text-4xl">
              <Link onClick={() => setNav(false)} to={link} smooth duration={500}>
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          {socials.map(({ bg, href, icon, label, download }) => (
            <li
              key={label}
              className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ${bg}`}
            >
              <a
                href={href}
                {...(download && { download: true })}
                className="flex justify-between items-center w-full text-gray-300"
              >
                {label} {icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
