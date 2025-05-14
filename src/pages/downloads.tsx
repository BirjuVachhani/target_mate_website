import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download } from "lucide-react";
import { AppleIcon, WindowsIcon, AndroidIcon, AppStoreIcon, PlayStoreIcon } from "@/components/icons/platform-icons";
import { TextLogo } from "@/components/ui/text-logo";
import { DownloadLinks, GITHUB_ISSUES } from "@/lib/constants";

export default function DownloadsPage() {
  return (
    <div className="container py-24">
      <div className="flex flex-col items-center text-center mb-12">
      <h1 className="text-4xl font-bold mb-4 text-center">Download <TextLogo className="inline pb-1" width="180" height="40" /></h1>
        <p className="text-muted-foreground max-w-[600px]">
          Choose your platform and start managing your goals more efficiently today!
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-[800px] mx-auto">
        <Card className="flex flex-col">
          <CardHeader className="flex-1">
            <CardTitle className="flex items-center gap-2 text-2xl">
              <AppleIcon className="h-6 w-6" />
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
            <Button className="w-full gap-2 py-6 text-base" variant="outline" asChild>
              <a
                href={DownloadLinks.MAC_STORE}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AppStoreIcon className="h-5 w-5" />
                Download from App Store
              </a>
            </Button>
            <Button className="w-full gap-2 py-6 text-base" asChild>
              <a
                href={DownloadLinks.MAC_DIRECT}
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
              <AndroidIcon className="h-6 w-6" />
              Android
            </CardTitle>
            <CardDescription className="text-base mt-2">
              Compatible with Android 8.0 and later
            </CardDescription>
            <div className="mt-4 text-sm text-muted-foreground">
              <p>Enjoy seamless background synchronization and real-time notifications.</p>
            </div>
          </CardHeader>
          <CardContent className="mt-auto space-y-3">
            <Button className="w-full gap-2 py-6 text-base" variant="outline" asChild>
              <a
                href={DownloadLinks.ANDROID_STORE}
                target="_blank"
                rel="noopener noreferrer"
              >
                <PlayStoreIcon className="h-5 w-5" />
                Get it on Google Play
              </a>
            </Button>
            <Button className="w-full gap-2 py-6 text-base" asChild>
              <a
                href={DownloadLinks.ANDROID_DIRECT}
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
            <Button className="w-full gap-2 py-6 text-base" asChild>
              <a
                href={DownloadLinks.WINDOWS_DIRECT}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="h-5 w-5" />
                Direct Download (.exe)
              </a>
            </Button>
          </CardContent>
        </Card>

        <Card className="flex flex-col">
          <CardHeader className="flex-1">
            <CardTitle className="flex items-center gap-2 text-2xl">
              <AppleIcon className="h-6 w-6" />
              iOS
            </CardTitle>
            <CardDescription className="text-base mt-2">
              iOS 14.0 and above
            </CardDescription>
            <div className="mt-4 text-sm text-muted-foreground">
              <p>Compatible with all iPhones and iPads, offering a seamless experience across devices.</p>
            </div>
          </CardHeader>
          <CardContent className="mt-auto">
            <Button className="w-full gap-2 py-6 text-base" asChild>
              <a
                href={DownloadLinks.IOS_STORE}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AppStoreIcon className="h-5 w-5" />
                Download on App Store
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-col items-center text-center mt-12">
        <h2 className="text-2xl font-bold mb-4">Report Issues</h2>
        <p className="text-muted-foreground max-w-[600px] mb-4">
          If you encounter any issues while downloading or using the app, please let us know!
        </p>
        <Button variant="outline" asChild>
          <a
            href={GITHUB_ISSUES}
            target="_blank"
            rel="noopener noreferrer"
          >
            Report an Issue
          </a>
        </Button>
      </div>
    </div>
  );
}