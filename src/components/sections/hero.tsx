import { Button } from "@/components/ui/button";
import { APP_NAME, APP_DESCRIPTION } from "@/lib/constants";
import { Download, Github } from "lucide-react";
import { getPlatform, PLATFORM_LABELS, type Platform } from "@/lib/platform";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Hero() {
  const [platform, setPlatform] = useState<Platform>('unknown');
  const [currentScreenshot, setCurrentScreenshot] = useState(0);
  const [fade, setFade] = useState(true);

  const screenshots = [
    "/screenshots/screenshot_1.png",
    "/screenshots/screenshot_2.png",
    "/screenshots/screenshot_3.png",
  ];

  useEffect(() => {
    setPlatform(getPlatform());
    
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentScreenshot((prev) => (prev + 1) % screenshots.length);
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden pt-0">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-background z-0" />
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 py-8 md:py-12">
          <div className="flex flex-col items-start lg:items-start gap-6 text-left lg:w-1/2 px-4 lg:px-8">
            <div className="space-y-4">
              <img
                src="/app_icon.png"
                alt="App Icon"
                className="w-32 h-32"
              />
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                {APP_NAME}
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                {APP_DESCRIPTION}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start w-full sm:w-auto gap-4">
              <Button size="lg" className="gap-2" asChild>
                <Link to="/downloads">
                  <Download className="h-5 w-5" />
                  {PLATFORM_LABELS[platform]}
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <a 
                  href="https://github.com/BirjuVachhani/target_mate"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                  View on GitHub
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Available for Windows, macOS, iOS, and Android
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px]">
              <div className="relative z-10">
                <div className={`transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
                  <img
                    src={screenshots[currentScreenshot]}
                    alt="Target Mate app interface"
                    className="w-full h-full object-cover rounded-[32px] transition-opacity duration-500"
                  />
                </div>
                <div className="absolute -z-10 inset-0 translate-y-2 scale-[0.98] bg-background/50 rounded-[40px] blur-lg" />
                <div className="absolute -z-20 inset-0 translate-y-4 scale-[0.96] bg-primary/10 rounded-[40px] blur-xl" />
              </div>
              <div className="absolute -z-30 inset-0 translate-y-6 scale-105 bg-gradient-to-br from-primary/20 via-primary/5 to-background blur-2xl rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}