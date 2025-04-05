
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", company: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-10 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-700">
            Ready to accelerate innovation at your organization? Reach out to discuss how we can partner together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-6 text-thinkBlue-600">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Company
                </label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company"
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project or requirements"
                  rows={4}
                  required
                  className="w-full"
                />
              </div>
              <Button 
                type="submit" 
                className="bg-thinkBlue-500 hover:bg-thinkBlue-600 text-white w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          
          <div className="flex flex-col space-y-8">
            <div className="bg-gradient-to-r from-thinkBlue-600 to-thinkBlue-500 rounded-xl p-8 text-white shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">How we can help</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-white/20 rounded-full p-2 mr-4">
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span>AI strategy and roadmap development</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white/20 rounded-full p-2 mr-4">
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span>Data architecture and engineering</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white/20 rounded-full p-2 mr-4">
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span>AI solution development and implementation</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white/20 rounded-full p-2 mr-4">
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span>Innovation center establishment</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-thinkBlue-50 rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-6 text-thinkBlue-600">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-thinkBlue-100 rounded-full p-3 mr-4">
                    <Mail className="h-5 w-5 text-thinkBlue-600" />
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium">Email</p>
                    <a href="mailto:contact@innovateai.com" className="text-thinkBlue-500 hover:underline">
                      contact@innovateai.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-thinkBlue-100 rounded-full p-3 mr-4">
                    <Phone className="h-5 w-5 text-thinkBlue-600" />
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium">Phone</p>
                    <a href="tel:+18005551234" className="text-thinkBlue-500 hover:underline">
                      +1 (800) 555-1234
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-thinkBlue-100 rounded-full p-3 mr-4">
                    <MapPin className="h-5 w-5 text-thinkBlue-600" />
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium">Headquarters</p>
                    <p className="text-gray-600">
                      123 Innovation Drive<br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
