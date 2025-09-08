import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-sm border-b border-border sticky top-0 z-50 transition-colors">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center shadow-lg">
            <div className="w-4 h-4 bg-primary-foreground rounded-full animate-float"></div>
          </div>
          <span className="text-xl font-semibold text-foreground">hoop</span>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="text-secondary hover:text-primary transition-colors duration-200 font-medium">
            Community
          </a>
          <a href="#" className="text-secondary hover:text-primary transition-colors duration-200 font-medium">
            Resources
          </a>
          <a href="#" className="text-secondary hover:text-primary transition-colors duration-200 font-medium">
            Support
          </a>
          <a href="#" className="text-secondary hover:text-primary transition-colors duration-200 font-medium">
            About
          </a>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <Button variant="ghost" className="text-secondary hover:text-foreground hover:bg-accent transition-all duration-200">
          Sign In
        </Button>
        <Button className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground hover:shadow-lg hover:scale-105 transition-all duration-200 shadow-md">
          Join Community
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;