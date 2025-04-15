
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Briefcase, Clock } from 'lucide-react';

const positions = [
  {
    title: "Senior Software Engineer",
    location: "Dubai, UAE",
    type: "Full Time",
    description: "Join our team to build cutting-edge BaaS solutions. We're looking for experienced software engineers with strong backend skills and financial services experience.",
    requirements: [
      "5+ years of software development experience",
      "Strong proficiency in Java, Python, or Node.js",
      "Experience with distributed systems and microservices",
      "Knowledge of financial services and banking systems",
      "Experience with cloud platforms (AWS, Azure, GCP)"
    ]
  },
  {
    title: "DevOps Engineer",
    location: "Riyadh, Saudi Arabia",
    type: "Full Time",
    description: "Help us build and maintain robust CI/CD pipelines and infrastructure for our growing product suite. You'll be responsible for automation, monitoring, and security implementation.",
    requirements: [
      "3+ years of DevOps experience",
      "Strong knowledge of Docker, Kubernetes, and container orchestration",
      "Experience with infrastructure as code (Terraform, CloudFormation)",
      "CI/CD implementation experience",
      "Security and compliance knowledge"
    ]
  },
  {
    title: "Product Manager",
    location: "Mumbai, India",
    type: "Full Time",
    description: "Drive the vision and roadmap for our fintech products. You'll work closely with engineering, design, and business teams to deliver exceptional financial technology solutions.",
    requirements: [
      "4+ years of product management experience",
      "Background in fintech, banking, or financial services",
      "Strong analytical and strategic thinking skills",
      "Excellent communication and stakeholder management",
      "Experience with agile methodologies"
    ]
  },
  {
    title: "AI/ML Engineer",
    location: "Bangalore, India",
    type: "Full Time",
    description: "Develop AI models and machine learning solutions for our accounting and HR products. You'll work on innovative features that leverage the power of artificial intelligence.",
    requirements: [
      "3+ years of experience in AI/ML development",
      "Strong Python skills and experience with ML frameworks",
      "Knowledge of NLP and computer vision techniques",
      "Experience deploying ML models to production",
      "Background in financial data analysis is a plus"
    ]
  }
];

const CareersPage = () => {
  return (
    <div className="pt-20">
      <section className="bg-nexus-800 text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-lg md:text-xl text-nexus-100">
              Build the future of financial technology with us
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Why Work With Us?</h2>
              <p className="text-lg text-gray-700">
                At Nexus Global, we're building cutting-edge technology solutions that transform how businesses operate. Join our diverse team of innovators and make an impact.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="bg-nexus-100 text-nexus-600 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Innovation Focus</h3>
                  <p className="text-gray-600">
                    Work on cutting-edge technologies that are reshaping the financial industry
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="bg-nexus-100 text-nexus-600 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Growth Opportunities</h3>
                  <p className="text-gray-600">
                    Continuous learning and clear paths for career advancement
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="bg-nexus-100 text-nexus-600 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Global Impact</h3>
                  <p className="text-gray-600">
                    Make a difference by creating solutions used across the MENA region
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Open Positions</h2>
              
              <div className="space-y-6">
                {positions.map((position) => (
                  <Card key={position.title} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="p-6">
                        <h3 className="text-2xl font-bold mb-2">{position.title}</h3>
                        <div className="flex flex-wrap gap-4 mb-4 text-gray-600">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {position.location}
                          </div>
                          <div className="flex items-center">
                            <Briefcase className="h-4 w-4 mr-1" />
                            {position.type}
                          </div>
                        </div>
                        <p className="mb-4">{position.description}</p>
                        
                        <h4 className="font-semibold mb-2">Requirements:</h4>
                        <ul className="list-disc pl-5 mb-6 space-y-1">
                          {position.requirements.map((req, index) => (
                            <li key={index}>{req}</li>
                          ))}
                        </ul>
                        
                        <Button asChild>
                          <Link to="/contact">Apply Now</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div className="bg-nexus-50 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-3">Don't See a Perfect Match?</h3>
              <p className="text-lg text-gray-700 mb-6">
                We're always looking for talented individuals to join our team. Send us your resume and let us know how you can contribute!
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Submit Your Resume</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
