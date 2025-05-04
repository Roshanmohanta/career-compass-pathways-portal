
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JobCard, { Job } from "@/components/JobCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { jobs } from "@/lib/data";
import { toast } from "sonner";

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("all");
  const [jobList, setJobList] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [savedJobs, setSavedJobs] = useState<string[]>([]);
  const [showSavedOnly, setShowSavedOnly] = useState(false);
  
  useEffect(() => {
    // Initialize with job data
    setJobList(jobs.map(job => ({ ...job, saved: false })));
  }, []);
  
  useEffect(() => {
    let filtered = jobList;
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(job => 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by location
    if (location) {
      filtered = filtered.filter(job => 
        job.location.toLowerCase().includes(location.toLowerCase())
      );
    }
    
    // Filter by job type
    if (jobType !== "all") {
      filtered = filtered.filter(job => 
        job.type.toLowerCase() === jobType.toLowerCase()
      );
    }
    
    // Filter by saved status
    if (showSavedOnly) {
      filtered = filtered.filter(job => job.saved);
    }
    
    setFilteredJobs(filtered);
  }, [searchTerm, location, jobType, jobList, showSavedOnly]);
  
  const handleSaveJob = (id: string) => {
    const updatedJobs = jobList.map(job => {
      if (job.id === id) {
        // Toggle saved status
        const newSavedStatus = !job.saved;
        
        // Show toast notification
        if (newSavedStatus) {
          toast.success("Job saved to your favorites");
        } else {
          toast.info("Job removed from your favorites");
        }
        
        // Update saved jobs array
        if (newSavedStatus) {
          setSavedJobs(prev => [...prev, id]);
        } else {
          setSavedJobs(prev => prev.filter(jobId => jobId !== id));
        }
        
        return { ...job, saved: newSavedStatus };
      }
      return job;
    });
    
    setJobList(updatedJobs);
  };
  
  const clearFilters = () => {
    setSearchTerm("");
    setLocation("");
    setJobType("all");
    setShowSavedOnly(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Find Jobs</h1>
          <p className="text-gray-600 mb-8">
            Discover job opportunities that match your skills and career aspirations.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Filters Sidebar */}
            <div className="md:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold">Filters</h2>
                  <Button variant="ghost" size="sm" onClick={clearFilters}>
                    Clear All
                  </Button>
                </div>
                
                {/* Search filter */}
                <div className="mb-6">
                  <Label htmlFor="search" className="mb-2 block">
                    Search Jobs
                  </Label>
                  <Input
                    id="search"
                    placeholder="Job title or company..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                {/* Location filter */}
                <div className="mb-6">
                  <Label htmlFor="location" className="mb-2 block">
                    Location
                  </Label>
                  <Input
                    id="location"
                    placeholder="City or region..."
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
                
                {/* Job Type filter */}
                <div className="mb-6">
                  <Label htmlFor="jobType" className="mb-2 block">
                    Job Type
                  </Label>
                  <Select value={jobType} onValueChange={setJobType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select job type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="Full-time">Full-time</SelectItem>
                      <SelectItem value="Part-time">Part-time</SelectItem>
                      <SelectItem value="Contract">Contract</SelectItem>
                      <SelectItem value="Internship">Internship</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                {/* Saved Jobs filter */}
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="savedJobs" 
                    checked={showSavedOnly} 
                    onCheckedChange={(checked) => setShowSavedOnly(checked as boolean)} 
                  />
                  <Label htmlFor="savedJobs">Show saved jobs only</Label>
                </div>
              </div>
            </div>
            
            {/* Jobs List */}
            <div className="md:col-span-3">
              <div className="mb-4 flex justify-between items-center">
                <p className="text-gray-600">
                  Showing <span className="font-medium">{filteredJobs.length}</span> jobs
                </p>
                <Select defaultValue="recent">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recent">Most Recent</SelectItem>
                    <SelectItem value="salary-high">Highest Salary</SelectItem>
                    <SelectItem value="salary-low">Lowest Salary</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {filteredJobs.length > 0 ? (
                <div className="space-y-4">
                  {filteredJobs.map((job) => (
                    <JobCard key={job.id} job={job} onSave={handleSaveJob} />
                  ))}
                </div>
              ) : (
                <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
                  <p className="text-lg text-gray-600 mb-4">
                    No jobs found matching your criteria.
                  </p>
                  <Button onClick={clearFilters}>Clear Filters</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Jobs;
