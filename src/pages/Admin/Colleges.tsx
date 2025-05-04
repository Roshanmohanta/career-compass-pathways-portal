
import { useState } from "react";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";
import { College } from "@/components/CollegeCard";
import { toast } from "sonner";
import { CollegeTable } from "@/components/admin/colleges/CollegeTable";
import { AddCollegeDialog } from "@/components/admin/colleges/AddCollegeDialog";
import { CollegeSearch } from "@/components/admin/colleges/CollegeSearch";

const AdminColleges = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleEditCollege = (college: College) => {
    // This will be handled by the EditCollegeDialog component
    console.log("Editing college:", college);
  };
  
  const handleDeleteCollege = (id: string) => {
    // Here we would typically delete from the database
    // For now, just show a success toast
    toast.success("College deleted successfully");
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <AdminSidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader title="Colleges Management" />
        
        <main className="flex-1 overflow-y-auto p-6">
          {/* Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <CollegeSearch 
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
            />
            <AddCollegeDialog />
          </div>
          
          {/* Colleges Table */}
          <CollegeTable 
            searchTerm={searchTerm} 
            onEditCollege={handleEditCollege} 
            onDeleteCollege={handleDeleteCollege} 
          />
        </main>
      </div>
    </div>
  );
};

export default AdminColleges;
