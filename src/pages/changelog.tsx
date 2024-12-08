import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book } from 'lucide-react';
import { Button } from "@/components/ui/button";

export function ChangelogPage() {
  return (
    <div className="container py-24">
      <div className="mb-4">
        <Book size={64} />
      </div>
      <h1 className="text-4xl font-bold mb-2">Changelog</h1>
      <h2 className="text-xl text-muted-foreground mb-8">Stay updated with the latest changes and improvements</h2>
      <Button className="mb-8" variant="outline" asChild>
        {/* ... existing button code ... */}
      </Button>
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl flex items-center">
              Version 0.8.0 
              <span className="inline-flex items-center justify-center ml-2 px-2 py-0.5 text-sm font-medium text-blue-500 border border-blue-500 rounded-full">latest</span>
            </CardTitle>
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
            <CardTitle className="text-2xl">Version 0.6.9</CardTitle>
            <p className="text-sm text-muted-foreground">November 27, 2023</p>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Hotfix billable filter not working properly.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Version 0.6.8</CardTitle>
            <p className="text-sm text-muted-foreground">November 25, 2023</p>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Add option to filter tracking for billable/non-billable/everything entries.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Version 0.6.7</CardTitle>
            <p className="text-sm text-muted-foreground">October 30, 2023</p>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fixed daily remaining calculation when no more working days are remaining and goal is not achieved.</li>
              <li>Upgrade dependencies and maintenance.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Version 0.6.6</CardTitle>
            <p className="text-sm text-muted-foreground">September 4, 2023</p>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Remove donation link.</li>
              <li>Fix inline code-block styling in markdown viewer.</li>
              <li>Remove Rive and its usages.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Version 0.6.5</CardTitle>
            <p className="text-sm text-muted-foreground">August 31, 2023</p>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fix handling of duration conversion when value is zero.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Version 0.6.4</CardTitle>
            <p className="text-sm text-muted-foreground">August 26, 2023</p>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fix button size in update dialog.</li>
              <li>Fix window not movable when update dialog is showing.</li>
              <li>Improve update dialog configuration.</li>
              <li>Add `Extra` section in settings screen.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Version 0.6.3</CardTitle>
            <p className="text-sm text-muted-foreground">June 8, 2023</p>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Only show working extra badge when working extra and timer is actually running.</li>
              <li>Show Expected Finish Time when timer is running.</li>
              <li>Show proper error when incorrect max hours are provided.</li>
              <li>Fix number formatting for working hours and max hours.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Version 0.6.2</CardTitle>
            <p className="text-sm text-muted-foreground">May 23, 2023</p>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fix today's progress showing incorrect time initially while loading.</li>
              <li>Add nice loading indicator for today's progress bar.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Version 0.6.1</CardTitle>
            <p className="text-sm text-muted-foreground">April 28, 2023</p>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Improved day progress indicator.</li>
              <li>Fix day progress indicator text showing with incorrect color.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Version 0.6.0</CardTitle>
            <p className="text-sm text-muted-foreground">April 23, 2023</p>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Add support for light theme.</li>
              <li>Improved fonts and colors.</li>
              <li>Fix email input field for login not taking more than 32 characters.</li>
              <li>Improved formats for displaying durations.</li>
              <li>Fix swipe to go back gesture on iOS.</li>
              <li>Improved UI for time entries.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Version 0.5.1</CardTitle>
            <p className="text-sm text-muted-foreground">April 12, 2023</p>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Disable auto backup for Android.</li>
              <li>Fix system tray icon not changing properly.</li>
              <li>Fix system tray icon not adapting to status bar color on macOS.</li>
              <li>Show overtime info for daily goals.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Version 0.5.0</CardTitle>
            <p className="text-sm text-muted-foreground">April 2, 2023</p>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Dynamic icons for macOS app. Dock icon changes based on whether the timer is running or not.</li>
              <li>Fix progress bar showing completed icon when it is not completed.</li>
              <li>Show app icon as system tray icon on Windows.</li>
              <li>Use standard system buttons for Windows.</li>
              <li>Fix Windows system buttons to be consistent across all screens.</li>
              <li>Fix: Goals showing zero or negative for extra days when monthly goal is achieved.</li>
              <li>Fix day total duration showing 0 when in seconds only.</li>
              <li>Show left keyword in labels when show remaining option is enabled.</li>
              <li>Show overtime hours when goal is achieved and show remaining is true.</li>
              <li>Update system tray icon on Windows.</li>
              <li>Fix login issue when profile is missing data.</li>
              <li>Replace secure storage with encrypted shared preferences.</li>
              <li>Fix window full screen issue when launched.</li>
              <li>Fix target data not resetting after logout.</li>
              <li>Fix theme not resetting properly after logout.</li>
              <li>Fix local notification triggering repeatedly.</li>
              <li>Fix calendar overflow error.</li>
              <li>UI tweaks.</li>
              <li>Show a snackbar when a new update is available.</li>
              <li>Upgrade dependencies.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Version 0.4.0</CardTitle>
            <p className="text-sm text-muted-foreground">March 24, 2023</p>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Rebranded to "Target Mate".</li>
              <li>Fix migration detection when the app is run for the first time.</li>
              <li>Change default theme to blue.</li>
              <li>Fix logo color on auth screen.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Version 0.3.1</CardTitle>
            <p className="text-sm text-muted-foreground">March 12, 2023</p>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fix date parsing not accounting for local time zone.</li>
              <li>Fix dividers in home screen.</li>
              <li>Fix Toolbars for macOS and Windows.</li>
              <li>Release for Windows.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Version 0.3.0</CardTitle>
            <p className="text-sm text-muted-foreground">March 6, 2023</p>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fix system tray icon showing too big.</li>
              <li>Show done icon when completed on macOS.</li>
              <li>Add Settings option in system tray.</li>
              <li>Fix system UI overlay colors and brightness for Android and iOS.</li>
              <li>Fix stretched splash screen icon on Android.</li>
              <li>Fix app not running on Android and iOS.</li>
              <li>Fix app to only have portrait orientation.</li>
              <li>Revamp settings screen UI.</li>
              <li>Add option to use faded colors for themes.</li>
              <li>Dismiss keyboard on background click.</li>
              <li>Fix overflow on auth page due to virtual keyboard.</li>
              <li>Fix decoration color for hyperlinks.</li>
              <li>Add workspace and project selection options in settings screen.</li>
              <li>Add option to show remaining total hours and working days instead of completed.</li>
              <li>Show working extra label only when some progress has been made on non-working day.</li>
              <li>Improve UI for today's progress bar.</li>
              <li>Merge workspace and project selection pages in onboarding flow.</li>
              <li>Implement chopper for making API requests.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Version 0.2.1</CardTitle>
            <p className="text-sm text-muted-foreground">March 2, 2023</p>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fix app not opening properly on macOS.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Version 0.2.0</CardTitle>
            <p className="text-sm text-muted-foreground">February 21, 2023</p>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Replace secure storage with encrypted shared preferences.</li>
              <li>Fix window full screen issue when launched.</li>
              <li>Fix target data not resetting after logout.</li>
              <li>Fix theme not resetting properly after logout.</li>
              <li>Fix local notification triggering repeatedly.</li>
              <li>Fix calendar overflow error.</li>
              <li>UI tweaks.</li>
              <li>Show a snackbar when a new update is available.</li>
              <li>Upgrade dependencies.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Version 0.1.1</CardTitle>
            <p className="text-sm text-muted-foreground">February 12, 2023</p>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fixed Android app not connecting to the server issue.</li>
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
              <li>Initial Release.</li>
              <li>Supports auth via credentials and API key.</li>
              <li>Custom working days selection to adjust for leaves and holidays.</li>
              <li>Set max monthly hours limit.</li>
              <li>Supports tracking per workspace, per project on Toggl Track.</li>
              <li>Auto syncs stats at configurable intervals.</li>
              <li>Beautiful themes to select from.</li>
              <li>Tracks per day average working hours based on already tracked hours.</li>
              <li>Displays today's progress in system tray on desktop.</li>
              <li>Integrates with system tray on desktop for quick controls.</li>
              <li>Notifications support. Shows a notification for daily and monthly achieved goals.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}