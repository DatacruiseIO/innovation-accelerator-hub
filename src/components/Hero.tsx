
import { Button } from '@/components/ui/button';
import { ArrowRight, Database, Brain, LineChart } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-6 md:px-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Accelerating <span className="gradient-text">AI Innovation</span> for Enterprise Transformation
            </h1>
            <p className="text-lg text-gray-700 md:pr-12">
              We build long-term partnerships to create Centers of Innovation that enable organizations to 
              leverage industry-leading AI and data solutions at unprecedented speed.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <Button className="bg-thinkBlue-500 hover:bg-thinkBlue-600 text-white px-8 py-6 text-lg">
                Explore Industries <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-thinkBlue-500 text-thinkBlue-500 hover:bg-thinkBlue-50 px-8 py-6 text-lg">
                Our Approach
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -z-10 w-full h-full bg-gradient-to-r from-thinkBlue-100 to-thinkAccent-light rounded-full blur-3xl opacity-20"></div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-xl p-6 card-hover">
                <Database className="h-12 w-12 text-thinkAccent mb-4" />
                <h3 className="text-xl font-semibold mb-2">Data Solutions</h3>
                <p className="text-gray-600">Enterprise-grade data architecture for AI-readiness</p>
              </div>
              <div className="bg-white rounded-xl shadow-xl p-6 translate-y-6 card-hover">
                <Brain className="h-12 w-12 text-thinkBlue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">AI Integration</h3>
                <p className="text-gray-600">Custom AI solutions tailored to your industry</p>
              </div>
              <div className="bg-white rounded-xl shadow-xl p-6 translate-y-6 card-hover">
                <LineChart className="h-12 w-12 text-thinkBlue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Rapid Innovation</h3>
                <p className="text-gray-600">Accelerate time-to-value with our proven methodologies</p>
              </div>
              <div className="gradient-bg rounded-xl shadow-xl p-6 card-hover">
                <h3 className="text-xl font-semibold mb-2 text-white">96%</h3>
                <p className="text-white/90">of our partners achieve ROI within 12 months</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
