
import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Computer } from 'lucide-react';

interface VMCardProps {
  id: string;
  name: string;
  os: string;
  specs: string;
  status: 'running' | 'stopped' | 'loading';
}

const VMCard = ({ id, name, os, specs, status }: VMCardProps) => {
  const [vmStatus, setVmStatus] = useState(status);

  const getStatusColor = () => {
    switch (vmStatus) {
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

  const handleStart = () => {
    setVmStatus('loading');
    // Simulate VM starting
    setTimeout(() => {
      setVmStatus('running');
    }, 2000);
  };

  const handleStop = () => {
    setVmStatus('loading');
    // Simulate VM stopping
    setTimeout(() => {
      setVmStatus('stopped');
    }, 1000);
  };

  return (
    <Card className="vm-card">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-medium">{name}</CardTitle>
          <Badge className={`${getStatusColor()} capitalize`}>
            {vmStatus}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-start space-x-4">
          <div className="bg-gray-100 p-2 rounded-lg">
            <Computer className="h-8 w-8 text-lab-600" />
          </div>
          <div className="space-y-1">
            <div className="text-sm text-gray-500">Operating System</div>
            <div className="font-medium">{os}</div>
            <div className="text-sm text-gray-500 mt-2">Specifications</div>
            <div className="font-medium">{specs}</div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-2">
        {vmStatus === 'stopped' && (
          <Button onClick={handleStart} className="w-full bg-lab-600 hover:bg-lab-700">
            Start VM
          </Button>
        )}
        {vmStatus === 'running' && (
          <div className="flex space-x-2 w-full">
            <Button variant="outline" onClick={handleStop} className="w-1/2">
              Stop
            </Button>
            <Link to={`/vm/${id}`} className="w-1/2">
              <Button className="w-full bg-teal-600 hover:bg-teal-700">
                Connect
              </Button>
            </Link>
          </div>
        )}
        {vmStatus === 'loading' && (
          <Button disabled className="w-full">
            <div className="animate-pulse">Processing...</div>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default VMCard;
