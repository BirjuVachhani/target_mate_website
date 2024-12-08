import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const SCREENSHOTS = [
  {
    title: "Dashboard Overview",
    description: "Track your daily and monthly progress at a glance",
    image: "/screenshots/dashboard.jpeg"
  },
  {
    title: "Statistics & Reports",
    description: "Detailed insights into your working patterns",
    image: "https://placehold.co/640x1280/1a1a1a/white?text=Statistics+and+Reports"
  },
  {
    title: "Time Tracking",
    description: "Seamless integration with Toggl Track",
    image: "https://placehold.co/640x1280/1a1a1a/white?text=Time+Tracking"
  },
  {
    title: "Schedule Management",
    description: "Flexible working days and holiday settings",
    image: "https://placehold.co/640x1280/1a1a1a/white?text=Schedule+Management"
  }
];

export function Screenshots() {
  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl max-w-[800px]">
            Beautiful, Intuitive Interface
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Designed for productivity and ease of use
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {SCREENSHOTS.map((screenshot, index) => (
            <Card key={screenshot.title} className={cn(
              "group overflow-hidden bg-background/50 backdrop-blur-sm",
              index % 2 === 0 ? "md:translate-y-8" : ""
            )}>
              <CardContent className="p-0">
                <div className="aspect-[4/3] relative overflow-hidden rounded-t-lg">
                  <img
                    src={screenshot.image}
                    alt={screenshot.title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                    <h3 className="font-semibold text-lg mb-1">{screenshot.title}</h3>
                    <p className="text-sm text-muted-foreground">{screenshot.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}