
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CourseCard, { Course } from "@/components/CourseCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getCoursesByStream } from "@/lib/data";
import { cn } from "@/lib/utils";

const Courses = () => {
  const [searchParams] = useSearchParams();
  const streamParam = searchParams.get("stream") || "all";
  
  const [activeStream, setActiveStream] = useState<string>(streamParam);
  const [courses, setCourses] = useState<Course[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  
  useEffect(() => {
    // Set courses based on selected stream
    const streamCourses = getCoursesByStream(activeStream);
    setCourses(streamCourses);
    setFilteredCourses(streamCourses);
  }, [activeStream]);
  
  useEffect(() => {
    // Filter courses based on search term
    if (searchTerm.trim() === "") {
      setFilteredCourses(courses);
    } else {
      const filtered = courses.filter(
        course => 
          course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCourses(filtered);
    }
  }, [searchTerm, courses]);
  
  const handleStreamChange = (stream: string) => {
    setActiveStream(stream);
    setSearchTerm("");
  };
  
  const streamButtons = [
    { id: "all", name: "All Streams", color: "bg-gray-100 hover:bg-gray-200 text-gray-800" },
    { id: "science", name: "Science", color: "bg-blue-50 hover:bg-blue-100 text-science" },
    { id: "commerce", name: "Commerce", color: "bg-green-50 hover:bg-green-100 text-commerce" },
    { id: "arts", name: "Arts", color: "bg-orange-50 hover:bg-orange-100 text-arts" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Explore Courses</h1>
            <p className="text-gray-600">
              Discover courses tailored to your preferred educational stream and career goals.
            </p>
          </div>
          
          {/* Stream Filter Buttons */}
          <div className="flex flex-wrap gap-2 mb-6">
            {streamButtons.map(stream => (
              <Button
                key={stream.id}
                onClick={() => handleStreamChange(stream.id)}
                variant="outline"
                className={cn(
                  "border",
                  activeStream === stream.id ? "border-primary" : "border-transparent",
                  stream.color
                )}
              >
                {stream.name}
              </Button>
            ))}
          </div>
          
          {/* Search Bar */}
          <div className="mb-8">
            <div className="max-w-md">
              <Input
                type="search"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
          </div>
          
          {/* Courses Grid */}
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">
                No courses found. Please try a different search term.
              </p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Courses;
