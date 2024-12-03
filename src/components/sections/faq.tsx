import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const FAQ_ITEMS = [
  {
    question: "How do I get my Toggl Track API key?",
    answer: (
      <div className="space-y-4">
        <p>To get your API key from Toggl Track:</p>
        <ol className="list-decimal list-inside space-y-2">
          <li>Log in to your Toggl Track account</li>
          <li>Navigate to your Profile settings at <a href="https://track.toggl.com/profile" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">track.toggl.com/profile</a></li>
          <li>Scroll down to find the "API Token" section</li>
          <li>Click to reveal your API token</li>
        </ol>
        <Card className="mt-4 overflow-hidden">
          <img
            src="https://placehold.co/1200x800/2a2a2a/white?text=Toggl+Track+API+Key+Location"
            alt="Toggl Track API Key Location"
            className="w-full"
          />
        </Card>
        <p className="text-sm">Keep your API token private and secure - don't share it with anyone!</p>
      </div>
    )
  },
  {
    question: "Do I need a Toggl Track account to use Target Mate?",
    answer: "Yes, Target Mate is a companion app that works exclusively with Toggl Track. You'll need an active Toggl Track account to use our features for tracking and managing your working hours."
  },
  {
    question: "How does Target Mate calculate daily targets?",
    answer: "Target Mate takes into account your monthly hour limit, remaining working days, and already tracked hours to calculate optimal daily targets. It automatically adjusts these targets based on your actual working patterns and time tracked."
  },
  {
    question: "Is my Toggl Track data secure?",
    answer: "Absolutely! Target Mate uses secure authentication methods (API key or credentials) to access your Toggl Track data. We don't store any of your time entries - all data stays on your local machine and is only used for calculations and displaying statistics."
  },
  {
    question: "Can I use Target Mate offline?",
    answer: "Target Mate requires an internet connection to sync with Toggl Track. However, once synced, you can view your statistics and targets offline. The next sync will occur automatically when you're back online."
  },
  {
    question: "How often does Target Mate sync with Toggl Track?",
    answer: "By default, Target Mate syncs every 5 minutes, but you can customize this interval in the settings. You can also trigger a manual sync whenever needed."
  }
];

export function FAQ() {
  return (
    <section className="py-16 md:py-24" id="faq">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl max-w-[800px]">
            Frequently Asked Questions
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Find answers to common questions about Target Mate
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {FAQ_ITEMS.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}