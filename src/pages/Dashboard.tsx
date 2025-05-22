
import { useState } from 'react';
import Layout from '@/components/Layout';
import VMCard from '@/components/VMCard';
import CreateVMForm from '@/components/CreateVMForm';
import DatabasePanel from '@/components/DatabasePanel';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Server, Laptop, Monitor, Database, Plus } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface VM {
  id: string;
  name: string;
  os: string;
  specs: string;
  status: 'running' | 'stopped' | 'loading';
}

const Dashboard = () => {
  const { user } = useAuth();
  const [vms, setVMs] = useState<VM[]>([
    {
      id: '1',
      name: 'Linux Development',
      os: 'Ubuntu 22.04 LTS',
      specs: '4 vCPUs, 8GB RAM, 100GB SSD',
      status: 'running' as const,
    },
    {
      id: '2',
      name: 'Web Development',
      os: 'Windows 11 Pro',
      specs: '4 vCPUs, 16GB RAM, 250GB SSD',
      status: 'stopped' as const,
    },
    {
      id: '3',
      name: 'Data Science',
      os: 'Ubuntu 22.04 LTS',
      specs: '8 vCPUs, 32GB RAM, 500GB SSD',
      status: 'stopped' as const,
    },
  ]);
  const [createVMDialogOpen, setCreateVMDialogOpen] = useState(false);

  const handleVMCreated = (newVM: VM) => {
    setVMs([...vms, newVM]);
    setCreateVMDialogOpen(false);
  };

  return (
    <Layout>
      <div className="py-10">
        <header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="mt-1 text-sm text-gray-500">
              Welcome back, {user?.name}!
            </p>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="px-4 py-8 sm:px-0">
              <Tabs defaultValue="vms" className="w-full">
                <TabsList className="mb-8">
                  <TabsTrigger value="vms" className="flex items-center">
                    <Server className="mr-2 h-4 w-4" />
                    Virtual Machines
                  </TabsTrigger>
                  <TabsTrigger value="database" className="flex items-center">
                    <Database className="mr-2 h-4 w-4" />
                    Database
                  </TabsTrigger>
                  <TabsTrigger value="ide" className="flex items-center">
                    <Laptop className="mr-2 h-4 w-4" />
                    Cloud IDE
                  </TabsTrigger>
                  <TabsTrigger value="sessions" className="flex items-center">
                    <Monitor className="mr-2 h-4 w-4" />
                    Active Sessions
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="vms" className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-gray-700">My Virtual Machines</h2>
                    <Dialog open={createVMDialogOpen} onOpenChange={setCreateVMDialogOpen}>
                      <DialogTrigger asChild>
                        <Button className="bg-lab-600 hover:bg-lab-700">
                          <Plus className="mr-1 h-4 w-4" />
                          Create New VM
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[600px]">
                        <DialogHeader>
                          <DialogTitle>Create New Virtual Machine</DialogTitle>
                        </DialogHeader>
                        <CreateVMForm onCreated={handleVMCreated} />
                      </DialogContent>
                    </Dialog>
                  </div>
                  
                  {vms.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {vms.map((vm) => (
                        <VMCard
                          key={vm.id}
                          id={vm.id}
                          name={vm.name}
                          os={vm.os}
                          specs={vm.specs}
                          status={vm.status}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="bg-white p-8 rounded-lg border shadow-sm text-center">
                      <h3 className="text-lg font-medium text-gray-900">No Virtual Machines</h3>
                      <p className="mt-2 text-gray-500">
                        You haven't created any virtual machines yet.
                      </p>
                      <Button 
                        className="mt-4 bg-lab-600 hover:bg-lab-700"
                        onClick={() => setCreateVMDialogOpen(true)}
                      >
                        <Plus className="mr-1 h-4 w-4" />
                        Create Your First VM
                      </Button>
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="database">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <DatabasePanel />
                    <Card className="bg-white p-8 rounded-lg border shadow-sm">
                      <CardHeader>
                        <CardTitle>Database Resources</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-500">
                          Connect to your database to access database management tools and resources.
                        </p>
                        <ul className="mt-4 space-y-2 text-sm">
                          <li className="flex items-center">
                            <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2">•</span>
                            SQL Query Editor
                          </li>
                          <li className="flex items-center">
                            <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2">•</span>
                            Database Structure Viewer
                          </li>
                          <li className="flex items-center">
                            <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2">•</span>
                            Data Import/Export Tools
                          </li>
                          <li className="flex items-center">
                            <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2">•</span>
                            Performance Monitoring
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                
                <TabsContent value="ide">
                  <div className="bg-white p-8 rounded-lg border shadow-sm text-center">
                    <h3 className="text-lg font-medium text-gray-900">Cloud IDE</h3>
                    <p className="mt-2 text-gray-500">
                      Access your cloud-based development environments directly in your browser.
                    </p>
                    <Button className="mt-4 bg-lab-600 hover:bg-lab-700">Launch IDE</Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="sessions">
                  <div className="bg-white p-8 rounded-lg border shadow-sm text-center">
                    <h3 className="text-lg font-medium text-gray-900">Active Sessions</h3>
                    <p className="mt-2 text-gray-500">
                      No active sessions found. Start a virtual machine to create a new session.
                    </p>
                    <Button className="mt-4 bg-lab-600 hover:bg-lab-700">View Session History</Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Dashboard;
