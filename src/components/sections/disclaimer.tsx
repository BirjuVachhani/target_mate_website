import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export function Disclaimer() {
  return (
    <section className="py-16">
      <div className="container">
        <Card className="border-muted bg-muted/50">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <AlertCircle className="h-6 w-6 text-muted-foreground flex-shrink-0 mt-1" />
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Important Note</h3>
                <p className="text-muted-foreground">
                  Target Mate is not an independent time tracking application. It works exclusively as a companion app for Toggl Track to help you manage and visualize your working hours goals. You must use Toggl Track to record your time - Target Mate helps you stay on track with your daily and monthly targets while maintaining your preferred work-life balance.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}