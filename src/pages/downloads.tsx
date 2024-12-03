import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Store } from "lucide-react";
import { MacOSIcon, WindowsIcon, AndroidIcon, IOSIcon } from "@/components/icons/platform-icons";
import { Link } from "react-router-dom";

const APP_VERSION:string = "0.7.1";

export function DownloadsPage() {
  return (
    <div className="container py-24">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Download Target Mate</h1>
        <p className="text-muted-foreground max-w-[600px]">
          Choose your platform and start tracking your time more efficiently today
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-[800px] mx-auto">
        <Card className="flex flex-col">
          <CardHeader className="flex-1">
            <CardTitle className="flex items-center gap-2 text-2xl">
              <MacOSIcon className="h-6 w-6" />
              macOS
            </CardTitle>
            <CardDescription className="text-base mt-2">
              For Apple Silicon and Intel Macs
            </CardDescription>
            <div className="mt-4 text-sm text-muted-foreground">
              <p>Universal binary supporting both Apple Silicon and Intel processors</p>
              <p className="mt-2">Optimized for macOS Sonoma and above</p>
            </div>
          </CardHeader>
          <CardContent className="mt-auto space-y-3">
            <Button className="w-full gap-2 py-6 text-lg" variant="outline" asChild>
              <a
                href="https://apps.apple.com/in/app/target-mate/id6447091819"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Store className="h-5 w-5" />
                Download from App Store
              </a>
            </Button>
            <Button className="w-full gap-2 py-6 text-lg" asChild>
              <a
                href={`https://github.com/BirjuVachhani/target_mate/releases/download/${APP_VERSION}/TargetMate-macos-${APP_VERSION}.dmg`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="h-5 w-5" />
                Direct Download (.dmg)
              </a>
            </Button>
          </CardContent>
        </Card>

        <Card className="flex flex-col">
          <CardHeader className="flex-1">
            <CardTitle className="flex items-center gap-2 text-2xl">
              <WindowsIcon className="h-6 w-6" />
              Windows
            </CardTitle>
            <CardDescription className="text-base mt-2">
              Windows 10 and above
            </CardDescription>
            <div className="mt-4 text-sm text-muted-foreground">
              <p>64-bit installer with automatic updates</p>
              <p className="mt-2">Windows 10/11 native features support</p>
            </div>
          </CardHeader>
          <CardContent className="mt-auto">
            <Button className="w-full gap-2 py-6 text-lg" asChild>
              <a
                href={`https://github.com/BirjuVachhani/target_mate/releases/download/${APP_VERSION}/TargetMate-windows-${APP_VERSION}.exe`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="h-5 w-5" />
                Download for Windows
              </a>
            </Button>
          </CardContent>
        </Card>

        <Card className="flex flex-col">
          <CardHeader className="flex-1">
            <CardTitle className="flex items-center gap-2 text-2xl">
              <AndroidIcon className="h-6 w-6" />
              Android
            </CardTitle>
            <CardDescription className="text-base mt-2">
              Android 8.0 and above
            </CardDescription>
            <div className="mt-4 text-sm text-muted-foreground">
              <p>Material You design with dynamic theming</p>
              <p className="mt-2">Background sync and notifications</p>
            </div>
          </CardHeader>
          <CardContent className="mt-auto space-y-3">
            <Button className="w-full gap-2 py-6 text-lg" variant="outline" asChild>
              <a
                href="https://play.google.com/store/apps/details?id=dev.birju.targetmate"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Store className="h-5 w-5" />
                Get it on Google Play
              </a>
            </Button>
            <Button className="w-full gap-2 py-6 text-lg" asChild>
              <a
                href={`https://github.com/BirjuVachhani/target_mate/releases/download/${APP_VERSION}/TargetMate-android-${APP_VERSION}.apk`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="h-5 w-5" />
                Direct Download (.apk)
              </a>
            </Button>
          </CardContent>
        </Card>

        <Card className="flex flex-col">
          <CardHeader className="flex-1">
            <CardTitle className="flex items-center gap-2 text-2xl">
              <IOSIcon className="h-6 w-6" />
              iOS
            </CardTitle>
            <CardDescription className="text-base mt-2">
              iOS 14.0 and above
            </CardDescription>
            <div className="mt-4 text-sm text-muted-foreground">
              <p>Native iOS design with widgets support</p>
              <p className="mt-2">iCloud sync and backup</p>
            </div>
          </CardHeader>
          <CardContent className="mt-auto">
            <Button className="w-full gap-2 py-6 text-lg" asChild>
              <a
                href="https://apps.apple.com/in/app/target-mate/id6447091819"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="h-5 w-5" />
                Download on App Store
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}