
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight, MapPin } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="pt-20">
      <section className="bg-nexus-800 text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">About Nexus Global</h1>
            <p className="text-lg md:text-xl text-nexus-100">
              Empowering financial institutions and enterprises with innovative technology solutions
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                Founded with a vision to transform financial services through technology, Nexus Global has
                grown to become a leading provider of Banking as a Service (BaaS) and digital solutions across
                the MENA region.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our journey began with a simple question: how can we make financial services more accessible,
                efficient, and secure? This question led to the development of our flagship product, Finexsus,
                which now powers digital banking experiences for institutions throughout the region.
              </p>
              <p className="text-lg text-gray-700">
                Today, we continue to push boundaries, leveraging AI, cloud technologies, and our deep
                industry expertise to create solutions that drive business growth and improve customer
                experiences in finance and beyond.
              </p>
            </div>
            
            <div className="bg-nexus-50 p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-nexus-600 mb-2">2015</div>
                  <p className="text-gray-600">Founded in Dubai</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-nexus-600 mb-2">5</div>
                  <p className="text-gray-600">Global Offices</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-nexus-600 mb-2">200+</div>
                  <p className="text-gray-600">Team Members</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-nexus-600 mb-2">150+</div>
                  <p className="text-gray-600">Client Organizations</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Mission & Vision</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Guided by clear principles, we're committed to creating meaningful impact through technology
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-all bg-nexus-50 border-none">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-lg">
                    To accelerate digital transformation in financial services by providing innovative, 
                    secure, and accessible technology solutions that empower businesses and enhance end-user experiences.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-all bg-nexus-50 border-none">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-lg">
                    To be the leading technology partner for financial institutions in the MENA region, 
                    driving innovation that makes financial services more inclusive, efficient, and future-ready.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                The principles that guide our decisions and shape our company culture
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-lg transition-all">
                <CardContent className="p-6 text-center">
                  <div className="bg-nexus-100 text-nexus-600 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Innovation</h3>
                  <p className="text-gray-600">
                    We embrace creativity and continuous improvement to solve complex challenges
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-all">
                <CardContent className="p-6 text-center">
                  <div className="bg-nexus-100 text-nexus-600 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Integrity</h3>
                  <p className="text-gray-600">
                    We operate with transparency, honesty, and the highest ethical standards
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-all">
                <CardContent className="p-6 text-center">
                  <div className="bg-nexus-100 text-nexus-600 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Collaboration</h3>
                  <p className="text-gray-600">
                    We believe in the power of teamwork and partnership to achieve exceptional results
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-all">
                <CardContent className="p-6 text-center">
                  <div className="bg-nexus-100 text-nexus-600 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Excellence</h3>
                  <p className="text-gray-600">
                    We strive for the highest quality in everything we do, exceeding expectations
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Global Presence</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Strategically positioned to serve clients across the MENA region and beyond
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-nexus-500 mt-1 mr-3" />
                    <div>
                      <h3 className="text-xl font-bold mb-1">Dubai, UAE</h3>
                      <p className="text-gray-600 mb-2">Headquarters</p>
                      <p className="text-gray-600">Business Bay, Dubai, UAE</p>
                      <Link 
                        to="/contact"
                        className="inline-flex items-center mt-4 text-nexus-600 hover:text-nexus-800 font-medium"
                      >
                        Contact HQ <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-nexus-500 mt-1 mr-3" />
                    <div>
                      <h3 className="text-xl font-bold mb-1">Riyadh, Saudi Arabia</h3>
                      <p className="text-gray-600 mb-2">Regional Office</p>
                      <p className="text-gray-600">King Fahd Road, Riyadh, Saudi Arabia</p>
                      <Link 
                        to="/contact"
                        className="inline-flex items-center mt-4 text-nexus-600 hover:text-nexus-800 font-medium"
                      >
                        Contact Office <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-nexus-500 mt-1 mr-3" />
                    <div>
                      <h3 className="text-xl font-bold mb-1">Mumbai, India</h3>
                      <p className="text-gray-600 mb-2">Development Center</p>
                      <p className="text-gray-600">Bandra Kurla Complex, Mumbai, India</p>
                      <Link 
                        to="/contact"
                        className="inline-flex items-center mt-4 text-nexus-600 hover:text-nexus-800 font-medium"
                      >
                        Contact Office <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-nexus-500 mt-1 mr-3" />
                    <div>
                      <h3 className="text-xl font-bold mb-1">Bangalore, India</h3>
                      <p className="text-gray-600 mb-2">Tech Hub</p>
                      <p className="text-gray-600">Whitefield, Bangalore, India</p>
                      <Link 
                        to="/contact"
                        className="inline-flex items-center mt-4 text-nexus-600 hover:text-nexus-800 font-medium"
                      >
                        Contact Office <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-nexus-500 mt-1 mr-3" />
                    <div>
                      <h3 className="text-xl font-bold mb-1">Chennai, India</h3>
                      <p className="text-gray-600 mb-2">Engineering Office</p>
                      <p className="text-gray-600">OMR, Chennai, India</p>
                      <Link 
                        to="/contact"
                        className="inline-flex items-center mt-4 text-nexus-600 hover:text-nexus-800 font-medium"
                      >
                        Contact Office <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gradient-to-r from-nexus-700 to-nexus-900 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Journey</h2>
            <p className="text-lg mb-8">
              Whether you're looking to partner with us, build your career, or transform your business,
              we invite you to connect with our team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-nexus-800" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button size="lg" className="bg-white text-nexus-800 hover:bg-gray-100" asChild>
                <Link to="/careers">Join Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
