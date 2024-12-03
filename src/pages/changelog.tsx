import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ChangelogPage() {
  return (
    <div className="container py-24">
      <h1 className="text-4xl font-bold mb-12">Changelog</h1>
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Version 0.8.0</CardTitle>
            <p className="text-sm text-muted-foreground">August 7, 2024</p>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Add support for clients</li>
              <li>Better handling of errors when fetching data</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Version 0.7.1</CardTitle>
            <p className="text-sm text-muted-foreground">May 22, 2024</p>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Show finishing time even when timer is not running</li>
              <li>Miscellaneous improvements</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Version 0.7.0</CardTitle>
            <p className="text-sm text-muted-foreground">November 29, 2023</p>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fix daily average calculation</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Version 0.1.0 - Initial Release</CardTitle>
            <p className="text-sm text-muted-foreground">February 4, 2023</p>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Initial Release</li>
              <li>Supports auth via credentials and API key</li>
              <li>Custom working days selection to adjust for leaves and holidays</li>
              <li>Set max monthly hours limit</li>
              <li>Supports tracking per workspace, per project on Toggl Track</li>
              <li>Auto syncs stats at configurable intervals</li>
              <li>Beautiful themes to select from</li>
              <li>Tracks per day average working hours based on already tracked hours</li>
              <li>Displays today's progress in system tray on desktop</li>
              <li>Integrates with system tray on desktop for quick controls</li>
              <li>Notifications support. Shows a notification for daily and monthly achieved goals</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}