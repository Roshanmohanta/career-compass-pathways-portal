
import { useEffect, useState } from "react";
import { useParams, useSearchParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getCollegeById, getCourseById } from "@/lib/data";
import { College } from "@/components/CollegeCard";
import { Course } from "@/components/CourseCard";

const CollegeDetails = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const courseId = searchParams.get("course");
  
  const [college, setCollege] = useState<College | null>(null);
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (id) {
      const collegeData = getCollegeById(id);
      if (collegeData) {
        setCollege(collegeData);
      }
      
      if (courseId) {
        const courseData = getCourseById(courseId);
        if (courseData) {
          setCourse(courseData);
        }
      }
      
      setLoading(false);
    }
  }, [id, courseId]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <p className="text-xl">Loading college details...</p>
        </main>
        <Footer />
      </div>
    );
  }
  
  if (!college) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">College Not Found</h1>
            <p className="mb-6">The college you're looking for doesn't exist or has been removed.</p>
            <Link to="/courses">
              <Button>Browse All Courses</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Link to={course ? `/courses/${course.id}` : "/courses"}>
              <Button variant="ghost" size="sm">
                ← Back to {course ? course.name : "Courses"}
              </Button>
            </Link>
          </div>
          
          <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-100">
            {/* College Header */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{college.name}</h1>
              <p className="text-lg text-gray-600 mb-4">{college.location}</p>
              
              <div className="flex flex-wrap gap-2">
                {course && (
                  <Badge variant="outline" className="bg-white">
                    {course.name}
                  </Badge>
                )}
                <Badge variant="outline" className="bg-white">
                  Application Deadline: {college.applicationDeadline}
                </Badge>
              </div>
            </div>
            
            {/* College Details */}
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold mb-2">Average Salary Package</h3>
                    <p className="text-2xl font-bold text-primary">{college.avgSalary}</p>
                    <p className="text-sm text-gray-500 mt-2">Based on previous placement data</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold mb-2">Admission Fees</h3>
                    <p className="text-2xl font-bold text-primary">{college.fees}</p>
                    <p className="text-sm text-gray-500 mt-2">Excluding hostel and other charges</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold mb-2">Application Process</h3>
                    <p className="text-gray-600">Online application through college portal</p>
                    <p className="font-medium text-red-600 mt-2">Deadline: {college.applicationDeadline}</p>
                  </CardContent>
                </Card>
              </div>
              
              {/* Recruiting Companies */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-4">Top Recruiting Companies</h2>
                <div className="flex flex-wrap gap-3">
                  {college.companies.map((company, index) => (
                    <Badge key={index} className="bg-gray-100 text-gray-700 hover:bg-gray-200 py-1 px-3">
                      {company}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {/* Course Details Section (if course is available) */}
              {course && (
                <div className="mb-10">
                  <h2 className="text-2xl font-bold mb-4">About {course.name}</h2>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700 mb-4">{course.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="font-semibold text-gray-900">Duration</h3>
                        <p className="text-gray-700">{course.duration}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Eligibility</h3>
                        <p className="text-gray-700">{course.eligibility}</p>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Career Prospects</h3>
                      <div className="flex flex-wrap gap-2">
                        {course.careers.map((career, index) => (
                          <Badge key={index} variant="outline" className="bg-white">
                            {career}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Application CTA */}
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-2">Interested in applying?</h3>
                <p className="text-gray-600 mb-4">
                  Visit the college website for detailed application process and requirements.
                </p>
                <Button size="lg">Visit College Website</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CollegeDetails;
