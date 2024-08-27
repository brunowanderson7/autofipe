import Image from 'next/image';
import { FaIdCard } from 'react-icons/fa';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa6';

export const Navbar = () => {
  return (
    <header className="w-full px-5 lg:px-24 bg-blue-500 flex justify-between py-2">
      <Image src="/autofipe_logo.png" alt="Logo" width={150} height={50} />
      <div className="flex items-center justify-center">
        <a
          href="https://brunowand.vercel.app/"
          className="text-4xl text-zinc-800 p-3 bg-white rounded-full hover:scale-110 hover:z-40 transform transition-all duration-300 hover:shadow-2xl shadow-black ease-in-out border-2 border-zinc-800"
        >
          <FaIdCard />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=5589994417960&text=Ol%C3%A1%21+&type=phone_number&app_absent=0"
          className="text-4xl text-zinc-800 -ml-4 p-3 bg-white rounded-full hover:scale-110 transform transition-all duration-300 hover:z-40 hover:shadow-2xl shadow-black ease-in-out border-2 border-zinc-800"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://www.linkedin.com/in/bruno-wanderson/"
          className="text-4xl text-zinc-800 -ml-4 p-3 bg-white rounded-full hover:scale-110 transform transition-all duration-300 hover:shadow-2xl shadow-black ease-in-out border-2 border-zinc-800"
        >
          <FaLinkedin />
        </a>
      </div>
    </header>
  );
};
