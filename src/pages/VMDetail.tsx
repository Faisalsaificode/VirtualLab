
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Terminal, Monitor, HardDrive, Cpu, MemoryStick } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

interface VM {
  id: string;
  name: string;
  os: string;
  specs: string;
  status: 'running' | 'stopped' | 'loading';
  cpuUsage: number;
  memoryUsage: number;
  diskUsage: number;
  ipAddress: string;
}

const mockVMs: VM[] = [
  {
    id: '1',
    name: 'Linux Development',
    os: 'Ubuntu 22.04 LTS',
    specs: '4 vCPUs, 8GB RAM, 100GB SSD',
    status: 'running',
    cpuUsage: 23,
    memoryUsage: 45,
    diskUsage: 32,
    ipAddress: '172.16.254.1',
  },
  {
    id: '2',
    name: 'Web Development',
    os: 'Windows 11 Pro',
    specs: '4 vCPUs, 16GB RAM, 250GB SSD',
    status: 'stopped',
    cpuUsage: 0,
    memoryUsage: 0,
    diskUsage: 28,
    ipAddress: '172.16.254.2',
  },
  {
    id: '3',
    name: 'Data Science',
    os: 'Ubuntu 22.04 LTS',
    specs: '8 vCPUs, 32GB RAM, 500GB SSD',
    status: 'stopped',
    cpuUsage: 0,
    memoryUsage: 0,
    diskUsage: 42,
    ipAddress: '172.16.254.3',
  },
];

const VMDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [vm, setVm] = useState<VM | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const foundVm = mockVMs.find(vm => vm.id === id);
      setVm(foundVm || null);
      setIsLoading(false);
    }, 1000);
  }, [id]);

  const handleStartVM = () => {
    if (vm) {
      toast({
        title: "Starting VM",
        description: `${vm.name} is now starting. This may take a few moments.`,
      });
      
      setVm({ ...vm, status: 'loading' });
      
      // Simulate VM starting
      setTimeout(() => {
        setVm({
          ...vm,
          status: 'running',
          cpuUsage: 5,
          memoryUsage: 25
        });
        
        toast({
          title: "VM Started",
          description: `${vm.name} is now running and ready to use.`,
        });
      }, 3000);
    }
  };

  const handleStopVM = () => {
    if (vm) {
      toast({
        title: "Stopping VM",
        description: `${vm.name} is being shut down. This may take a moment.`,
      });
      
      setVm({ ...vm, status: 'loading' });
      
      // Simulate VM stopping
      setTimeout(() => {
        setVm({
          ...vm,
          status: 'stopped',
          cpuUsage: 0,
          memoryUsage: 0
        });
        
        toast({
          title: "VM Stopped",
          description: `${vm.name} has been shut down successfully.`,
        });
      }, 2000);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'running':
        return 'bg-green-500';
      case 'stopped':
        return 'bg-gray-500';
      case 'loading':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center items-center h-96">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-lab-600 mx-auto"></div>
                <p className="mt-4 text-gray-500">Loading virtual machine details...</p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!vm) {
    return (
      <Layout>
        <div className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center py-16">
              <h2 className="text-2xl font-semibold text-gray-700">Virtual Machine Not Found</h2>
              <p className="mt-2 text-gray-500">The requested virtual machine could not be found.</p>
              <Button className="mt-4" onClick={() => window.history.back()}>
                Go Back
              </Button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="py-10">
        <header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{vm.name}</h1>
                <div className="flex items-center mt-1">
                  <Badge className={`${getStatusColor(vm.status)} capitalize mr-2`}>
                    {vm.status}
                  </Badge>
                  <span className="text-gray-500">{vm.os}</span>
                </div>
              </div>
              <div className="flex space-x-3">
                {vm.status === 'stopped' && (
                  <Button onClick={handleStartVM} className="bg-lab-600 hover:bg-lab-700">
                    Start VM
                  </Button>
                )}
                {vm.status === 'running' && (
                  <>
                    <Button variant="outline" onClick={handleStopVM}>
                      Stop VM
                    </Button>
                    <Button className="bg-teal-600 hover:bg-teal-700">
                      Connect to VM
                    </Button>
                  </>
                )}
                {vm.status === 'loading' && (
                  <Button disabled>
                    <div className="animate-pulse">Processing...</div>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="px-4 py-8 sm:px-0">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="mb-8">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="console">Console</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex items-center">
                          <Cpu className="h-5 w-5 mr-2 text-lab-600" />
                          <h3 className="text-lg font-medium">CPU Usage</h3>
                        </div>
                        <div className="mt-2">
                          <Progress value={vm.cpuUsage} className="h-2" />
                          <div className="text-right mt-1 text-sm text-gray-500">{vm.cpuUsage}%</div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex items-center">
                          <MemoryStick className="h-5 w-5 mr-2 text-lab-600" />
                          <h3 className="text-lg font-medium">Memory Usage</h3>
                        </div>
                        <div className="mt-2">
                          <Progress value={vm.memoryUsage} className="h-2" />
                          <div className="text-right mt-1 text-sm text-gray-500">{vm.memoryUsage}%</div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex items-center">
                          <HardDrive className="h-5 w-5 mr-2 text-lab-600" />
                          <h3 className="text-lg font-medium">Disk Usage</h3>
                        </div>
                        <div className="mt-2">
                          <Progress value={vm.diskUsage} className="h-2" />
                          <div className="text-right mt-1 text-sm text-gray-500">{vm.diskUsage}%</div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="mt-6 bg-white p-6 rounded-lg border shadow-sm">
                    <h3 className="text-lg font-medium mb-4">VM Information</h3>
                    <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Operating System</dt>
                        <dd className="mt-1 text-sm text-gray-900">{vm.os}</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">IP Address</dt>
                        <dd className="mt-1 text-sm text-gray-900">{vm.ipAddress}</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Specifications</dt>
                        <dd className="mt-1 text-sm text-gray-900">{vm.specs}</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Status</dt>
                        <dd className="mt-1 text-sm text-gray-900 capitalize">{vm.status}</dd>
                      </div>
                    </dl>
                  </div>
                </TabsContent>
                
                <TabsContent value="console">
                  <Card>
                    <CardContent className="p-0">
                      <div className="bg-gray-900 text-gray-100 font-mono p-4 rounded-lg h-96 overflow-auto">
                        <div className="flex items-center mb-4">
                          <Terminal className="h-5 w-5 mr-2" />
                          <h3 className="text-lg font-medium">Terminal Session</h3>
                        </div>
                        {vm.status === 'running' ? (
                          <>
                            <div className="text-green-400">
                              [root@{vm.name.toLowerCase().replace(/\s+/g, '-')} ~]# ls -la
                            </div>
                            <div className="mt-1">
                              total 32<br />
                              drwxr-xr-x  5 root root 4096 May 22 08:42 .<br />
                              drwxr-xr-x 22 root root 4096 May 22 08:40 ..<br />
                              -rw-------  1 root root  567 May 22 08:43 .bash_history<br />
                              -rw-r--r--  1 root root  571 Apr  4  2023 .bashrc<br />
                              drwxr-xr-x  3 root root 4096 May 22 08:41 .config<br />
                              drwx------  3 root root 4096 May 22 08:40 .gnupg<br />
                              -rw-r--r--  1 root root  161 Jul  9  2021 .profile<br />
                              drwxr-xr-x  2 root root 4096 May 22 08:41 projects<br />
                            </div>
                            <div className="mt-1 text-green-400">
                              [root@{vm.name.toLowerCase().replace(/\s+/g, '-')} ~]# _
                            </div>
                          </>
                        ) : (
                          <div className="flex items-center justify-center h-80">
                            <p className="text-gray-400">Virtual machine is not running. Start the VM to access the console.</p>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="settings">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-medium mb-4">VM Settings</h3>
                      <p className="text-gray-500 mb-4">Configure your virtual machine settings.</p>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-gray-700">Display Name</h4>
                          <div className="mt-1 flex rounded-md shadow-sm">
                            <input
                              type="text"
                              value={vm.name}
                              disabled={vm.status !== 'stopped'}
                              className="flex-1 rounded-md border-gray-300 focus:border-lab-500 focus:ring-lab-500 sm:text-sm p-2 border"
                            />
                          </div>
                        </div>
                        
                        <div className="pt-2">
                          <Button
                            disabled={vm.status !== 'stopped'}
                            className={`bg-lab-600 hover:bg-lab-700 ${vm.status !== 'stopped' ? 'opacity-50 cursor-not-allowed' : ''}`}
                          >
                            Save Changes
                          </Button>
                          {vm.status !== 'stopped' && (
                            <p className="text-sm text-amber-600 mt-2">
                              The VM must be stopped before you can modify its settings.
                            </p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default VMDetail;
