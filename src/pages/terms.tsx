import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function TermsPage() {
  return (
    <div className="container py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>
        <p className="text-muted-foreground mb-8">Last updated: <strong>December 08, 2024</strong></p>

        <div className="prose dark:prose-invert max-w-none">
          <Card className="mb-8">
            <CardContent className="p-6">
              <p className="text-muted-foreground">
                Please read these terms and conditions carefully before using Our Service.
              </p>
            </CardContent>
          </Card>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Interpretation and Definitions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Interpretation</h3>
                <p className="text-muted-foreground">
                  The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Definitions</h3>
                <div className="space-y-4">
                  {[
                    { term: "Application", definition: "The software program provided by the Company downloaded by You on any electronic device, named Target Mate." },
                    { term: "Application Store", definition: "The digital distribution service operated and developed by Apple Inc. (Apple App Store) or Google Inc. (Google Play Store) in which the Application has been downloaded." },
                    { term: "Affiliate", definition: "An entity that controls, is controlled by or is under common control with a party." },
                    { term: "Country", definition: "Gujarat, India." },
                    { term: "Company", definition: "Target Mate (referred to as either 'the Company', 'We', 'Us' or 'Our' in this Agreement)." },
                    { term: "Device", definition: "Any device that can access the Service such as a computer, a cellphone or a digital tablet." },
                    { term: "Service", definition: "Refers to the Application." },
                    { term: "Terms and Conditions", definition: "These Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service." },
                    { term: "You", definition: "The individual accessing or using the Service." }
                  ].map((item) => (
                    <div key={item.term} className="pl-4 border-l-2 border-muted">
                      <h4 className="font-semibold mb-1">{item.term}</h4>
                      <p className="text-muted-foreground">{item.definition}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <Separator className="my-8" />

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Acknowledgment</h2>
            <p className="text-muted-foreground">
              These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
            </p>
            <p className="text-muted-foreground">
              Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.
            </p>
            <p className="text-muted-foreground">
              By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.
            </p>
            <p className="text-muted-foreground">
              You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Links to Other Websites</h2>
            <p className="text-muted-foreground">
              Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.
            </p>
            <p className="text-muted-foreground">
              The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Termination</h2>
            <p className="text-muted-foreground">
              We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about these Terms and Conditions, You can contact us:
            </p>
            <p className="mt-2">
              <a href="mailto:brvachhani@gmail.com" className="text-primary hover:underline">
                brvachhani@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}