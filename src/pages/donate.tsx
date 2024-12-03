import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Coffee, Github, Heart } from "lucide-react";

export function DonatePage() {
  return (
    <div className="container py-24">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Support Target Mate</h1>
          <p className="text-muted-foreground">
            If you find Target Mate useful, consider supporting its development
          </p>
        </div>

        <div className="grid gap-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="min-h-[250px]">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Coffee className="h-6 w-6" />
                  Buy me a coffee
                </CardTitle>
                <CardDescription>
                  Support the project with a one-time donation
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col justify-between h-[calc(100%-var(--card-header-height))] pb-0">
                <p className="text-muted-foreground">
                  Your one-time donation helps cover hosting costs and supports the development of new features. Every coffee counts towards making Target Mate better!
                </p>
                <Button
                  className="w-full mt-8"
                  onClick={() => window.open('https://www.buymeacoffee.com/targetmate', '_blank')}
                >
                  <Coffee className="h-4 w-4 mr-2" />
                  Buy me a coffee
                </Button>
              </CardContent>
            </Card>

            <Card className="min-h-[250px]">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Github className="h-6 w-6" />
                  GitHub Sponsors
                </CardTitle>
                <CardDescription>
                  Support ongoing development with a monthly sponsorship
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col justify-between h-[calc(100%-var(--card-header-height))]">
                <p className="text-muted-foreground">
                  Become a GitHub sponsor to support sustainable development of Target Mate. Monthly sponsorships help me dedicate more time to maintaining and improving the app.
                </p>
                <Button
                  className="w-full mt-4"
                  onClick={() => window.open('https://github.com/sponsors/targetmate', '_blank')}
                >
                  <Heart className="h-4 w-4 mr-2" />
                  Sponsor on GitHub
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="min-h-[350px]">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Heart className="h-6 w-6" />
                About the Creator
              </CardTitle>
              <CardDescription>
                The story behind Target Mate and its future
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Hi! I'm Birju Vachhani, a software engineer passionate about creating tools that make developers' lives easier. Target Mate was born out of my own need to better manage my working hours while using Toggl Track.
              </p>
              <p className="text-muted-foreground">
                I believe in creating open-source software that respects user privacy and solves real problems. Your support helps me dedicate more time to improving Target Mate and creating other useful tools for the community.
              </p>
              <div className="flex gap-4 mt-6">
                <Button
                  variant="outline"
                  onClick={() => window.open('https://github.com/brvachhani', '_blank')}
                >
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.open('mailto:brvachhani@gmail.com')}
                >
                  Contact Me
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}