import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="px-6 py-20 bg-gradient-to-br from-background via-accent/30 to-background min-h-[90vh] flex items-center">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight">
          You're Not Alone in This{" "}
          <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Journey
          </span>
        </h1>
        
        <p className="text-xl lg:text-2xl text-secondary leading-relaxed max-w-3xl mx-auto font-light">
          Join a supportive community where mental health conversations happen with care, understanding, and hope. 
          <br className="hidden sm:block" />
          Share your story, find support, and grow together.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-scale-in">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground hover:shadow-xl hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-full shadow-lg"
          >
            Join Our Community
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-primary/20 text-secondary hover:text-primary hover:bg-primary/5 hover:border-primary/40 hover:shadow-lg hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-medium rounded-full"
          >
            Explore Resources
          </Button>
        </div>

        <div className="pt-12 flex justify-center items-center gap-2 text-sm text-muted-foreground">
          <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse"></div>
          <span>Building hope, one conversation at a time</span>
          <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;