
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from '@/components/ui/sonner';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const CreateVMForm = ({ onCreated }: { onCreated: (vm: any) => void }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    os: 'ubuntu',
    cpus: '2',
    ram: '4',
    storage: '100'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate VM creation process
    setTimeout(() => {
      const newVM = {
        id: `vm-${Date.now()}`,
        name: formData.name,
        os: getOSFullName(formData.os),
        specs: `${formData.cpus} vCPUs, ${formData.ram}GB RAM, ${formData.storage}GB SSD`,
        status: 'stopped' as const
      };
      
      onCreated(newVM);
      toast.success("Virtual Machine created successfully!");
      setIsLoading(false);
      
      // Reset form
      setFormData({
        name: '',
        os: 'ubuntu',
        cpus: '2',
        ram: '4',
        storage: '100'
      });
    }, 1500);
  };

  const getOSFullName = (os: string) => {
    const osMap: {[key: string]: string} = {
      'ubuntu': 'Ubuntu 22.04 LTS',
      'windows': 'Windows 11 Pro',
      'debian': 'Debian 11',
      'centos': 'CentOS 9 Stream',
      'fedora': 'Fedora 36'
    };
    return osMap[os] || os;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create New Virtual Machine</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">VM Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="My Development VM"
              disabled={isLoading}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="os">Operating System</Label>
            <Select 
              value={formData.os} 
              onValueChange={(value) => handleSelectChange('os', value)}
              disabled={isLoading}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select OS" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ubuntu">Ubuntu 22.04 LTS</SelectItem>
                <SelectItem value="windows">Windows 11 Pro</SelectItem>
                <SelectItem value="debian">Debian 11</SelectItem>
                <SelectItem value="centos">CentOS 9 Stream</SelectItem>
                <SelectItem value="fedora">Fedora 36</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="cpus">vCPUs</Label>
              <Select 
                value={formData.cpus} 
                onValueChange={(value) => handleSelectChange('cpus', value)}
                disabled={isLoading}
              >
                <SelectTrigger>
                  <SelectValue placeholder="vCPUs" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="8">8</SelectItem>
                  <SelectItem value="16">16</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="ram">RAM (GB)</Label>
              <Select 
                value={formData.ram} 
                onValueChange={(value) => handleSelectChange('ram', value)}
                disabled={isLoading}
              >
                <SelectTrigger>
                  <SelectValue placeholder="RAM" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="8">8</SelectItem>
                  <SelectItem value="16">16</SelectItem>
                  <SelectItem value="32">32</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="storage">Storage (GB)</Label>
              <Select 
                value={formData.storage} 
                onValueChange={(value) => handleSelectChange('storage', value)}
                disabled={isLoading}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Storage" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="50">50</SelectItem>
                  <SelectItem value="100">100</SelectItem>
                  <SelectItem value="250">250</SelectItem>
                  <SelectItem value="500">500</SelectItem>
                  <SelectItem value="1000">1000</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            type="submit" 
            className="w-full bg-lab-600 hover:bg-lab-700"
            disabled={isLoading}
          >
            {isLoading ? "Creating VM..." : "Create VM"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default CreateVMForm;
