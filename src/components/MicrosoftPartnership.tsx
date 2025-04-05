
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const MicrosoftPartnership = () => {
  return (
    <section id="microsoft-partnership" className="py-20 px-6 md:px-10 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center bg-blue-50 text-thinkBlue-500 rounded-full px-4 py-1 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.4 0.011h-11.4v11.4h11.4v-11.4z"></path>
                <path d="M24 0.011h-11.4v11.4h11.4v-11.4z"></path>
                <path d="M11.4 12.589h-11.4v11.4h11.4v-11.4z"></path>
                <path d="M24 12.589h-11.4v11.4h11.4v-11.4z"></path>
              </svg>
              <span className="font-medium">Strategic Partnership</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Microsoft Solutions <span className="gradient-text">Partnership</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              As a strategic Microsoft partner, we leverage cutting-edge solutions like Microsoft Fabric and AI Studio to enable rapid innovation and scalable AI solutions for our clients.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-thinkBlue-50 rounded-full p-1 mr-3 mt-1">
                  <svg className="h-4 w-4 text-thinkBlue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700">
                  <span className="font-semibold">Microsoft Fabric:</span> Unified analytics platform from data ingestion to visualization
                </p>
              </div>
              <div className="flex items-start">
                <div className="bg-thinkBlue-50 rounded-full p-1 mr-3 mt-1">
                  <svg className="h-4 w-4 text-thinkBlue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700">
                  <span className="font-semibold">AI Studio:</span> Streamlined AI model development and deployment capabilities
                </p>
              </div>
              <div className="flex items-start">
                <div className="bg-thinkBlue-50 rounded-full p-1 mr-3 mt-1">
                  <svg className="h-4 w-4 text-thinkBlue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700">
                  <span className="font-semibold">Azure Data & AI:</span> Cloud-native solutions for enterprise-scale deployments
                </p>
              </div>
            </div>
            <Button className="bg-thinkBlue-500 hover:bg-thinkBlue-600 text-white">
              Explore Our Microsoft Solutions <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="relative">
            <div className="absolute -z-10 w-full h-full bg-gradient-to-r from-blue-100 to-thinkAccent-light rounded-full blur-3xl opacity-20"></div>
            <div className="bg-white rounded-xl shadow-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-6 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.4 0.011h-11.4v11.4h11.4v-11.4z"></path>
                  <path d="M24 0.011h-11.4v11.4h11.4v-11.4z"></path>
                  <path d="M11.4 12.589h-11.4v11.4h11.4v-11.4z"></path>
                  <path d="M24 12.589h-11.4v11.4h11.4v-11.4z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Microsoft Certified Solutions</h3>
              <p className="text-gray-600 mb-6">
                Our team includes Microsoft-certified experts who stay at the forefront of new technologies and best practices.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-thinkBlue-600">40+</div>
                  <div className="text-sm text-gray-500">Certified Professionals</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-thinkBlue-600">50+</div>
                  <div className="text-sm text-gray-500">Enterprise Deployments</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MicrosoftPartnership;
