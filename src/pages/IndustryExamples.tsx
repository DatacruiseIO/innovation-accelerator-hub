
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Factory, Stethoscope, Droplet, ShoppingBag, BarChart3, Building2 } from "lucide-react";

const industryExamples = [
  {
    icon: Factory,
    title: "Manufacturing",
    badge: "Smart Factory",
    description: "Implemented predictive maintenance system using IoT sensors and machine learning",
    results: [
      "40% reduction in unplanned downtime",
      "25% increase in equipment efficiency",
      "Annual savings of $2.5M in maintenance costs"
    ],
    color: "bg-blue-50 text-blue-600"
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    badge: "Patient Care",
    description: "Developed AI-powered diagnostic assistance system for radiologists",
    results: [
      "93% accuracy in early detection",
      "50% reduction in reporting time",
      "Improved patient outcomes by 35%"
    ],
    color: "bg-green-50 text-green-600"
  },
  {
    icon: Droplet,
    title: "Oil & Gas",
    badge: "Smart Operations",
    description: "Deployed real-time drilling optimization platform",
    results: [
      "30% reduction in drilling time",
      "20% decrease in operational costs",
      "$15M annual cost savings"
    ],
    color: "bg-amber-50 text-amber-600"
  },
  {
    icon: ShoppingBag,
    title: "Retail",
    badge: "Customer Experience",
    description: "Implemented personalized recommendation engine",
    results: [
      "45% increase in cross-sell revenue",
      "28% improvement in customer satisfaction",
      "2.5x higher customer engagement"
    ],
    color: "bg-purple-50 text-purple-600"
  },
  {
    icon: BarChart3,
    title: "Financial Services",
    badge: "Risk Analytics",
    description: "Built AI-driven fraud detection system",
    results: [
      "85% reduction in false positives",
      "60% faster fraud detection",
      "$8M prevented in potential fraud losses"
    ],
    color: "bg-indigo-50 text-indigo-600"
  },
  {
    icon: Building2,
    title: "Public Sector",
    badge: "Smart City",
    description: "Developed integrated city services platform",
    results: [
      "50% reduction in service response time",
      "30% improvement in resource allocation",
      "90% citizen satisfaction rate"
    ],
    color: "bg-teal-50 text-teal-600"
  }
];

const IndustryExamples = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto py-20 px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-4">Industry Success Stories</h1>
          <p className="text-lg text-gray-700">
            Explore how our AI solutions have transformed operations and driven results across different sectors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {industryExamples.map((industry, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${industry.color}`}>
                    <industry.icon className="h-6 w-6" />
                  </div>
                  <Badge variant="secondary" className="text-sm">
                    {industry.badge}
                  </Badge>
                </div>
                <CardTitle className="text-2xl">{industry.title}</CardTitle>
                <CardDescription className="text-base mt-2">
                  {industry.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {industry.results.map((result, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                      <span className="text-sm text-gray-700">{result}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustryExamples;
