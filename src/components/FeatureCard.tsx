import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
}

const FeatureCard = ({ icon: Icon, title, description, image, imageAlt }: FeatureCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 ease-smooth border-0 bg-feature-gradient backdrop-blur-sm">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-center space-y-4">
        {image && (
          <div className="rounded-lg overflow-hidden shadow-md">
            <img 
              src={image} 
              alt={imageAlt || title}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <CardDescription className="text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;