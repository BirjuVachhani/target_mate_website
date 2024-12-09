import { Card, CardContent } from "@/components/ui/card";
import { TextLogo } from "@/components/ui/text-logo";
import { WEBSITE } from "@/lib/constants";

export function MotivationPage() {
  return (
    <div className="container py-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">The Story Behind <TextLogo className="inline pb-1" width="180" height="40" /></h1>
        <h2 className="text-lg font-regular mb-8 text-muted-foreground">
          From the creator: <a href={WEBSITE} className="text-primary no-underline"><strong>Birju Vachhani</strong></a>
        </h2>
        <div className="prose dark:prose-invert">
          <p className="lead text-lg mb-8">
            As a dedicated Toggl Track user, I found myself needing a solution to better manage my working hours and maintain a healthy work-life balance.
          </p>

          <Card className="mb-8">
            <CardContent className="p-6">
              <p className="italic text-muted-foreground">
                "I love Toggl Track and I use it daily to track my working hours and generate time sheets at the end of the month. It provides almost all the things I need from a time tracking app except one thing..."
              </p>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold mt-12 mb-4">The Challenge</h2>
          <p>
            Working on hourly-billed projects with monthly caps presented a unique challenge. While Toggl Track excelled at tracking time, it lacked the ability to:
          </p>
          <ul className="list-disc pl-6 my-4">
            <li>Account for monthly hour limits</li>
            <li>Consider personal working days and holidays</li>
            <li>Calculate daily targets based on remaining hours</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4">Real-World Complexity</h2>
          <p>
            The reality of work isn't always predictable. Some days demand longer hours, while others are lighter. Without proper tracking, it's easy to:
          </p>
          <ul className="list-disc pl-6 my-4">
            <li>Lose track of daily targets</li>
            <li>Overwork when deadlines are flexible</li>
            <li>Struggle to maintain work-life balance</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4">The Solution</h2>
          <p>
            Target Mate was born from this need - a companion app that works alongside Toggl Track to:
          </p>
          <ul className="list-disc pl-6 my-4">
            <li>Automatically calculate daily targets</li>
            <li>Account for flexible schedules</li>
            <li>Provide real-time progress updates</li>
            <li>Help maintain healthy work boundaries</li>
          </ul>

          <p className="mt-8">
            The app has one primary goal: eliminate the tedious manual calculations and provide clear visibility into daily and monthly targets. It does this job perfectly, helping users maintain a healthy work-life balance while staying within project constraints.
          </p>
        </div>
      </div>
    </div>
  );
}