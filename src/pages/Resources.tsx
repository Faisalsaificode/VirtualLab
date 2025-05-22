
import Layout from '@/components/Layout';
import ResourceCard from '@/components/ResourceCard';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';

const resources = [
  {
    id: '1',
    title: 'Introduction to Linux Command Line',
    description: 'Learn the basics of navigating and using the Linux command line interface.',
    type: 'tutorial' as const,
    level: 'beginner' as const,
    url: '#',
    tags: ['linux', 'command-line', 'bash']
  },
  {
    id: '2',
    title: 'Web Development with Node.js',
    description: 'Build scalable web applications using Node.js and Express.',
    type: 'tutorial' as const,
    level: 'intermediate' as const,
    url: '#',
    tags: ['javascript', 'node.js', 'web-development']
  },
  {
    id: '3',
    title: 'Python Data Analysis with Pandas',
    description: 'Analyze and manipulate data using Python and the Pandas library.',
    type: 'documentation' as const,
    level: 'intermediate' as const,
    url: '#',
    tags: ['python', 'data-science', 'pandas']
  },
  {
    id: '4',
    title: 'Docker Container Fundamentals',
    description: 'Learn how to build, run, and manage Docker containers for your applications.',
    type: 'tutorial' as const,
    level: 'intermediate' as const,
    url: '#',
    tags: ['docker', 'containers', 'devops']
  },
  {
    id: '5',
    title: 'Advanced Machine Learning Algorithms',
    description: 'Explore advanced machine learning algorithms and their implementations.',
    type: 'documentation' as const,
    level: 'advanced' as const,
    url: '#',
    tags: ['machine-learning', 'python', 'data-science']
  },
  {
    id: '6',
    title: 'JavaScript Debugging Exercises',
    description: 'Practice debugging JavaScript code with these interactive exercises.',
    type: 'exercise' as const,
    level: 'beginner' as const,
    url: '#',
    tags: ['javascript', 'debugging', 'web-development']
  },
];

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = Array.from(new Set(resources.flatMap(resource => resource.tags)));

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTags = selectedTags.length === 0 || 
                        selectedTags.some(tag => resource.tags.includes(tag));
    
    return matchesSearch && matchesTags;
  });

  return (
    <Layout>
      <div className="py-10">
        <header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Learning Resources</h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="px-4 py-8 sm:px-0">
              <div className="mb-8">
                <Input 
                  type="search"
                  placeholder="Search resources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="max-w-md"
                />
                
                <div className="mt-4">
                  <div className="text-sm font-medium text-gray-700 mb-2">Filter by tags:</div>
                  <div className="flex flex-wrap gap-2">
                    {allTags.map(tag => (
                      <Badge 
                        key={tag} 
                        variant={selectedTags.includes(tag) ? "default" : "outline"}
                        className={`cursor-pointer ${selectedTags.includes(tag) ? 'bg-lab-600' : ''}`}
                        onClick={() => toggleTag(tag)}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              {filteredResources.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredResources.map(resource => (
                    <ResourceCard
                      key={resource.id}
                      title={resource.title}
                      description={resource.description}
                      type={resource.type}
                      level={resource.level}
                      url={resource.url}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-10">
                  <p className="text-gray-500">No resources found matching your criteria.</p>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Resources;
