
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StreamSelector from "@/components/StreamSelector";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Find Your <span className="text-primary">Perfect</span> Educational Pathway
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Explore courses, discover colleges, and find career opportunities 
                  tailored to your interests and goals.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/courses">
                    <Button size="lg">Explore All Courses</Button>
                  </Link>
                  <Link to="/jobs">
                    <Button variant="outline" size="lg">Find Jobs</Button>
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Students studying" 
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stream Selection Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Choose Your Stream</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Select your preferred educational stream to discover tailored course 
                recommendations and career pathways.
              </p>
            </div>
            
            <StreamSelector />
          </div>
        </section>

        {/* Key Features Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How UniPathways Helps You</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We provide all the tools and information you need to make informed decisions 
                about your education and career path.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-xl font-bold text-center mb-4">Stream-Based Courses</h3>
                <p className="text-gray-600 text-center">
                  Discover courses tailored to your preferred educational stream, 
                  complete with detailed information about curriculum and career prospects.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl">🏫</span>
                </div>
                <h3 className="text-xl font-bold text-center mb-4">College Insights</h3>
                <p className="text-gray-600 text-center">
                  Compare colleges offering your chosen courses, with details on fees, 
                  placements, and recruiting companies to make the right choice.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="text-xl font-bold text-center mb-4">Job Recommendations</h3>
                <p className="text-gray-600 text-center">
                  Find and apply for jobs that match your qualifications and interests, 
                  with personalized recommendations based on your profile.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Ready to Start Your Educational Journey?
                  </h2>
                  <p className="text-white/90 text-lg">
                    Create an account to save your preferences, track applications, 
                    and get personalized recommendations.
                  </p>
                </div>
                <div className="flex gap-4">
                  <Button size="lg" variant="default" className="bg-white text-primary hover:bg-gray-100">
                    Sign Up Now
                  </Button>
                  <Link to="/courses">
                    <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                      Browse Courses
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
