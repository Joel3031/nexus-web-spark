
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    id: "custom-software",
    name: "Custom Software Development",
    description: "Design, build, and launch tailored solutions that meet your customer's unique needs.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    longDescription: "Our custom software development services deliver tailored solutions that precisely match your business requirements. We follow a collaborative approach, working closely with your team to understand the challenges you're facing and the opportunities you want to capture. From concept to deployment, our expert developers craft scalable, secure, and user-friendly applications that drive efficiency and growth.",
    process: [
      "Discovery and requirements analysis",
      "Architecture design and planning",
      "Agile development and continuous iteration",
      "Quality assurance and testing",
      "Deployment and ongoing support"
    ]
  },
  {
    id: "ai-development",
    name: "AI Development & Enablement",
    description: "Leverage AI strategically to optimize workflows, automate processes, and enhance business efficiency.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    longDescription: "Our AI development services help businesses harness the power of artificial intelligence to solve complex problems, automate manual processes, and unlock new insights from data. Whether you're looking to implement machine learning models, natural language processing, computer vision, or predictive analytics, our team brings the expertise needed to deliver sophisticated AI solutions tailored to your specific business context.",
    process: [
      "AI opportunity assessment",
      "Data strategy and preparation",
      "Algorithm selection and model development",
      "Integration with existing systems",
      "Model training, validation, and deployment"
    ]
  },
  {
    id: "product-design",
    name: "Product Design",
    description: "A 14-day structured workshop to refine your product vision, strategy, and business goals.",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    longDescription: "Our product design workshop is a comprehensive 14-day program designed to take your product concept from idea to executable plan. Led by experienced product strategists and designers, this structured process helps you clarify your vision, validate your assumptions, define your target users, and create a roadmap for successful development and launch. The workshop combines strategic thinking with hands-on design activities to ensure your product will delight users and meet business objectives.",
    process: [
      "Vision and strategy alignment",
      "User research and persona development",
      "User experience mapping and wireframing",
      "Visual design and prototyping",
      "Product roadmap and execution planning"
    ]
  },
  {
    id: "cloud-setup",
    name: "Cloud Setup & Architecture Design",
    description: "Design and deploy scalable, secure, and cost-efficient cloud infrastructure.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    longDescription: "Our cloud experts help you design, implement, and optimize cloud architectures that are secure, scalable, and cost-effective. Whether you're migrating existing systems to the cloud or building new cloud-native applications, we provide the expertise needed to leverage the full potential of cloud platforms. We work with major cloud providers including AWS, Microsoft Azure, and Google Cloud to deliver solutions tailored to your specific requirements.",
    process: [
      "Cloud readiness assessment",
      "Architecture design and planning",
      "Security and compliance implementation",
      "Migration execution and validation",
      "Ongoing optimization and management"
    ]
  },
  {
    id: "dedicated-team",
    name: "Dedicated Team",
    description: "Build your product with expert BAs, architects, developers, and DBAs for seamless execution.",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    longDescription: "Our dedicated team model provides you with a complete, ready-to-go software development team tailored to your project needs. Each team includes the perfect mix of business analysts, architects, developers, quality assurance engineers, and database administrators working exclusively on your project. This approach gives you the flexibility to scale resources up or down while maintaining team cohesion and knowledge retention throughout the project lifecycle.",
    process: [
      "Team composition planning",
      "Skill matching and team assembly",
      "Knowledge transfer and onboarding",
      "Agile process implementation",
      "Continuous delivery and improvement"
    ]
  },
  {
    id: "devops-services",
    name: "DevOps Services",
    description: "Streamline development with CI/CD pipelines, automated deployments, and infrastructure management.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    longDescription: "Our DevOps services help organizations build a culture of collaboration between development and operations teams while implementing automated processes for faster, more reliable software delivery. We design and implement CI/CD pipelines, infrastructure as code, containerization strategies, and monitoring solutions that enable continuous integration, testing, and deployment. The result is shorter development cycles, increased deployment frequency, and more reliable releases.",
    process: [
      "DevOps maturity assessment",
      "CI/CD pipeline implementation",
      "Infrastructure as Code (IaC) setup",
      "Containerization and orchestration",
      "Monitoring and observability implementation"
    ]
  }
];

const ServicesPage = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Scroll to the service section if there's a hash in the URL
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          const yOffset = -100; // Account for fixed header
          const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="pt-20">
      <section className="bg-nexus-800 text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-lg md:text-xl text-nexus-100">
              Comprehensive solutions to accelerate your digital transformation journey
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-24">
            {services.map((service, index) => (
              <div 
                id={service.id} 
                key={service.id} 
                className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className={index % 2 === 0 ? "order-none" : "order-none lg:order-last"}>
                  <h2 className="text-3xl font-bold mb-6">{service.name}</h2>
                  <p className="text-gray-700 mb-8">{service.longDescription}</p>
                  
                  <h3 className="text-xl font-semibold mb-4">Our Process</h3>
                  <div className="space-y-4 mb-8">
                    {service.process.map((step, i) => (
                      <Card key={i} className="overflow-hidden border-l-4 border-l-nexus-500">
                        <CardContent className="p-4 flex items-center">
                          <div className="bg-nexus-100 text-nexus-800 rounded-full h-8 w-8 flex items-center justify-center font-bold mr-4">
                            {i + 1}
                          </div>
                          <p>{step}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  <Button asChild>
                    <Link to="/contact">
                      Request This Service <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                
                <div className={index % 2 === 0 ? "order-none lg:order-last" : "order-none"}>
                  <div className="rounded-xl overflow-hidden shadow-xl">
                    <img 
                      src={service.image} 
                      alt={service.name} 
                      className="w-full h-80 object-cover"
                    />
                    <div className="bg-white p-6">
                      <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
                      <p className="text-gray-700">{service.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="bg-nexus-50 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Need a Custom Service Package?</h2>
            <p className="text-lg text-gray-700 mb-8">
              We offer flexible service combinations tailored to your specific business requirements
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Discuss Your Needs</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
