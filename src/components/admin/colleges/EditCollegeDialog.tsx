
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
import { College } from "@/components/CollegeCard";
import { allCourses } from "@/lib/data";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface EditCollegeDialogProps {
  college: College;
}

export const EditCollegeDialog = ({ college }: EditCollegeDialogProps) => {
  return (
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
  );
};
