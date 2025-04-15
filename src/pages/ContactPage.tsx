
import { useState, FormEvent, ChangeEvent } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Check, MapPin, Phone, Mail, MessageSquare } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
  source: string;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    source: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, source: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      console.log('Form submitted:', formData);
      
      // In a real implementation, you'd send this data to your backend
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     ...formData,
      //     recipient: 'Sales@nexusglobal.sa'
      //   }),
      // });
      
      setSubmitted(true);
      toast.success('Thank you for your message', {
        description: 'We will get back to you within 24 hours.',
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
        source: '',
      });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Something went wrong', {
        description: 'Please try again later or contact us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      <section className="bg-nexus-800 text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Reach Out</h1>
            <p className="text-lg md:text-xl text-nexus-100">
              Let's start a conversation about how we can help transform your business
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left side - Contact info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Talk to Us & Kickstart Your Project Today!</h2>
                <p className="text-lg mb-8">
                  <MessageSquare className="inline-block mr-2 h-5 w-5 text-nexus-600" />
                  Connect with our experts and take your vision from concept to reality. Here's what you can expect:
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-nexus-100 text-nexus-600 p-1 rounded-full mr-3 mt-1">
                      <Check className="h-4 w-4" />
                    </div>
                    <span>Fast Response: Get a reply within 24 hours—no delays, just action.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-nexus-100 text-nexus-600 p-1 rounded-full mr-3 mt-1">
                      <Check className="h-4 w-4" />
                    </div>
                    <span>Direct Access to Experts: Speak with product strategists and tech specialists, not account managers.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-nexus-100 text-nexus-600 p-1 rounded-full mr-3 mt-1">
                      <Check className="h-4 w-4" />
                    </div>
                    <span>Tailored Guidance: Receive customized recommendations aligned with your business goals.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-nexus-100 text-nexus-600 p-1 rounded-full mr-3 mt-1">
                      <Check className="h-4 w-4" />
                    </div>
                    <span>Clear Roadmap: Get a structured plan to accelerate your project's success.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-nexus-100 text-nexus-600 p-1 rounded-full mr-3 mt-1">
                      <Check className="h-4 w-4" />
                    </div>
                    <span>End-to-End Support: From ideation to deployment, we're with you at every step.</span>
                  </li>
                </ul>
                
                <p className="mt-8 text-lg font-medium">
                  <MessageSquare className="inline-block mr-2 h-5 w-5 text-nexus-600" />
                  Let's build something great together—reach out today!
                </p>
              </div>
              
              <div className="space-y-6 pt-8 border-t border-gray-200">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-nexus-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Our Offices</h3>
                    <p className="mt-1">Dubai, Saudi Arabia, and three locations in India</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-nexus-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <p className="mt-1">+971 4 123 4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-nexus-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="mt-1">Sales@nexusglobal.sa</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - Contact form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-6">
                    <Check className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
                  <p className="text-lg text-gray-600 mb-8">
                    Your message has been sent successfully. We'll get back to you within 24 hours.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1"
                      placeholder="Your email address"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Cell Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="mt-1"
                      placeholder="Your phone number"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="mt-1"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="mt-1"
                      placeholder="Subject of your inquiry"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Enquiry Details</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="mt-1"
                      placeholder="Please provide details about your inquiry"
                      rows={5}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="source">How did you hear about us?</Label>
                    <Select
                      value={formData.source}
                      onValueChange={handleSelectChange}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="search">Search Engine</SelectItem>
                        <SelectItem value="social">Social Media</SelectItem>
                        <SelectItem value="referral">Referral</SelectItem>
                        <SelectItem value="event">Event or Conference</SelectItem>
                        <SelectItem value="press">Press or News</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      className={cn("flex-1", isSubmitting && "opacity-50 cursor-not-allowed")}
                      disabled={isSubmitting}
                      onClick={() => {
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          company: '',
                          subject: '',
                          message: '',
                          source: '',
                        });
                      }}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className={cn("flex-1", isSubmitting && "opacity-50 cursor-not-allowed")}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
