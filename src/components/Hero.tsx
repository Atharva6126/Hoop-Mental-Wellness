import { Button } from "@/components/ui/button";
import communityImage from "@/assets/community-support.jpg";

const Hero = () => {
  return (
    <section className="px-6 py-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              You're Not Alone in This Journey
            </h1>
            
            <p className="text-xl text-secondary leading-relaxed max-w-lg">
              Join a supportive community where mental health conversations happen with care, understanding, and hope. Share your story, find support, and grow together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3">
                Join Our Community
              </Button>
              <Button variant="outline" size="lg" className="border-border text-secondary hover:text-foreground hover:bg-accent px-8 py-3">
                Explore Resources
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-muted rounded-2xl p-8 h-96 flex items-center justify-center">
              <img 
                src={communityImage} 
                alt="Community Support Illustration"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;