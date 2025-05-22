
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from '@/components/ui/sonner';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Database, Server } from 'lucide-react';

const DatabasePanel = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectionDetails, setConnectionDetails] = useState({
    host: '',
    port: '3306',
    username: '',
    password: '',
    database: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConnectionDetails({
      ...connectionDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleConnect = (e: React.FormEvent) => {
    e.preventDefault();
    setIsConnecting(true);
    
    // Simulate connection process
    setTimeout(() => {
      setIsConnected(true);
      setIsConnecting(false);
      toast.success("Connected to database successfully!");
    }, 1500);
  };

  const handleDisconnect = () => {
    setIsConnected(false);
    toast.info("Disconnected from database");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Database className="mr-2 h-5 w-5" />
          Database Connection
        </CardTitle>
      </CardHeader>
      <CardContent>
        {!isConnected ? (
          <form onSubmit={handleConnect} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="host">Host</Label>
              <Input
                id="host"
                name="host"
                value={connectionDetails.host}
                onChange={handleChange}
                placeholder="localhost or IP address"
                disabled={isConnecting}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="port">Port</Label>
              <Input
                id="port"
                name="port"
                value={connectionDetails.port}
                onChange={handleChange}
                placeholder="3306"
                disabled={isConnecting}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                name="username"
                value={connectionDetails.username}
                onChange={handleChange}
                placeholder="Database username"
                disabled={isConnecting}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={connectionDetails.password}
                onChange={handleChange}
                placeholder="******"
                disabled={isConnecting}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="database">Database Name</Label>
              <Input
                id="database"
                name="database"
                value={connectionDetails.database}
                onChange={handleChange}
                placeholder="Database name"
                disabled={isConnecting}
                required
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-teal-600 hover:bg-teal-700"
              disabled={isConnecting}
            >
              {isConnecting ? "Connecting..." : "Connect to Database"}
            </Button>
          </form>
        ) : (
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-md border border-green-200">
              <div className="flex items-center">
                <Server className="h-5 w-5 text-green-500 mr-2" />
                <div>
                  <h4 className="font-medium text-green-800">Connected Successfully</h4>
                  <p className="text-sm text-green-600">
                    {connectionDetails.username}@{connectionDetails.host}:{connectionDetails.port}/{connectionDetails.database}
                  </p>
                </div>
              </div>
            </div>
            
            <Button 
              variant="outline" 
              className="w-full border-red-200 text-red-500 hover:bg-red-50"
              onClick={handleDisconnect}
            >
              Disconnect
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default DatabasePanel;
