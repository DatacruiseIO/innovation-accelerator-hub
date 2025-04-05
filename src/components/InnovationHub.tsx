
import { Button } from "@/components/ui/button";
import { Sparkles, Lightbulb, Rocket, ArrowRight } from "lucide-react";

const InnovationHub = () => {
  return (
    <section id="innovation-hub" className="py-20 px-6 md:px-10 bg-thinkBlue-700 text-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center bg-thinkBlue-600/50 rounded-full px-4 py-1 mb-4">
            <Sparkles className="h-5 w-5 mr-2 text-thinkAccent-light" />
            <span className="text-sm font-medium text-thinkAccent-light">Innovation Accelerator</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Centre of Innovation</h2>
          <p className="text-lg text-gray-300">
            A dedicated team of experts working alongside your organization to rapidly prototype, test, and deploy AI solutions that drive business value.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-thinkBlue-600/30 backdrop-blur-sm p-8 rounded-xl border border-thinkBlue-500/20">
            <div className="bg-thinkAccent-light/20 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <Lightbulb className="h-7 w-7 text-thinkAccent-light" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Rapid Ideation</h3>
            <p className="text-gray-300">
              Co-create solutions with our team using design thinking and agile methodologies to rapidly move from concept to prototype.
            </p>
          </div>
          
          <div className="bg-thinkBlue-600/30 backdrop-blur-sm p-8 rounded-xl border border-thinkBlue-500/20 md:transform md:translate-y-6">
            <div className="bg-thinkAccent/20 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <Rocket className="h-7 w-7 text-thinkAccent" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Accelerated Deployment</h3>
            <p className="text-gray-300">
              Fast-track deployment with our proven frameworks and technology assets, reducing time-to-value by up to 60%.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-thinkBlue-500 to-thinkAccent p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">Our Partners See Results</h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <div className="bg-white/20 rounded-full p-1 mr-3 mt-0.5">
                  <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>35% average increase in operational efficiency</span>
              </li>
              <li className="flex items-start">
                <div className="bg-white/20 rounded-full p-1 mr-3 mt-0.5">
                  <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>42% reduction in time-to-market for new initiatives</span>
              </li>
              <li className="flex items-start">
                <div className="bg-white/20 rounded-full p-1 mr-3 mt-0.5">
                  <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>3x ROI on AI investments within the first year</span>
              </li>
            </ul>
            <Button className="bg-white text-thinkBlue-600 hover:bg-white/90 mt-2 w-full">
              Read Success Stories <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationHub;
