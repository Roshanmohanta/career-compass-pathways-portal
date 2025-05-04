
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";
import { adminStats } from "@/lib/data";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <AdminSidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader title="Dashboard" />
        
        <main className="flex-1 overflow-y-auto p-6">
          {/* Overview Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">
                  Total Students
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{adminStats.totalStudents.toLocaleString()}</div>
                <p className="text-xs text-green-500 mt-1">+4.6% from last month</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">
                  Total Courses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{adminStats.totalCourses}</div>
                <p className="text-xs text-gray-500 mt-1">Across all streams</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">
                  Total Colleges
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{adminStats.totalColleges}</div>
                <p className="text-xs text-blue-500 mt-1">+2 added this week</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">
                  Total Jobs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{adminStats.totalJobs}</div>
                <p className="text-xs text-orange-500 mt-1">+12 new listings</p>
              </CardContent>
            </Card>
          </div>
          
          {/* Popular Streams & Courses */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Popular Streams</CardTitle>
              </CardHeader>
              <CardContent>
                {adminStats.popularStreams.map((stream, index) => (
                  <div key={index} className="flex items-center justify-between py-2">
                    <div className="flex items-center">
                      <span className="w-3 h-3 rounded-full mr-2" 
                        style={{ 
                          backgroundColor: index === 0 ? '#4A6ED0' : 
                                          index === 1 ? '#6BC4A6' : '#E17A54' 
                        }} 
                      />
                      <span>{stream.name}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium mr-2">{stream.count.toLocaleString()}</span>
                      <span className="text-gray-500 text-sm">students</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Popular Courses</CardTitle>
              </CardHeader>
              <CardContent>
                {adminStats.popularCourses.map((course, index) => (
                  <div key={index} className="flex items-center justify-between py-2">
                    <span>{course.name}</span>
                    <div className="flex items-center">
                      <span className="font-medium mr-2">{course.count.toLocaleString()}</span>
                      <span className="text-gray-500 text-sm">students</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
          
          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 text-blue-700 p-2 rounded">🔔</div>
                  <div>
                    <p className="font-medium">New course registration spike</p>
                    <p className="text-sm text-gray-500">Engineering course registrations increased by 15% this week</p>
                    <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 text-green-700 p-2 rounded">📋</div>
                  <div>
                    <p className="font-medium">Database backup completed</p>
                    <p className="text-sm text-gray-500">Daily backup of all user data completed successfully</p>
                    <p className="text-xs text-gray-400 mt-1">6 hours ago</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 text-orange-700 p-2 rounded">👤</div>
                  <div>
                    <p className="font-medium">New admin account created</p>
                    <p className="text-sm text-gray-500">New administrator account "college_admin" was created</p>
                    <p className="text-xs text-gray-400 mt-1">1 day ago</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 text-purple-700 p-2 rounded">🏫</div>
                  <div>
                    <p className="font-medium">New colleges added</p>
                    <p className="text-sm text-gray-500">3 new colleges were added to the database</p>
                    <p className="text-xs text-gray-400 mt-1">2 days ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
