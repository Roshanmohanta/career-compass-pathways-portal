
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getJobById } from "@/lib/data";
import { Job } from "@/components/JobCard";
import { toast } from "sonner";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const jobData = getJobById(id);
      if (jobData) {
        setJob(jobData);
      }
      setLoading(false);
    }
  }, [id]);

  const handleApply = () => {
    toast.success("Application submitted successfully!");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <p className="text-xl">Loading job details...</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Job Not Found</h1>
            <p className="mb-6">The job you're looking for doesn't exist or has been removed.</p>
            <Link to="/jobs">
              <Button>Browse All Jobs</Button>
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
            <Link to="/jobs">
              <Button variant="ghost" size="sm">
                ← Back to Jobs
              </Button>
            </Link>
          </div>
          
          <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-100">
            {/* Job Header */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{job.title}</h1>
                  <p className="text-lg text-gray-700 mb-4">{job.company} • {job.location}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-white">
                      {job.type}
                    </Badge>
                    <Badge variant="outline" className="bg-white">
                      {job.salary}
                    </Badge>
                    <Badge variant="outline" className="bg-white">
                      Posted: {job.posted}
                    </Badge>
                  </div>
                </div>
                
                <div className="mt-4 md:mt-0">
                  <Button size="lg" onClick={handleApply}>Apply Now</Button>
                </div>
              </div>
            </div>
            
            {/* Job Details */}
            <div className="p-8">
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-4">Job Description</h2>
                <div className="text-gray-700 space-y-4">
                  <p>{job.description}</p>
                </div>
              </div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-4">Required Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, index) => (
                    <Badge key={index} className="bg-gray-100 text-gray-800 py-1 px-3">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <Card className="bg-gray-50 border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">How to Apply</h3>
                  <p className="text-gray-700 mb-4">
                    Submit your application by clicking the Apply Now button above. Make sure your resume is up to date before applying.
                  </p>
                  <Button size="lg" className="w-full" onClick={handleApply}>Apply Now</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default JobDetails;
