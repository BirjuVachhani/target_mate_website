import { Link } from "react-router-dom";
import { TextLogo } from "@/components/ui/text-logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <div className="flex items-center gap-2">
            <TextLogo color="white"/>
            <p className="text-sm text-muted-foreground">
              © {currentYear} All rights reserved
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 md:flex-row">
          <div className="flex gap-4">
            <Link
              to="/privacy"
              className="text-sm font-medium underline-offset-4 hover:underline"
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className="text-sm font-medium underline-offset-4 hover:underline"
            >
              Terms
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            Built by{" "}
            <a
              href="https://birju.dev"
              className="text-primary hover:underline"
            >
              Birju Vachhani
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}