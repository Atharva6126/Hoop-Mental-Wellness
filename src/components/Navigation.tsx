import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-background border-b border-border">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-primary-foreground rounded-full"></div>
          </div>
          <span className="text-xl font-semibold text-foreground">hoop</span>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="text-secondary hover:text-foreground transition-colors">
            Community
          </a>
          <a href="#" className="text-secondary hover:text-foreground transition-colors">
            Resources
          </a>
          <a href="#" className="text-secondary hover:text-foreground transition-colors">
            Support
          </a>
          <a href="#" className="text-secondary hover:text-foreground transition-colors">
            About
          </a>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <Button variant="ghost" className="text-secondary hover:text-foreground">
          Sign In
        </Button>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          Join Community
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;