import { Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="font-display font-bold text-foreground">DestinyNumbers</span>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} DestinyNumbers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
