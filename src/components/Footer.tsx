
import { Mail, MapPin, Phone, Linkedin, Twitter, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-thinkBlue-700 text-white">
      <div className="container mx-auto py-16 px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">InnovateAI</h2>
            <p className="text-gray-300">
              Accelerating enterprise transformation through AI and data innovation.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="bg-thinkBlue-600 hover:bg-thinkBlue-500 p-2 rounded-full transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-thinkBlue-600 hover:bg-thinkBlue-500 p-2 rounded-full transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-thinkBlue-600 hover:bg-thinkBlue-500 p-2 rounded-full transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Solutions</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Data Architecture</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">AI Integration</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Machine Learning</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Predictive Analytics</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Innovation Centers</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Industries</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Manufacturing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Healthcare</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Oil & Gas</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Retail</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Financial Services</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-gray-300">Subscribe to our newsletter for the latest in AI innovation.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-thinkBlue-600 px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-thinkAccent-light w-full"
              />
              <Button className="rounded-l-none bg-thinkAccent hover:bg-thinkAccent-dark">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <hr className="border-thinkBlue-600 my-12" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2025 InnovateAI. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
