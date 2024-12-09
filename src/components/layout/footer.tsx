import { Link } from "react-router-dom";
import { TextLogo } from "@/components/ui/text-logo";
import { GITHUB_REPO, WEBSITE } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <div className="flex items-center gap-2">
            <TextLogo/>
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
            <Link
              to={GITHUB_REPO}
              className="text-sm font-medium underline-offset-4 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            Built by{" "}
            <a
              href={WEBSITE}
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Birju Vachhani</strong>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}