
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";
import { allCourses } from "@/lib/data";
import { Course } from "@/components/CourseCard";
import { toast } from "sonner";

const AdminCourses = () => {
  const [courses, setCourses] = useState<Course[]>(allCourses);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStream, setSelectedStream] = useState<string>("all");
  
  const handleDeleteCourse = (id: string) => {
    setCourses(courses.filter(course => course.id !== id));
    toast.success("Course deleted successfully");
  };
  
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        course.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStream = selectedStream === "all" || course.stream === selectedStream;
    
    return matchesSearch && matchesStream;
  });

  return (
    <div className="flex h-screen bg-gray-50">
      <AdminSidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader title="Courses Management" />
        
        <main className="flex-1 overflow-y-auto p-6">
          {/* Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div className="flex-1 w-full sm:max-w-xs">
              <Input
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Select value={selectedStream} onValueChange={setSelectedStream}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Select Stream" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Streams</SelectItem>
                  <SelectItem value="science">Science</SelectItem>
                  <SelectItem value="commerce">Commerce</SelectItem>
                  <SelectItem value="arts">Arts</SelectItem>
                </SelectContent>
              </Select>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Add New Course</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[525px]">
                  <DialogHeader>
                    <DialogTitle>Add New Course</DialogTitle>
                  </DialogHeader>
                  <form className="space-y-4 py-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Course Name</Label>
                        <Input id="name" placeholder="e.g. Engineering" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="stream">Stream</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Stream" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="science">Science</SelectItem>
                            <SelectItem value="commerce">Commerce</SelectItem>
                            <SelectItem value="arts">Arts</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea id="description" rows={3} placeholder="Course description..." />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="duration">Duration</Label>
                        <Input id="duration" placeholder="e.g. 4 years" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="iconText">Icon Text</Label>
                        <Input id="iconText" placeholder="e.g. EN" maxLength={2} />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="eligibility">Eligibility</Label>
                      <Input id="eligibility" placeholder="e.g. 10+2 with Physics, Chemistry" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="careers">Career Options (comma separated)</Label>
                      <Input id="careers" placeholder="e.g. Software Engineer, Data Scientist" />
                    </div>
                    
                    <div className="flex justify-end pt-4">
                      <Button type="submit" onClick={() => toast.success("New course added successfully")}>
                        Save Course
                      </Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          
          {/* Courses Table */}
          <div className="bg-white rounded-lg border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Name</TableHead>
                  <TableHead>Stream</TableHead>
                  <TableHead className="hidden md:table-cell">Duration</TableHead>
                  <TableHead className="hidden lg:table-cell">Eligibility</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCourses.map((course) => (
                  <TableRow key={course.id}>
                    <TableCell className="font-medium">{course.name}</TableCell>
                    <TableCell>
                      <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium
                        ${course.stream === 'science' ? 'bg-blue-50 text-blue-700' : 
                          course.stream === 'commerce' ? 'bg-green-50 text-green-700' : 
                          'bg-orange-50 text-orange-700'}`}
                      >
                        {course.stream.charAt(0).toUpperCase() + course.stream.slice(1)}
                      </span>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">{course.duration}</TableCell>
                    <TableCell className="hidden lg:table-cell">{course.eligibility}</TableCell>
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
                              <DialogTitle>Edit Course</DialogTitle>
                            </DialogHeader>
                            <form className="space-y-4 py-4">
                              <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <Label htmlFor={`edit-name-${course.id}`}>Course Name</Label>
                                  <Input id={`edit-name-${course.id}`} defaultValue={course.name} />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor={`edit-stream-${course.id}`}>Stream</Label>
                                  <Select defaultValue={course.stream}>
                                    <SelectTrigger>
                                      <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="science">Science</SelectItem>
                                      <SelectItem value="commerce">Commerce</SelectItem>
                                      <SelectItem value="arts">Arts</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>
                              </div>
                              
                              <div className="space-y-2">
                                <Label htmlFor={`edit-desc-${course.id}`}>Description</Label>
                                <Textarea id={`edit-desc-${course.id}`} rows={3} defaultValue={course.description} />
                              </div>
                              
                              <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <Label htmlFor={`edit-duration-${course.id}`}>Duration</Label>
                                  <Input id={`edit-duration-${course.id}`} defaultValue={course.duration} />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor={`edit-icon-${course.id}`}>Icon Text</Label>
                                  <Input id={`edit-icon-${course.id}`} defaultValue={course.iconText} maxLength={2} />
                                </div>
                              </div>
                              
                              <div className="space-y-2">
                                <Label htmlFor={`edit-elig-${course.id}`}>Eligibility</Label>
                                <Input id={`edit-elig-${course.id}`} defaultValue={course.eligibility} />
                              </div>
                              
                              <div className="space-y-2">
                                <Label htmlFor={`edit-careers-${course.id}`}>Career Options</Label>
                                <Input id={`edit-careers-${course.id}`} defaultValue={course.careers.join(", ")} />
                              </div>
                              
                              <div className="flex justify-end pt-4">
                                <Button onClick={() => toast.success("Course updated successfully")}>Save Changes</Button>
                              </div>
                            </form>
                          </DialogContent>
                        </Dialog>
                        
                        <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700" onClick={() => handleDeleteCourse(course.id)}>
                          Delete
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
                
                {filteredCourses.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={5} className="h-24 text-center">
                      No courses found matching your criteria
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

export default AdminCourses;
