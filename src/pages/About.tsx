
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const About = () => {
  return (
    <Layout>
      <div className="py-10">
        <header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">About CloudLab</h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="px-4 py-8 sm:px-0">
              <Tabs defaultValue="about" className="w-full">
                <TabsList className="mb-8">
                  <TabsTrigger value="about">About Us</TabsTrigger>
                  <TabsTrigger value="mission">Our Mission</TabsTrigger>
                  <TabsTrigger value="faq">FAQ</TabsTrigger>
                </TabsList>
                
                <TabsContent value="about">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="prose max-w-none">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">What is CloudLab?</h2>
                        
                        <p className="mb-4">
                          CloudLab is a cloud-based virtual laboratory platform designed specifically for educational institutions. 
                          We provide students and educators with access to powerful computing resources, development environments, 
                          and tools without requiring expensive hardware or complex setup.
                        </p>
                        
                        <p className="mb-4">
                          Our platform enables students to access virtual machines with pre-configured software environments, 
                          development tools, and resources from anywhere with an internet connection. Whether you're learning 
                          programming, data science, cybersecurity, or any other technical discipline, CloudLab provides the 
                          infrastructure you need to succeed.
                        </p>
                        
                        <div className="my-8 aspect-video relative overflow-hidden rounded-lg">
                          <img 
                            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=6000&q=80" 
                            alt="Students working together on laptops"
                            className="object-cover w-full h-full"
                          />
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Our History</h3>
                        
                        <p className="mb-4">
                          CloudLab was founded in 2022 by a group of educators and technologists who recognized the challenges 
                          that educational institutions face in providing access to modern computing resources. We believe that 
                          access to technology should not be a barrier to education, and our mission is to make powerful computing 
                          resources available to students everywhere.
                        </p>
                        
                        <p>
                          Since our founding, we've partnered with dozens of educational institutions around the world, 
                          helping thousands of students learn and practice with the latest technologies and tools.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="mission">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="prose max-w-none">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                        
                        <p className="mb-4 text-lg font-medium text-gray-700">
                          "To democratize access to computing resources for education, enabling students everywhere to learn, 
                          experiment, and innovate without technological barriers."
                        </p>
                        
                        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Core Values</h3>
                        
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-bold text-lab-700 mb-2">Accessibility</h4>
                            <p>
                              We believe that everyone should have access to the tools and resources they need to learn, 
                              regardless of their location or economic circumstances.
                            </p>
                          </div>
                          
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-bold text-lab-700 mb-2">Innovation</h4>
                            <p>
                              We continuously innovate to provide the best possible platform for learning and experimentation, 
                              staying at the forefront of educational technology.
                            </p>
                          </div>
                          
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-bold text-lab-700 mb-2">Collaboration</h4>
                            <p>
                              We foster collaboration between students, educators, and institutions to create 
                              a community of learning and knowledge sharing.
                            </p>
                          </div>
                          
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-bold text-lab-700 mb-2">Sustainability</h4>
                            <p>
                              We are committed to providing sustainable and environmentally friendly computing solutions 
                              by optimizing resource usage and minimizing waste.
                            </p>
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Goals</h3>
                        
                        <ul className="list-disc pl-6 mb-6">
                          <li className="mb-2">
                            Provide equal access to computing resources for students worldwide
                          </li>
                          <li className="mb-2">
                            Reduce the financial burden on educational institutions by eliminating the need for expensive hardware
                          </li>
                          <li className="mb-2">
                            Support educators with tools to create effective learning experiences
                          </li>
                          <li className="mb-2">
                            Foster innovation by providing students with access to cutting-edge technologies
                          </li>
                          <li>
                            Build a global community of learners and educators who share knowledge and resources
                          </li>
                        </ul>
                        
                        <div className="my-8 aspect-video relative overflow-hidden rounded-lg">
                          <img 
                            src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=5760&q=80" 
                            alt="Colorful software code on a monitor"
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="faq">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="prose max-w-none">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                        
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-lg font-bold text-gray-900">How does CloudLab work?</h3>
                            <p className="mt-2">
                              CloudLab provides cloud-based virtual machines and development environments that you can access from any device with an internet connection. 
                              Our platform handles all the provisioning, management, and maintenance of these resources, so you can focus on learning and creating.
                            </p>
                          </div>
                          
                          <div>
                            <h3 className="text-lg font-bold text-gray-900">What operating systems are available?</h3>
                            <p className="mt-2">
                              We offer a wide range of operating systems including Windows, macOS, and various Linux distributions such as Ubuntu, 
                              Debian, CentOS, and more. Each can be configured with different software packages to suit your specific needs.
                            </p>
                          </div>
                          
                          <div>
                            <h3 className="text-lg font-bold text-gray-900">How much does CloudLab cost?</h3>
                            <p className="mt-2">
                              CloudLab offers various pricing plans for different needs. We have plans for individual students, 
                              educators, and educational institutions. We also offer special discounts for qualifying educational institutions. 
                              Please contact our sales team for detailed pricing information.
                            </p>
                          </div>
                          
                          <div>
                            <h3 className="text-lg font-bold text-gray-900">Is my data secure?</h3>
                            <p className="mt-2">
                              Yes, security is a top priority for us. All data is encrypted in transit and at rest. 
                              We employ industry-standard security practices and regularly undergo security audits to ensure your data remains protected.
                            </p>
                          </div>
                          
                          <div>
                            <h3 className="text-lg font-bold text-gray-900">Can I save my work?</h3>
                            <p className="mt-2">
                              Yes, all your work is automatically saved to secure cloud storage. You can access your 
                              projects and files from any device with an internet connection.
                            </p>
                          </div>
                          
                          <div>
                            <h3 className="text-lg font-bold text-gray-900">What if I need help?</h3>
                            <p className="mt-2">
                              Our support team is available to help you with any questions or issues you might encounter. 
                              We also provide extensive documentation and tutorials to help you get started and make the most of CloudLab.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default About;
