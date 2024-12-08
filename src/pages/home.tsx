import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
// import { Screenshots } from "@/components/sections/screenshots";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { Disclaimer } from "@/components/sections/disclaimer";

export function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      {/* <Screenshots /> */}
      <Testimonials />
      <FAQ />
      <Contact />
      <Disclaimer />
    </main>
  );
}