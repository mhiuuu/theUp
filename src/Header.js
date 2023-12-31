import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Header = () => {
  return (
    <nav className="Nav">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap" id="Brand">The Up Project</span>
        </a>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-black bg-transparent rounded text-xl" aria-current="page">Gio day Up</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center md:order-2 mr-4 md:mr-12">
          <a href="https://www.facebook.com/profile.php?id=100064290565646" target="_blank" rel="noopener noreferrer" className="text-xl mr-2">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/theupprojectorg/" target="_blank" rel="noopener noreferrer" className="text-xl">
            <FaInstagram />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
