
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
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";
import { colleges, allCourses } from "@/lib/data";
import { College } from "@/components/CollegeCard";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AdminColleges = () => {
  const [collegesList, setCollegesList] = useState<College[]>(colleges);
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleDeleteCollege = (id: string) => {
    setCollegesList(collegesList.filter(college => college.id !== id));
    toast.success("College deleted successfully");
  };
  
  const filteredColleges = collegesList.filter(college => {
    return college.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
           college.location.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="flex h-screen bg-gray-50">
      <AdminSidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader title="Colleges Management" />
        
        <main className="flex-1 overflow-y-auto p-6">
          {/* Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div className="flex-1 w-full sm:max-w-xs">
              <Input
                placeholder="Search colleges..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button>Add New College</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[525px]">
                <DialogHeader>
                  <DialogTitle>Add New College</DialogTitle>
                </DialogHeader>
                <form className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">College Name</Label>
                    <Input id="name" placeholder="e.g. University of Example" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" placeholder="e.g. Delhi, India" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="salary">Average Salary Package</Label>
                      <Input id="salary" placeholder="e.g. ₹10-15 LPA" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="fees">Admission Fees</Label>
                      <Input id="fees" placeholder="e.g. ₹5 Lakhs (Total)" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="course">Associated Course</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select course" />
                      </SelectTrigger>
                      <SelectContent>
                        {allCourses.map(course => (
                          <SelectItem key={course.id} value={course.id}>{course.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="companies">Recruiting Companies (comma separated)</Label>
                    <Input id="companies" placeholder="e.g. Google, Microsoft, Amazon" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="deadline">Application Deadline</Label>
                    <Input id="deadline" placeholder="e.g. May 15, 2025" />
                  </div>
                  
                  <div className="flex justify-end pt-4">
                    <Button type="submit" onClick={() => toast.success("New college added successfully")}>
                      Save College
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
          
          {/* Colleges Table */}
          <div className="bg-white rounded-lg border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[250px]">Name</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead className="hidden md:table-cell">Avg. Salary</TableHead>
                  <TableHead className="hidden lg:table-cell">Fees</TableHead>
                  <TableHead className="hidden lg:table-cell">Deadline</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredColleges.map((college) => (
                  <TableRow key={college.id}>
                    <TableCell className="font-medium">{college.name}</TableCell>
                    <TableCell>{college.location}</TableCell>
                    <TableCell className="hidden md:table-cell">{college.avgSalary}</TableCell>
                    <TableCell className="hidden lg:table-cell">{college.fees}</TableCell>
                    <TableCell className="hidden lg:table-cell">{college.applicationDeadline}</TableCell>
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
                              <DialogTitle>Edit College</DialogTitle>
                            </DialogHeader>
                            <form className="space-y-4 py-4">
                              <div className="space-y-2">
                                <Label htmlFor={`edit-name-${college.id}`}>College Name</Label>
                                <Input id={`edit-name-${college.id}`} defaultValue={college.name} />
                              </div>
                              
                              <div className="space-y-2">
                                <Label htmlFor={`edit-location-${college.id}`}>Location</Label>
                                <Input id={`edit-location-${college.id}`} defaultValue={college.location} />
                              </div>
                              
                              <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <Label htmlFor={`edit-salary-${college.id}`}>Average Salary Package</Label>
                                  <Input id={`edit-salary-${college.id}`} defaultValue={college.avgSalary} />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor={`edit-fees-${college.id}`}>Admission Fees</Label>
                                  <Input id={`edit-fees-${college.id}`} defaultValue={college.fees} />
                                </div>
                              </div>
                              
                              <div className="space-y-2">
                                <Label htmlFor={`edit-course-${college.id}`}>Associated Course</Label>
                                <Select defaultValue={college.courseId}>
                                  <SelectTrigger>
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {allCourses.map(course => (
                                      <SelectItem key={course.id} value={course.id}>{course.name}</SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </div>
                              
                              <div className="space-y-2">
                                <Label htmlFor={`edit-companies-${college.id}`}>Recruiting Companies</Label>
                                <Input id={`edit-companies-${college.id}`} defaultValue={college.companies.join(", ")} />
                              </div>
                              
                              <div className="space-y-2">
                                <Label htmlFor={`edit-deadline-${college.id}`}>Application Deadline</Label>
                                <Input id={`edit-deadline-${college.id}`} defaultValue={college.applicationDeadline} />
                              </div>
                              
                              <div className="flex justify-end pt-4">
                                <Button onClick={() => toast.success("College updated successfully")}>
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
                          onClick={() => handleDeleteCollege(college.id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
                
                {filteredColleges.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={6} className="h-24 text-center">
                      No colleges found matching your criteria
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

export default AdminColleges;
