import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HomeIcon, ArrowLeft, SearchX } from "lucide-react";

export function NotFoundPage() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[calc(100vh-8rem)]">
      <div className="flex flex-col items-center space-y-12 text-center">
        <div className="space-y-8">
          <div className="flex flex-col items-center space-y-6">
            <SearchX className="h-24 w-24 text-primary animate-pulse" strokeWidth={1.5} />
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl">
              404
            </h1>
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold sm:text-3xl">
              Page not found
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-[500px] mx-auto">
              Oops! The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 min-[400px]:flex-row min-[400px]:gap-4">
          <Button
            variant="outline"
            asChild
            className="gap-2"
          >
            <Link to="/">
              <HomeIcon className="h-4 w-4" />
              Go Home
            </Link>
          </Button>
          <Button
            variant="outline"
            onClick={() => window.history.back()}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
} 