import { Link } from "react-router-dom";
import { APP_NAME } from "@/lib/constants";
import { AppIcon } from "@/components/icons/app-icon";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <div className="flex items-center gap-2">
            <AppIcon className="h-6 w-6" />
            <span className="font-semibold">{APP_NAME}</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {currentYear} All rights reserved
          </p>
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
              href="mailto:brvachhani@gmail.com"
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