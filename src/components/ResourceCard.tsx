
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ResourceCardProps {
  title: string;
  description: string;
  type: 'tutorial' | 'documentation' | 'exercise';
  level: 'beginner' | 'intermediate' | 'advanced';
  url: string;
}

const ResourceCard = ({ title, description, type, level, url }: ResourceCardProps) => {
  const getTypeColor = () => {
    switch (type) {
      case 'tutorial':
        return 'bg-lab-400';
      case 'documentation':
        return 'bg-teal-400';
      case 'exercise':
        return 'bg-purple-400';
      default:
        return 'bg-gray-400';
    }
  };

  const getLevelColor = () => {
    switch (level) {
      case 'beginner':
        return 'bg-green-400';
      case 'intermediate':
        return 'bg-yellow-400';
      case 'advanced':
        return 'bg-red-400';
      default:
        return 'bg-gray-400';
    }
  };

  return (
    <Card className="vm-card">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-medium">{title}</CardTitle>
          <div className="flex flex-col space-y-2">
            <Badge className={`${getTypeColor()} capitalize`}>{type}</Badge>
            <Badge className={`${getLevelColor()} capitalize`}>{level}</Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
      <CardFooter>
        <a href={url} target="_blank" rel="noopener noreferrer" className="w-full">
          <Button variant="outline" className="w-full">
            View Resource
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
};

export default ResourceCard;
