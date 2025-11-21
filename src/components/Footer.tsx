import { Github, Linkedin, Mail, Phone } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 gradient-text">
              Meet Vipulbhai Narola
            </h3>
            <p className="text-muted-foreground text-sm">
              BSc(IT) | Full-Stack Developer
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a
                href="mailto:meetnarola9@gmail.com"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                meetnarola9@gmail.com
              </a>
              <a
                href="tel:+918799460450"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                +91 8799460450
              </a>
            </div>
          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {currentYear} Meet Vipulbhai Narola. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
