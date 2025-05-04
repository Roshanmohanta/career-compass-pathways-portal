
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { College } from "@/components/CollegeCard";
import { Button } from "@/components/ui/button";
import { EditCollegeDialog } from "./EditCollegeDialog";
import { toast } from "sonner";

interface CollegeTableProps {
  colleges: College[];
  onDeleteCollege: (id: string) => void;
}

export const CollegeTable = ({ colleges, onDeleteCollege }: CollegeTableProps) => {
  return (
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
          {colleges.length > 0 ? (
            colleges.map((college) => (
              <TableRow key={college.id}>
                <TableCell className="font-medium">{college.name}</TableCell>
                <TableCell>{college.location}</TableCell>
                <TableCell className="hidden md:table-cell">{college.avgSalary}</TableCell>
                <TableCell className="hidden lg:table-cell">{college.fees}</TableCell>
                <TableCell className="hidden lg:table-cell">{college.applicationDeadline}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <EditCollegeDialog college={college} />
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-red-500 hover:text-red-700"
                      onClick={() => onDeleteCollege(college.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} className="h-24 text-center">
                No colleges found matching your criteria
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
