
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Factory, Stethoscope, Droplet, ShoppingBag, BarChart3, Building2 } from "lucide-react";

const industries = [
  {
    title: "Manufacturing",
    description: "Optimize production through predictive maintenance and intelligent automation",
    icon: Factory,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Healthcare",
    description: "Transform patient care with predictive analytics and personalized medicine",
    icon: Stethoscope,
    color: "bg-green-50 text-green-600",
  },
  {
    title: "Oil & Gas",
    description: "Enhance exploration and production with AI-driven insights and automation",
    icon: Droplet,
    color: "bg-amber-50 text-amber-600",
  },
  {
    title: "Retail",
    description: "Revolutionize customer experience with personalized recommendations and forecasting",
    icon: ShoppingBag,
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "Financial Services",
    description: "Mitigate risk and improve decision-making with advanced analytics",
    icon: BarChart3,
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    title: "Public Sector",
    description: "Improve citizen services and operational efficiency through data-driven solutions",
    icon: Building2,
    color: "bg-teal-50 text-teal-600",
  }
];

const Industries = () => {
  return (
    <section id="industries" className="py-20 px-6 md:px-10 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry Expertise</h2>
          <p className="text-lg text-gray-700">
            Our specialized consulting teams bring deep domain knowledge and AI expertise to transform key industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {industries.map((industry, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-all card-hover">
              <CardHeader className="pb-2">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${industry.color}`}>
                  <industry.icon className="h-6 w-6" />
                </div>
                <CardTitle>{industry.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{industry.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
