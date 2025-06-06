
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Approach = () => {
  const steps = [
    {
      number: "01",
      title: "Foundation Assessment & Strategy",
      description: "We begin by understanding your business objectives and assessing your current data and AI capabilities. Our team develops a strategic roadmap aligned with your goals.",
      features: ["Data maturity assessment", "Strategic opportunity mapping", "ROI modeling & business case"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80"
    },
    {
      number: "02",
      title: "Innovation Center Setup",
      description: "We establish a dedicated Centre of Innovation with training, enablement, and robust foundations for security, governance, and innovation.",
      features: ["Training and Enablement", "Foundation for Security, Governance and Innovation", "Transparent Partnership Framework"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80"
    },
    {
      number: "03",
      title: "Accelerated Development",
      description: "Our consultants work alongside your team to rapidly prototype and develop AI solutions that address your most pressing business challenges.",
      features: ["Rapid prototyping", "Solution development", "Knowledge transfer"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
    },
    {
      number: "04",
      title: "Scale & Transform",
      description: "We help you scale successful innovations across your organization, transforming operations and creating sustainable competitive advantage.",
      features: ["Enterprise deployment", "Change management", "Continuous improvement"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  return (
    <section id="approach" className="py-20 px-6 md:px-10">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Partnership Approach</h2>
          <p className="text-lg text-gray-700">
            A proven methodology for creating lasting value through data and AI innovation.
          </p>
        </div>
        
        <div className="space-y-12 mt-16">
          {steps.map((step, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="bg-gradient-to-r from-thinkBlue-50 to-thinkAccent-light/10 p-8 rounded-xl relative">
                  <span className="absolute -top-6 -left-6 bg-thinkBlue-600 text-white text-4xl font-bold w-16 h-16 flex items-center justify-center rounded-xl shadow-lg">
                    {step.number}
                  </span>
                  <h3 className="text-2xl font-semibold mb-4 mt-2 text-thinkBlue-600">{step.title}</h3>
                  <p className="text-gray-700 mb-6">{step.description}</p>
                  <ul className="space-y-3">
                    {step.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="bg-thinkAccent/20 rounded-full p-1 mr-3 mt-0.5">
                          <Check className="h-4 w-4 text-thinkAccent" />
                        </span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="rounded-xl overflow-hidden">
                  <img 
                    src={step.image} 
                    alt={`${step.title} illustration`} 
                    className="w-full h-60 md:h-80 object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-6">Ready to Accelerate Your AI Journey?</h3>
          <Button className="bg-thinkBlue-500 hover:bg-thinkBlue-600 text-white px-8 py-6 text-lg">
            Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Approach;
