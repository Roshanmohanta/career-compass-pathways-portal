
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
import { allCourses } from "@/lib/data";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const AddCollegeDialog = () => {
  return (
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
  );
};
