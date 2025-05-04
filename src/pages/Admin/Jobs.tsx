
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";
import { jobs } from "@/lib/data";
import { Job } from "@/components/JobCard";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AdminJobs = () => {
  const [jobsList, setJobsList] = useState<Job[]>(jobs);
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleDeleteJob = (id: string) => {
    setJobsList(jobsList.filter(job => job.id !== id));
    toast.success("Job deleted successfully");
  };
  
  const filteredJobs = jobsList.filter(job => {
    return job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
           job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
           job.location.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="flex h-screen bg-gray-50">
      <AdminSidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader title="Jobs Management" />
        
        <main className="flex-1 overflow-y-auto p-6">
          {/* Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div className="flex-1 w-full sm:max-w-xs">
              <Input
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button>Add New Job</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[525px]">
                <DialogHeader>
                  <DialogTitle>Add New Job</DialogTitle>
                </DialogHeader>
                <form className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Job Title</Label>
                    <Input id="title" placeholder="e.g. Software Engineer" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" placeholder="e.g. Google" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input id="location" placeholder="e.g. Bangalore, India" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="salary">Salary</Label>
                      <Input id="salary" placeholder="e.g. ₹10-15 LPA" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="jobType">Job Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select job type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Full-time">Full-time</SelectItem>
                          <SelectItem value="Part-time">Part-time</SelectItem>
                          <SelectItem value="Contract">Contract</SelectItem>
                          <SelectItem value="Internship">Internship</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="skills">Required Skills (comma separated)</Label>
                    <Input id="skills" placeholder="e.g. React, Node.js, TypeScript" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="description">Job Description</Label>
                    <Textarea id="description" rows={4} placeholder="Describe job responsibilities and requirements..." />
                  </div>
                  
                  <div className="flex justify-end pt-4">
                    <Button type="submit" onClick={() => toast.success("New job added successfully")}>
                      Save Job
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
          
          {/* Jobs Table */}
          <div className="bg-white rounded-lg border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[250px]">Title</TableHead>
                  <TableHead>Company</TableHead>
                  <TableHead className="hidden md:table-cell">Location</TableHead>
                  <TableHead className="hidden md:table-cell">Salary</TableHead>
                  <TableHead className="hidden lg:table-cell">Type</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredJobs.map((job) => (
                  <TableRow key={job.id}>
                    <TableCell className="font-medium">{job.title}</TableCell>
                    <TableCell>{job.company}</TableCell>
                    <TableCell className="hidden md:table-cell">{job.location}</TableCell>
                    <TableCell className="hidden md:table-cell">{job.salary}</TableCell>
                    <TableCell className="hidden lg:table-cell">{job.type}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="ghost" size="sm">
                              Edit
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[525px]">
                            <DialogHeader>
                              <DialogTitle>Edit Job</DialogTitle>
                            </DialogHeader>
                            <form className="space-y-4 py-4">
                              <div className="space-y-2">
                                <Label htmlFor={`edit-title-${job.id}`}>Job Title</Label>
                                <Input id={`edit-title-${job.id}`} defaultValue={job.title} />
                              </div>
                              
                              <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <Label htmlFor={`edit-company-${job.id}`}>Company</Label>
                                  <Input id={`edit-company-${job.id}`} defaultValue={job.company} />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor={`edit-location-${job.id}`}>Location</Label>
                                  <Input id={`edit-location-${job.id}`} defaultValue={job.location} />
                                </div>
                              </div>
                              
                              <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <Label htmlFor={`edit-salary-${job.id}`}>Salary</Label>
                                  <Input id={`edit-salary-${job.id}`} defaultValue={job.salary} />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor={`edit-type-${job.id}`}>Job Type</Label>
                                  <Select defaultValue={job.type}>
                                    <SelectTrigger>
                                      <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="Full-time">Full-time</SelectItem>
                                      <SelectItem value="Part-time">Part-time</SelectItem>
                                      <SelectItem value="Contract">Contract</SelectItem>
                                      <SelectItem value="Internship">Internship</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>
                              </div>
                              
                              <div className="space-y-2">
                                <Label htmlFor={`edit-skills-${job.id}`}>Required Skills</Label>
                                <Input id={`edit-skills-${job.id}`} defaultValue={job.skills.join(", ")} />
                              </div>
                              
                              <div className="space-y-2">
                                <Label htmlFor={`edit-desc-${job.id}`}>Job Description</Label>
                                <Textarea id={`edit-desc-${job.id}`} rows={4} defaultValue={job.description} />
                              </div>
                              
                              <div className="flex justify-end pt-4">
                                <Button onClick={() => toast.success("Job updated successfully")}>
                                  Save Changes
                                </Button>
                              </div>
                            </form>
                          </DialogContent>
                        </Dialog>
                        
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-red-500 hover:text-red-700"
                          onClick={() => handleDeleteJob(job.id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
                
                {filteredJobs.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={6} className="h-24 text-center">
                      No jobs found matching your criteria
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminJobs;
