import { useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  pathname: string;
}

const navItems = [
  { href: "/", label: "Home" },
  { href: "/#features", label: "Features" },
  { href: "/motivation", label: "Our Story" },
  { href: "/downloads", label: "Downloads" },
  { href: "/changelog", label: "Changelog" },
  { href: "/donate", label: "Support" },
];

export function MobileMenu({ pathname }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
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
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-md transition-colors hover:bg-accent ${
                  isActive(item.href) ? "bg-accent" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
