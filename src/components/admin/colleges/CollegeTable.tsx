
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { College } from "@/components/CollegeCard";
import { executeQuery } from "@/lib/db";
import { toast } from "sonner";

interface CollegeTableProps {
  searchTerm: string;
  onEditCollege: (college: College) => void;
  onDeleteCollege: (id: string) => void;
}

export const CollegeTable = ({
  searchTerm,
  onEditCollege,
  onDeleteCollege,
}: CollegeTableProps) => {
  const [colleges, setColleges] = useState<College[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchColleges = async () => {
      try {
        setLoading(true);
        const query = `
          SELECT c.college_id, c.name, c.location, c.avg_salary, c.fees, c.application_deadline, c.course_id,
                 GROUP_CONCAT(cc.company_name) as companies
          FROM colleges c
          LEFT JOIN college_companies cc ON c.college_id = cc.college_id
          GROUP BY c.college_id
        `;
        const results: any[] = await executeQuery(query);
        
        const collegesData = results.map(row => ({
          id: row.college_id,
          name: row.name,
          location: row.location,
          avgSalary: row.avg_salary,
          fees: row.fees,
          companies: row.companies ? row.companies.split(',') : [],
          applicationDeadline: row.application_deadline,
          courseId: row.course_id
        }));
        
        setColleges(collegesData);
      } catch (error) {
        console.error("Error fetching colleges:", error);
        toast.error("Failed to load colleges");
      } finally {
        setLoading(false);
      }
    };

    fetchColleges();
  }, []);

  // Filter colleges based on search term
  const filteredColleges = colleges.filter((college) =>
    college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    college.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div className="text-center py-8">Loading colleges...</div>;
  }

  return (
    <Table className="border">
      <TableHeader>
        <TableRow>
          <TableHead>College Name</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Course</TableHead>
          <TableHead>Average Salary</TableHead>
          <TableHead>Fees</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filteredColleges.length > 0 ? (
          filteredColleges.map((college) => (
            <TableRow key={college.id}>
              <TableCell>{college.name}</TableCell>
              <TableCell>{college.location}</TableCell>
              <TableCell>{college.courseId}</TableCell>
              <TableCell>{college.avgSalary}</TableCell>
              <TableCell>{college.fees}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onEditCollege(college)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
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
            <TableCell colSpan={6} className="text-center py-4">
              No colleges found
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
