import { FEATURES } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";

export function Features() {
  return (
    <section className="py-16 md:py-24" id="features">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl max-w-[800px]">
            Features that make a difference
          </h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Discover why our app is the perfect solution for your needs
          </p>
        </div>
        <div className="space-y-24">
          {FEATURES.map((feature, index) => {
            const IconComponent = Icons[feature.icon as keyof typeof Icons] as LucideIcon;
            return (
              <div
                key={feature.title}
                className={`flex flex-col gap-12 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className="lg:w-1/2 space-y-4">
                  <div className="inline-block rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground max-w-[500px]">
                    {feature.description}
                  </p>
                </div>
                <div className="lg:w-1/2 flex justify-center lg:justify-end">
                  <Card className="w-full max-w-[600px] overflow-hidden">
                    <CardContent className="p-0">
                      <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg flex items-center justify-center">
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="rounded-lg object-cover w-full h-full"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}