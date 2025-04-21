
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/lovable-uploads/00bbf89e-53f7-49b9-a556-82d345bfaa46.png" alt="DataCruise Logo" className="h-8" />
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
          <Link to="/industry-examples" className="text-gray-700 hover:text-gray-900">Success Stories</Link>
          <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
          <Button asChild>
            <a href="#contact">Get Started</a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
