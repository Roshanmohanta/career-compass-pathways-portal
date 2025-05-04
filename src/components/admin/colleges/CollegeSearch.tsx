
import { Input } from "@/components/ui/input";

interface CollegeSearchProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export const CollegeSearch = ({ searchTerm, onSearchChange }: CollegeSearchProps) => {
  return (
    <div className="flex-1 w-full sm:max-w-xs">
      <Input
        placeholder="Search colleges..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};
