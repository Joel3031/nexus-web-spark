
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, ChevronRight, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from '@/lib/utils';

const slides = [
  {
    title: "Accelerate Your Banking as a Service (BaaS) Transformation with Finexsus – 260+ APIs in Just 8 Weeks!",
    description: "Nexus Global's Finexsus is a leading Banking as a Service (BaaS) provider in the MENA region, offering a fully integrated, API-driven platform that enables banks and fintechs to launch next-gen financial services in just 8 weeks. With 260+ ready-to-use APIs, Finexsus empowers businesses to seamlessly implement digital banking, payments, lending, compliance, and more—all while ensuring regulatory compliance, security, and scalability"
  },
  {
    title: "Tailored Digital Solutions for Scalable Growth",
    description: "At Nexus Global, we deliver custom software and digital solutions designed for scalability, security, and efficiency. Specializing in Banking as a Service (BaaS) and fintech innovations, we create tailored applications, integrations, and automation tools to help businesses streamline operations and drive growth. Whether you're a financial institution, fintech startup, or enterprise, we ensure your digital transformation is seamless and future-ready."
  }
];

const products = [
  {
    name: "Finexsus",
    icon: "🏦",
    description: "Leading Banking as a Service (BaaS) Provider in MENA Region"
  },
  {
    name: "Payzo Books",
    icon: "📊",
    description: "The World's First AI-Powered Accounting System – ZATCA Integrated"
  },
  {
    name: "Payzo HR",
    icon: "👨‍💼",
    description: "AI-Based HR System – From Recruitment to Payroll"
  },
  {
    name: "RHEVIRA",
    icon: "⚙️",
    description: "Achieve compliance, quality, and accelerated delivery with RHEVIRA's automated DevOps CI/CD pipeline framework."
  },
  {
    name: "GrowK",
    icon: "💰",
    description: "Save & Invest in Digital Gold – Starting from 100 SAR"
  },
  {
    name: "Sentinel360",
    icon: "🛡️",
    description: "Comprehensive Cybersecurity Solutions for Ultimate Protection"
  }
];

const services = [
  {
    name: "Custom Software Development",
    description: "Design, build, and launch tailored solutions that meet your customer's unique needs.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "AI Development & Enablement",
    description: "Leverage AI strategically to optimize workflows, automate processes, and enhance business efficiency.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Product Design",
    description: "A 14-day structured workshop to refine your product vision, strategy, and business goals.",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Cloud Setup & Architecture Design",
    description: "Design and deploy scalable, secure, and cost-efficient cloud infrastructure.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Dedicated Team",
    description: "Build your product with expert BAs, architects, developers, and DBAs for seamless execution.",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "DevOps Services",
    description: "Streamline development with CI/CD pipelines, automated deployments, and infrastructure management.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  }
];

const offices = [
  { city: "Dubai", country: "UAE", address: "Business Bay, Dubai, UAE" },
  { city: "Riyadh", country: "Saudi Arabia", address: "King Fahd Road, Riyadh, Saudi Arabia" },
  { city: "Mumbai", country: "India", address: "Bandra Kurla Complex, Mumbai, India" },
  { city: "Bangalore", country: "India", address: "Whitefield, Bangalore, India" },
  { city: "Chennai", country: "India", address: "OMR, Chennai, India" }
];

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [animatedElements, setAnimatedElements] = useState<Set<Element>>(new Set());
  
  // Handle slider navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    sliderRef.current?.scrollTo({
      left: ((currentSlide + 1) % slides.length) * sliderRef.current.offsetWidth,
      behavior: 'smooth'
    });
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    sliderRef.current?.scrollTo({
      left: ((currentSlide - 1 + slides.length) % slides.length) * sliderRef.current.offsetWidth,
      behavior: 'smooth'
    });
  };

  // Intersection Observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animatedElements.has(entry.target)) {
          entry.target.classList.add('visible');
          setAnimatedElements(prev => new Set(prev).add(entry.target));
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, [animatedElements]);

  return (
    <div className="pt-20">
      {/* Hero Section with Horizontal Scroll */}
      <section className="relative min-h-[600px] flex items-center bg-gradient-to-r from-nexus-900 to-nexus-700 text-white overflow-hidden">
        <div className="container relative z-10">
          <div 
            className="horizontal-slider"
            ref={sliderRef}
          >
            {slides.map((slide, index) => (
              <div 
                key={index} 
                className="horizontal-slide px-4 py-16 md:py-20 lg:py-24 flex flex-col justify-center"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl">{slide.title}</h1>
                <p className="text-lg md:text-xl max-w-3xl mb-8 text-gray-100">{slide.description}</p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <Link to="/contact">Reach Out</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/products">Explore Our Solutions</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="bg-white/20 hover:bg-white/30 text-white rounded-full"
            >
              <ArrowLeft className="h-6 w-6" />
            </Button>
            
            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index);
                    sliderRef.current?.scrollTo({
                      left: index * sliderRef.current.offsetWidth,
                      behavior: 'smooth'
                    });
                  }}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all",
                    currentSlide === index 
                      ? "bg-white scale-100" 
                      : "bg-white/50 scale-75 hover:scale-90 hover:bg-white/70"
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className="bg-white/20 hover:bg-white/30 text-white rounded-full"
            >
              <ArrowRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
        
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
          <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 40L40 0M0 0L40 40" stroke="white" strokeWidth="0.5" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </section>
      
      {/* Products Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cutting-edge solutions empowering businesses across the MENA region
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card 
                key={product.name} 
                className={cn(
                  "transition-all hover:shadow-lg hover:-translate-y-1 bg-white overflow-hidden animate-on-scroll",
                  index % 2 === 0 ? "border-t-4 border-t-nexus-500" : "border-t-4 border-t-nexus-700"
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{product.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-600">{product.description}</p>
                  <Link 
                    to={`/products#${product.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center mt-4 text-nexus-600 hover:text-nexus-800 font-medium"
                  >
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions tailored to accelerate your digital transformation journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.name}
                className="animate-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="group relative overflow-hidden rounded-lg">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 flex flex-col justify-end">
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-white/80 mb-4">{service.description}</p>
                    <Link 
                      to={`/services#${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-flex items-center text-white hover:text-nexus-200 font-medium"
                    >
                      Discover more <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* BaaS Section */}
      <section className="section-padding bg-nexus-800 text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Banking as a Service Excellence</h2>
              <p className="text-lg mb-6">
                Finexsus delivers a comprehensive BaaS platform that revolutionizes how financial institutions operate. With our 260+ ready APIs, we enable:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-nexus-500 p-1 rounded-full mr-3 mt-1">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Rapid deployment of digital banking solutions in just 8 weeks</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-nexus-500 p-1 rounded-full mr-3 mt-1">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Seamless integration with existing core banking systems</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-nexus-500 p-1 rounded-full mr-3 mt-1">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Regulatory compliant solutions tailored for the MENA region</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-nexus-500 p-1 rounded-full mr-3 mt-1">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Advanced security features protecting sensitive financial data</span>
                </li>
              </ul>
              <div className="mt-8">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/products#finexsus">Discover Finexsus</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative animate-on-scroll">
              <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl relative z-10">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-nexus-300">260+</div>
                    <div className="text-sm mt-1">Ready APIs</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-nexus-300">8</div>
                    <div className="text-sm mt-1">Weeks Deployment</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-nexus-300">100+</div>
                    <div className="text-sm mt-1">Financial Institutions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-nexus-300">24/7</div>
                    <div className="text-sm mt-1">Support</div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-nexus-500/30 to-nexus-700/30 rounded-xl blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Offices Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Global Presence</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              With offices across strategic locations, we're positioned to serve clients worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card 
                key={`${office.city}-${office.country}`}
                className="animate-on-scroll hover:shadow-lg transition-all"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-nexus-500 mt-1 mr-3" />
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{office.city}, {office.country}</h3>
                      <p className="text-gray-600">{office.address}</p>
                      <Link 
                        to="/contact"
                        className="inline-flex items-center mt-4 text-nexus-600 hover:text-nexus-800 font-medium"
                      >
                        Contact this office <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-nexus-700 to-nexus-900 text-white">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Ready to Transform Your Business?</h2>
              <p className="text-lg text-gray-100">Let's discuss how Nexus Global can accelerate your growth</p>
            </div>
            <Button size="lg" className="bg-white text-nexus-800 hover:bg-gray-100" asChild>
              <Link to="/contact">Reach Out Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
