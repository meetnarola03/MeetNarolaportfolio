import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const taglines = [
  "Building scalable full-stack solutions",
  "Crafting seamless digital experiences",
  "Transforming ideas into reality",
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background -z-10" />
        
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="gradient-text">Meet Vipulbhai Narola</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            BSc(IT) | Full-Stack Developer
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {taglines[0]}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/contact">
              <Button size="lg" className="group">
                Let's Build Something Amazing
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            {/* <Button variant="outline" size="lg" asChild>
              <a href="EDIT_ME" download>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button> */}
          </div>

          <div className="flex flex-wrap gap-4 justify-center text-muted-foreground">
            <a
              href="mailto:meetnarola9@gmail.com"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="hidden sm:inline">meetnarola9@gmail.com</span>
            </a>
            <span className="hidden sm:inline">•</span>
            <a
              href="tel:+918799460450"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone className="h-5 w-5" />
              +91 8799460450
            </a>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Link to="/projects" className="group">
              <div className="card-elevated p-6 text-center h-full">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  5+ Projects
                </h3>
                <p className="text-muted-foreground">
                  Full-stack applications with real-world impact
                </p>
              </div>
            </Link>

            <Link to="/experience" className="group">
              <div className="card-elevated p-6 text-center h-full">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  Experience
                </h3>
                <p className="text-muted-foreground">
                  Building scalable solutions across platforms
                </p>
              </div>
            </Link>

            <Link to="/about" className="group">
              <div className="card-elevated p-6 text-center h-full">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  About Me
                </h3>
                <p className="text-muted-foreground">
                  Passionate about technology and innovation
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
