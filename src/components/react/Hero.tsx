import { Button } from "@/components/ui/button";
import { APP_NAME, GITHUB_REPO, TOGGL } from "@/lib/constants";
import { Download } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
      <path d="M9 18c-4.51 2-5-2-7-2"/>
    </svg>
  );
}
import { getPlatform, PLATFORM_LABELS, type Platform } from "@/lib/platform";
import { useEffect, useState } from "react";

export function Hero() {
  const [platform, setPlatform] = useState<Platform>('unknown');
  const [currentScreenshot, setCurrentScreenshot] = useState(0);
  const [fade, setFade] = useState(true);

  const screenshots = [
    "/screenshots/screenshot_1.png",
    "/screenshots/screenshot_2.png",
    "/screenshots/screenshot_3.png",
    "/screenshots/screenshot_4.png",
    "/screenshots/screenshot_5.png",
    "/screenshots/screenshot_6.png",
    "/screenshots/screenshot_7.png",
    "/screenshots/screenshot_8.png",
    "/screenshots/screenshot_9.png",
    "/screenshots/screenshot_10.png",
    "/screenshots/screenshot_11.png",
    "/screenshots/screenshot_12.png",
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
    <div className="relative overflow-hidden pt-0 bg-gradient-to-br from-muted/20 via-transparent to-transparent z-0">
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
                A companion app for <a href={TOGGL} target="_blank" rel="noopener noreferrer" className="text-primary font-bold">Toggl Track</a> to manage your working hours and achieve your monthly goals.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start w-full sm:w-auto gap-4">
              <Button size="lg" className="gap-2" asChild>
                <a href="/downloads">
                  <Download className="h-5 w-5" />
                  {PLATFORM_LABELS[platform]}
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <a
                  href={GITHUB_REPO}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon className="h-5 w-5" />
                  View on GitHub
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Available for Windows, macOS, iOS, and Android. <a href="/downloads" className="text-primary hover:underline">See available platforms</a>.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px]">
              <div className="relative z-2">
                <div className={`transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}>
                  <img
                    src={screenshots[currentScreenshot]}
                    alt="Target Mate app interface"
                    className="w-full h-full object-cover rounded-[32px] transition-opacity duration-300 px-4 py-3"
                  />
                </div>
              </div>
              <img
                src="/screenshots/iphone_14_frame.png"
                alt="Device Frame"
                className="absolute inset-0 w-full h-full z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
