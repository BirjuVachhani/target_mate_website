import { ModeToggle } from "@/components/theme/mode-toggle";
import { Menu, Heart } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AppIcon } from "@/components/icons/app-icon";
import { useState } from "react";
import { TextLogo } from "@/components/ui/text-logo";

export function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleNavigation = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <AppIcon className="h-6 w-6 text-primary" />
            <TextLogo className="h-16 text-primary" color="currentColor" />
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link 
              to="/" 
              className={`transition-colors hover:text-foreground/80 ${
                location.pathname === "/" ? "text-foreground" : "text-foreground/60"
              }`}
            >
              Home
            </Link>
            <Link 
              to="/#features" 
              className={`transition-colors hover:text-foreground/80 ${
                isActive("/#features") ? "text-foreground" : "text-foreground/60"
              }`}
            >
              Features
            </Link>
            <Link 
              to="/motivation" 
              className={`transition-colors hover:text-foreground/80 ${
                isActive("/motivation") ? "text-foreground" : "text-foreground/60"
              }`}
            >
              Our Story
            </Link>
            <Link 
              to="/downloads" 
              className={`transition-colors hover:text-foreground/80 ${
                isActive("/downloads") ? "text-foreground" : "text-foreground/60"
              }`}
            >
              Downloads
            </Link>
            <Link 
              to="/changelog" 
              className={`transition-colors hover:text-foreground/80 ${
                isActive("/changelog") ? "text-foreground" : "text-foreground/60"
              }`}
            >
              Changelog
            </Link>
          </nav>
        </div>

        <div className="flex items-center space-x-2">
          <Link
            to="/donate"
            className="hidden md:inline-flex items-center space-x-1 transition-colors hover:text-foreground/80 text-sm font-medium text-foreground/60"
          >
            <Heart className="h-4 w-4" />
            <span>Support</span>
          </Link>

          <ModeToggle />

          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9 p-0">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[280px] px-2">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <nav className="flex flex-col space-y-3 mt-12">
                  <Link 
                    to="/" 
                    className={`px-4 py-2 rounded-md transition-colors hover:bg-accent ${
                      location.pathname === "/" ? "bg-accent" : ""
                    }`}
                    onClick={handleNavigation}
                  >
                    Home
                  </Link>
                  <Link 
                    to="/#features" 
                    className={`px-4 py-2 rounded-md transition-colors hover:bg-accent ${
                      isActive("/#features") ? "bg-accent" : ""
                    }`}
                    onClick={handleNavigation}
                  >
                    Features
                  </Link>
                  <Link 
                    to="/motivation" 
                    className={`px-4 py-2 rounded-md transition-colors hover:bg-accent ${
                      isActive("/motivation") ? "bg-accent" : ""
                    }`}
                    onClick={handleNavigation}
                  >
                    Our Story
                  </Link>
                  <Link 
                    to="/downloads" 
                    className={`px-4 py-2 rounded-md transition-colors hover:bg-accent ${
                      isActive("/downloads") ? "bg-accent" : ""
                    }`}
                    onClick={handleNavigation}
                  >
                    Downloads
                  </Link>
                  <Link 
                    to="/changelog" 
                    className={`px-4 py-2 rounded-md transition-colors hover:bg-accent ${
                      isActive("/changelog") ? "bg-accent" : ""
                    }`}
                    onClick={handleNavigation}
                  >
                    Changelog
                  </Link>
                  <Link 
                    to="/donate" 
                    className={`px-4 py-2 rounded-md transition-colors hover:bg-accent ${
                      isActive("/donate") ? "bg-accent" : ""
                    }`}
                    onClick={handleNavigation}
                  >
                    Support
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}