import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageSquare } from "lucide-react";

export function Contact() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl max-w-[800px]">
            Get in Touch
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Have questions or feedback? We'd love to hear from you.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-6">
            <div className="grid gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Contact Options</h3>
                <p className="text-muted-foreground">
                  Whether you need help with setup, have feature requests, or just want to share your thoughts, feel free to reach out.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="flex-1 gap-2 h-auto py-6"
                  onClick={() => window.open('mailto:brvachhani@gmail.com')}
                >
                  <Mail className="h-5 w-5" />
                  <div className="text-left">
                    <div className="font-semibold">Email Us</div>
                    <div className="text-sm text-muted">For general inquiries</div>
                  </div>
                </Button>
                
                <Button
                  variant="outline"
                  className="flex-1 gap-2 h-auto py-6"
                  onClick={() => window.open('https://github.com/targetmate/issues', '_blank')}
                >
                  <MessageSquare className="h-5 w-5" />
                  <div className="text-left">
                    <div className="font-semibold">GitHub Issues</div>
                    <div className="text-sm text-muted">For bug reports & features</div>
                  </div>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}