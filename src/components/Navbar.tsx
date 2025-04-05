
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="py-4 px-6 md:px-10 bg-white/90 backdrop-blur-sm fixed w-full z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/e2fb1145-5f02-492b-99e7-19c1679b0db7.png" 
            alt="DataCruise Logo" 
            className="h-10 mr-2" 
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-thinkBlue-600 hover:text-thinkAccent font-medium">Home</a>
          <a href="#industries" className="text-thinkBlue-600 hover:text-thinkAccent font-medium">Industries</a>
          <a href="#innovation-hub" className="text-thinkBlue-600 hover:text-thinkAccent font-medium">Innovation Hub</a>
          <a href="#approach" className="text-thinkBlue-600 hover:text-thinkAccent font-medium">Our Approach</a>
          <a href="#contact" className="text-thinkBlue-600 hover:text-thinkAccent font-medium">Contact</a>
        </div>

        <div className="hidden md:block">
          <Button className="bg-thinkBlue-500 hover:bg-thinkBlue-600 text-white">
            Start a Partnership
          </Button>
        </div>

        {/* Mobile Navigation Icon */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="text-thinkBlue-600 hover:text-thinkAccent focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md py-4 px-6 z-50 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <a href="#home" className="text-thinkBlue-600 hover:text-thinkAccent font-medium" onClick={toggleMenu}>Home</a>
            <a href="#industries" className="text-thinkBlue-600 hover:text-thinkAccent font-medium" onClick={toggleMenu}>Industries</a>
            <a href="#innovation-hub" className="text-thinkBlue-600 hover:text-thinkAccent font-medium" onClick={toggleMenu}>Innovation Hub</a>
            <a href="#approach" className="text-thinkBlue-600 hover:text-thinkAccent font-medium" onClick={toggleMenu}>Our Approach</a>
            <a href="#contact" className="text-thinkBlue-600 hover:text-thinkAccent font-medium" onClick={toggleMenu}>Contact</a>
            <Button className="bg-thinkBlue-500 hover:bg-thinkBlue-600 text-white w-full">
              Start a Partnership
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
