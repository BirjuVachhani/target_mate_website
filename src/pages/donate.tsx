import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TextLogo } from "@/components/ui/text-logo";
import { Coffee, Github, Heart } from "lucide-react";

export function DonatePage() {
  return (
    <div className="container py-24">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-center">Support <TextLogo className="inline pb-1" width="180" height="40" /></h1>
          <p className="text-muted-foreground">
            If you find Target Mate useful, consider supporting its development
          </p>
        </div>

        <div className="grid gap-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="min-h-[200px]">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Coffee className="h-6 w-6" />
                  Buy me a coffee
                </CardTitle>
                <CardDescription>
                  Support the project with a one-time donation
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col h-[calc(100%-var(--card-header-height))] p-6 pt-4">
                <p className="text-muted-foreground flex-grow">
                  Your one-time donation helps cover hosting costs and supports the development of new features. Every coffee counts towards making Target Mate better!
                </p>
                <Button
                  className="w-full mt-8"
                  asChild
                >
                  <a
                    href="https://buymeacoffee.com/birjuvachhani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-2"
                  >
                    <Coffee className="h-4 w-4" />
                    Buy me a coffee
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="min-h-[200px]">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Github className="h-6 w-6" />
                  GitHub Sponsors
                </CardTitle>
                <CardDescription>
                  Support the project with a sponsorship
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col h-[calc(100%-var(--card-header-height))] p-6 pt-4">
                <p className="text-muted-foreground flex-grow">
                  Become a sponsor to support sustainable development of Target Mate. Monthly sponsorships help me dedicate more time to maintaining and improving the app.
                </p>
                <Button
                  className="w-full mt-8"
                  asChild
                >
                  <a
                    href="https://github.com/sponsors/BirjuVachhani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-2"
                  >
                    <Heart className="h-4 w-4" />
                    Sponsor on GitHub
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="min-h-[200px]">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Heart className="h-6 w-6" />
                About the Creator
              </CardTitle>
              <CardDescription>
                The story behind Target Mate and its future
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col h-[calc(100%-var(--card-header-height))] p-6 pt-4">
              <div className="flex items-center space-x-4">
                <img src="https://github.com/BirjuVachhani.png" alt="Birju Vachhani" className="h-12 w-12 rounded-full" />
                <div>
                  <h2 className="text-xl font-semibold">Birju Vachhani</h2>
                  <p className="text-muted-foreground">Sr. Software Engineer</p>
                </div>
              </div>
              <div className="space-y-4 flex-grow mt-6">
                <p className="text-muted-foreground mb-2">
                  Hi! I'm Birju Vachhani, a Sr. Software Engineer passionate about creating tools that make developers' lives easier. Target Mate was born out of my own need to better manage my working hours while using Toggl Track.
                </p>
                <p className="text-muted-foreground">
                  I believe in creating open-source software that respects user privacy and solves real problems. Your support helps me dedicate more time to improving Target Mate and creating other useful tools for the community.
                </p>
              </div>
              <div className="flex gap-4 mt-8">
                <Button
                  variant="outline"
                  asChild
                >
                  <a
                    href="https://github.com/BirjuVachhani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-2"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button
                  variant="outline"
                  asChild
                >
                  <a
                    href="mailto:brvachhani@gmail.com"
                    className="gap-2"
                  >
                    Contact Me
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}