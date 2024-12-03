import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function PrivacyPage() {
  return (
    <div className="container py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: March 25, 2023</p>

        <div className="prose dark:prose-invert max-w-none">
          <Card className="mb-8">
            <CardContent className="p-6">
              <p className="text-muted-foreground">
                This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
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
                    { term: "Account", definition: "A unique account created for You to access our Service or parts of our Service." },
                    { term: "Application", definition: "Target Mate, the software program provided by the Company." },
                    { term: "Company", definition: "Target Mate (referred to as either 'the Company', 'We', 'Us' or 'Our' in this Agreement)." },
                    { term: "Country", definition: "Gujarat, India" },
                    { term: "Device", definition: "Any device that can access the Service such as a computer, a cellphone or a digital tablet." },
                    { term: "Personal Data", definition: "Any information that relates to an identified or identifiable individual." },
                    { term: "Service", definition: "The Application." }
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
            <h2 className="text-2xl font-bold mb-6">Collecting and Using Your Personal Data</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Types of Data Collected</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Personal Data</h4>
                    <p className="text-muted-foreground mb-3">
                      While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
                    </p>
                    <ul className="list-disc pl-6 text-muted-foreground">
                      <li>Email address</li>
                      <li>Usage Data</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Usage Data</h4>
                    <p className="text-muted-foreground">
                      Usage Data is collected automatically when using the Service. Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, unique device identifiers and other diagnostic data.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Use of Your Personal Data</h3>
                <p className="text-muted-foreground mb-4">The Company may use Personal Data for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>To provide and maintain our Service, including to monitor the usage of our Service.</li>
                  <li>To manage Your Account and registration as a user of the Service.</li>
                  <li>For the performance of a contract with You.</li>
                  <li>To contact You regarding updates or informative communications related to the functionalities.</li>
                  <li>To manage Your requests to Us.</li>
                </ul>
              </div>
            </div>
          </section>

          <Separator className="my-8" />

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Children's Privacy</h2>
            <p className="text-muted-foreground">
              Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy, You can contact us:
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